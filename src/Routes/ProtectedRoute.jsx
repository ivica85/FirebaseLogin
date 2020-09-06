import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { UserContext } from '../context/User';

const ProtectedRoute = ({ component: Component, ...props }) => {
  const { user } = useContext(UserContext);
  return (
    <Route
      {...props}
      render={(routeProps) =>
        !!user ? <Component {...routeProps} /> : <Redirect to={'/login'} />
      }
    ></Route>
  );
};

export default ProtectedRoute;
