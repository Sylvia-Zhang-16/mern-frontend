import React, { useState, useCallback, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

// import Users from './user/pages/Users';

import MainNavigation from './shared/components/Navigation/MainNavigation';
import { AuthContext } from './shared/context/auth-context';
import LoadingSpinner from './src/shared/components/UIElements/LoadingSpinner'

const Users = React.lazy(() => import('./user/pages/Users'));
const NewActivity = React.lazy(() => import('./activities/pages/NewActivity'));
const UserActivity = React.lazy(() => import('./activities/pages/UserActivity'));
const Auth = React.lazy(() => import('./user/pages/Auth'));

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(false);

  const login = useCallback(uid => {
    setIsLoggedIn(true);
    setUserId(uid);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
    setUserId(null);
  }, []);

  let routes;

  if (isLoggedIn) {
    routes = (
      <Switch>
        <Route path="/" exact>
          <Users />
        </Route>
        <Route path="/:userId/activities" exact>
          <UserActivity />
        </Route>
        <Route path="/activities/new" exact>
          <NewActivity />
        </Route>
        <Route path="/activities/:placeId">
          <UpdateActivity />
        </Route>
        <Redirect to="/" />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route path="/" exact>
          <Users />
        </Route>
        <Route path="/:userId/activities" exact>
          <UserActivity />
        </Route>
        <Route path="/auth">
          <Auth />
        </Route>
        <Redirect to="/auth" />
      </Switch>
    );
  }

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        userId: userId,
        login: login,
        logout: logout
      }}
    >
      <Router>
        <MainNavigation />
        <main><Suspense fallback={
        <div className='center'>
          <LoadingSpinner />
        </div>}>
          {routes}</Suspense></main>
      </Router>
    </AuthContext.Provider>
  );
};

export default App;
