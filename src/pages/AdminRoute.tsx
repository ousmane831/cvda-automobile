// src/pages/AdminRoute.tsx
import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';
import { toast } from 'react-hot-toast';

interface AdminRouteProps {
  children: JSX.Element;
}

const AdminRoute = ({ children }: AdminRouteProps) => {
  const { authData } = useContext(AuthContext);

  // Si pas connecté
  if (!authData) {
    toast.error("Vous devez être connecté pour accéder au dashboard");
    return <Navigate to="/login" replace />;
  }

  // Vérifier le rôle
  if (authData.user.role !== 'admin') {
    toast.error("Vous n'êtes pas autorisé à accéder au dashboard");
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default AdminRoute;
