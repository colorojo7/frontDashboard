import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../auth/AuthProvider';
import routes from './routes';

const PublicRoute = ({ children }) => {

  const {user} = useAuth()
  console.log("user en PublicRoute",user);

  if (user) {
    // Si no está autenticado, redirige a la página de inicio de sesión
    return <Navigate to={routes.dashboard} replace />
  }

  // Si está autenticado, renderiza el componente hijo
  return children
}

export default PublicRoute