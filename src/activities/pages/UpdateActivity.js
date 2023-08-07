import React, { useEffect, useState, useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import Card from '../../shared/components/UIElements/Card';
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH
} from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook';
import { useHttpClient } from '../../shared/hooks/http-hook';
import './Placeform.css';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import { AuthContext } from '../../shared/context/auth-context';


const UpdateActivity = () => {
  const auth = useContext(AuthContext);
  const history = useHistory();
  const { isLoading, error, sendRequest, clearError} = useHttpClient();

  const [loadedActivities, setLoadedActivities] = useState();

  const activityId = useParams().activityId;

  const [formState, inputHandler, setFormData] = useForm(
    {
      title: {
        value: '',
        isValid: false
      },
      description: {
        value: '',
        isValid: false
      }
    },
    false
  );

  useEffect( () => {
    const fetchActivity = async () => {
      try {
        const reponseData = await sendRequest(process.env.REACT_APP_BACKEND_URL +`/activities/${activityId}`,
        );

        setLoadedActivities(reponseData.activity);
        setFormData(
              {
                title: {
                  value: reponseData.activity.title,
                  isValid: true
                },
                description: {
                  value: reponseData.activity.description,
                  isValid: true
                }
              },
              true
        );


      }catch(err) {};
      
    }
    
    fetchActivity();

  }, [sendRequest, activityId, setFormData]);


  const activityUpdateSubmitHandler = async event => {
    event.preventDefault();

    try {
      await sendRequest(
        process.env.REACT_APP_BACKEND_URL +`/activities/${activityId}`,
        'PATCH',
        JSON.stringify({
          title: formState.inputs.title.value,
          description: formState.inputs.description.value
        }),
        {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + auth.token
        }
      );
      history.push('/' + auth.userId + '/activities');
    } catch (err) {}

  };

  if (!loadedActivities) {
    return (
      <div className="center">
        <Card>
          <h2>Could not find activity!</h2>
        </Card>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="center">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <>
    <ErrorModal error={error} onClear={clearError} />
      {!isLoading && loadedActivities && (
      <form className="place-form" onSubmit={activityUpdateSubmitHandler}>
        <Input
          id="title"
          element="input"
          type="text"
          label="Title"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter a valid title."
          onInput={inputHandler}
          initialValue={loadedActivities.title}
          initialValid={true}
        />
        <Input
          id="description"
          element="textarea"
          label="Description"
          validators={[VALIDATOR_MINLENGTH(5)]}
          errorText="Please enter a valid description (min. 5 characters)."
          onInput={inputHandler}
          initialValue={loadedActivities.description}
          initialValid={true}
        />
        <Button type="submit" disabled={!formState.isValid}>
          UPDATE ACTIVITY
        </Button>
      </form>
      )};
  </>
  );

};

export default UpdateActivity;
