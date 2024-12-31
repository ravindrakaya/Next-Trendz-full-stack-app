import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function ProtectedRoute({ children }) {
  const token = useSelector((state) => state.auth.token);

  return token ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;
