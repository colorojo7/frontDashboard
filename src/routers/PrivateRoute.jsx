import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../auth/AuthProvider";
import routes from "./routes";

const PrivateRoute = ({ role, children }) => {
  const { user, hasRole, isLogged } = useAuth();
  console.log("user en PrivateRoute", user, isLogged, hasRole(role));

  if (!isLogged()) {
    // if is not logged send the user to login
    return <Navigate to={routes.login} replace />;
  }
  if (role && !hasRole(role)) {
    // if the role dont match send the user to dashboard,
    return <Navigate to={routes.dashboard.home} replace />;
  }

  // Si está autenticado, renderiza el componente hijo
  return children;
};

export default PrivateRoute;
