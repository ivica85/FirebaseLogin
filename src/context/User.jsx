import React, { createContext, useEffect, useState } from 'react';
import { auth, handleUserProvider } from '../Firebase/Config';

export const UserContext = createContext({ user: null });

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(async (authUser) => {
      if (authUser) {
        const userDoc = await handleUserProvider(authUser);
        userDoc.onSnapshot((snapShot) => {
          setUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        setUser(null);
      }
    });
  }, []);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
