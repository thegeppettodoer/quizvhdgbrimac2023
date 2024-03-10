import React from "react";
import { useAuth } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";
import { User } from "../domain/models/User";

interface PrivateRouteProps {
  Component: React.FC;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ Component }) => {
  const { user }: { user: User | null } = useAuth();

  return user ? <Component /> : <Navigate to="/" />;
};

export default PrivateRoute;
