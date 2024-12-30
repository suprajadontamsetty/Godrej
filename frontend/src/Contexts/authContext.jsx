import React, { useContext, createContext, useEffect, useState } from "react";
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [auth,setAuth]=useState({
        user:"",
        token:""
    });
useEffect(()=>{
  const data=localStorage.getItem('auth');
  if(data){
    const parseData=JSON.parse(data);
    setAuth({
        ...auth, 
        user:parseData.user||"Hello user! please login",
        token:parseData.token
    })
  }
},[auth])

  return (
    <AuthContext.Provider
   value={[auth,setAuth]}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  return useContext(AuthContext);
};

export { useAuth, AuthProvider };
