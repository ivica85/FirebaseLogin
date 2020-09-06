import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ProtectedRout from './ProtectedRoute';
import Home from '../Pages/Home';
import Login from '../Pages/Login';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <ProtectedRout path={'/'} component={Home} exact />
        <Route path={'/login'} component={Login} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
