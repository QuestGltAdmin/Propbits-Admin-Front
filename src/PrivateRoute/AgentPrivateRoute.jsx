import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const AgentPrivateRoute = ({ children }) => {
  const { user } = useAuth();
  const location = useLocation();
  if ( user?.status == "active" && user.role === "agent") {
    return children;
  } else {
    return <Navigate to="/" state={{ from: location }} />;
  }
};

export default AgentPrivateRoute;