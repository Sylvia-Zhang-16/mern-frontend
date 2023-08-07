import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import ActivityList from '../components/ActivityList';
import { useHttpClient } from '../../shared/hooks/http-hook';
import { AuthContext } from '../../shared/context/auth-context'; 
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';


const UserActivity = () => {
  const { isLoading, error, sendRequest, clearError} = useHttpClient();
  const [loadedActivities, setLoadedActivities] = useState();

  const userId = useParams().userId;

  useEffect( () => {
    const fetchActivities = async () => {
      try {
        const reponseData = await sendRequest(process.env.REACT_APP_BACKEND_URL + `\/activities/user/${userId}`);

        setLoadedActivities(reponseData.activities);

      }catch(err) {};

    }
    
    fetchActivities();

  }, [sendRequest, userId]);

  const activityDeleteHandler = deletedActivityId => {
    setLoadedActivities(prevActivities => 
      prevActivities.filter(activity => activity.id !== deletedActivityId));
  };

  return( 
    <><ErrorModal error={error} onClear={clearError} />
    {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
    {!isLoading && loadedActivities && <ActivityList items={loadedActivities} onDeletedActivity={activityDeleteHandler} />}
    </>
  );
};

export default UserActivity;
