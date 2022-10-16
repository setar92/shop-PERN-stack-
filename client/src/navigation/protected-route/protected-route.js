import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';


const ProtectedRoute = ({
  isAllowed = false,
  redirectPath = 'login',
  children,
}) => {
  const location = useLocation();
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace state={{ from: location }} />;
  }
  return children ? <>{children}</> : <Outlet />;
};

export { ProtectedRoute };
