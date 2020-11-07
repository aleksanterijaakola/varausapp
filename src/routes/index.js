import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';
import Register from '../pages/Register';
import '../App.css';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/registration" component={Register} />
      <Route path="/dashboard" component={Dashboard} isPrivate />
      {/* alter Route component to use variable "isPrivate and */}
      {/* redirect user to Login page if route does not exist or user is not authenticated */}
      <Route component={Login} />
    </Switch>
  );
}

