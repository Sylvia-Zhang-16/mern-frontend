import React from "react";
import { BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';

import Users from './user/pages/Users';
import Newactivity from './activities/pages/NewActivity';
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import UserActivity from "./activities/pages/UserActivity";
import UpdateActivity from "./activities/pages/UpdateActivity";
import Auth from "./user/pages/Auth";
import { AuthContext } from "./shared/context/auth-context";
import { useAuth } from "./shared/hooks/auth-hook";


const App = () => {

  const { token, login, logout, userId } = useAuth();


  let routes;

  if (token) {
    routes = (
      <Switch>
      <Route path="/" exact>
        <Users />
      </Route>
      <Route path='/:userId/activities' exact>
          <UserActivity />
        </Route>
      <Route path="/activities/new" exact>
          <Newactivity />
      </Route> 
      <Route path='/activities/:activityId'>
          <UpdateActivity />
      </Route>
        <Redirect to='/'/>
      </Switch>
    );
  }else{
    routes = (
      <Switch>
        <Route path="/" exact>
        <Users />
      </Route>
      <Route path='/:userId/activities' exact>
          <UserActivity />
        </Route>
        <Route path='/auth'>
          <Auth />
        </Route>
        <Redirect to='/auth'/>
        </Switch>
    );
  };

  return (
  <AuthContext.Provider 
  value={{
    isLoggedIn: !!token,
    token,
    userId,
    login,
    logout
    }}>
  <Router>
    <MainNavigation />
    <main>
        {routes}
    </main>
    
  </Router>
  </AuthContext.Provider>
  );
};

export default App;
