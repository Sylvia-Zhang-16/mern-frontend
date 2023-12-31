import React, { useCallback, useReducer, useContext } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

import './Placeform.css'
import Input from '../../shared/components/FormElements/Input';
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../shared/util/validators';
import Button from '../../shared/components/FormElements/Button';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import ImageUpload from '../../shared/components/FormElements/ImageUpload';

import { useForm } from '../../shared/hooks/form-hook';
import { useHttpClient } from '../../shared/hooks/http-hook';
import { AuthContext } from '../../shared/context/auth-context'; 



const NewActivity = () => {
  const { isLoading, error, sendRequest, clearError} = useHttpClient();

  const auth = useContext(AuthContext);

  const [formState, inputHandler] = useForm(
      {
        title: {
          value: '',
          isValid: false
        },
        description: {
          value: '',
          isValid: false
        },
        address: {
          value: '',
          isValid: false
        },
        image: {
          value: null,
          isValid: false
        }
      },
      false
    );
   const history = useHistory();

    const activitySubmitHandler = async event => {
      event.preventDefault();

      try {
          const formData = new FormData();
            formData.append('title', formState.inputs.title.value);
            formData.append('description', formState.inputs.description.value);
            formData.append('address', formState.inputs.address.value);
            formData.append('image', formState.inputs.image.value);
          await sendRequest(process.env.REACT_APP_BACKEND_URL + '/activities', 
          'POST', 
          formData,
          {Authorization: 'Bearer ' + auth.token}
          );
      history.push('/');

      }catch(err){};
    };

    const print = () => {
      console.log(auth.userId)
    }
  
    return (
      <><ErrorModal error={error} onClear={clearError} />
      <form className="place-form" onSubmit={activitySubmitHandler}>
      {isLoading && <LoadingSpinner asOverlay />}
        <Input
          id="title"
          element="input"
          type="text"
          label="Title"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter a valid title."
          onInput={inputHandler} />
        <Input
          id="description"
          element="textarea"
          label="Description"
          validators={[VALIDATOR_MINLENGTH(5)]}
          errorText="Please enter a valid description (at least 5 characters)."
          onInput={inputHandler} />
        <Input
          id="address"
          element="input"
          label="Address"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter a valid address."
          onInput={inputHandler} />
         <ImageUpload center id="image" onInput={inputHandler} errorText='Please provide an image.'/>
        <Button type="submit" onClick = {print} disabled={!formState.isValid}>
          ADD ACTIVITY
        </Button>
      </form></>
    );
  };

export default NewActivity;