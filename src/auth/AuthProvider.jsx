import React, { createContext, useContext, useState } from "react";
import roles from "./roles";


export const AuthContext = createContext()

export default function AuthProvider  ({children}) {

  //const [user, setUser] = useState({id:1, role:"admin"}) // Reemplazar por una consulta el servidor
  const [user, setUser] = useState(null)

  const login = (userCredentials) => setUser({id:1, role: roles.admin})
  const logout = () => setUser(null)

  const isLogged = () => !!user
  const hasRole = (role)=> user?.role ===role



 
  console.log("Logged y hasRole",isLogged,hasRole );
  return (
    <AuthContext.Provider 
    value={{
      user,
      isLogged,
      hasRole,
      login,
      logout
      }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = ()=> {
  return useContext(AuthContext)
}
