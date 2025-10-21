import React, { createContext, useState } from "react";

export const authContext = createContext();

const AuthProvider = ({ children }) => {
const  [isHuman , setIsHuman]= useState(false)

  return <authContext.Provider value={{isHuman , setIsHuman}}>{children}</authContext.Provider>;
};


   export default AuthProvider 

