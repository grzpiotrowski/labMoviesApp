import React, { useState, useContext, createContext } from "react";
import fakeAuth from '../fakeAuth'

export const AuthContext = createContext(null);

export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthContextProvider = ({children}) => {
  const [token, setToken ] = useState(null);

  const authenticate = async (username, password) => {
    const token = await fakeAuth(username, password) ;
    setToken(token);
  };

  const signout = () => {
    setToken(null) 
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        authenticate,
        signout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
