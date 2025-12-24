// src/components/ProtectedRoute.tsx
import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../pages/AuthContext";

interface ProtectedRouteProps {
  children: JSX.Element;
  requireAdmin?: boolean;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, requireAdmin }) => {
  const { authData } = useContext(AuthContext);

  if (!authData) {
    // pas connecté
    return <Navigate to="/login" replace />;
  }

  if (requireAdmin && authData.user.role !== "admin") {
    // connecté mais pas admin
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
