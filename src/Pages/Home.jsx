import React,{useContext} from 'react';
import { auth } from '../Firebase/Config';
import {UserContext} from '../context/User'

const Home = () => {

  const {user} = useContext(UserContext)
  return (
    <div>
      <h2>Welcome {user && user.displayName}</h2>
      
      <button onClick={() => auth.signOut()}>signOut</button>
    </div>
  );
};

export default Home;
