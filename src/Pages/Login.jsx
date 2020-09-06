import React, { useContext } from 'react';
import { signWithGoogle } from '../Firebase/Config';
import { Redirect } from 'react-router-dom';

import {UserContext} from '../context/User';

const Login = () => {
  const { user } = useContext(UserContext);
  if (user) {
    return <Redirect to={'/'} />;
  }


  return (
    <>
      {user && (
        <>
          <h1>{user.displayName}</h1>
          <h2>{user.email}</h2>
        </>
      )}
      <button onClick={signWithGoogle}>Login</button>
    </>
  );
};

export default Login;
