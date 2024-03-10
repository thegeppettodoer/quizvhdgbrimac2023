import React, { createContext, useContext, useState, ReactNode } from 'react';
import { User } from '../domain/models/User';

interface AuthContextType {
  user: User | null;
  signup: (userData: User) => void;
  login: (userData: User) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth debe ser usado dentro de un AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const signup = (userData: User) => {
    setUser(userData);
    // Lógica para registrar usuarios
  };

  const login = (userData: User) => {
    setUser(userData);
    // Lógica para iniciar sesión
  };

  const logout = () => {
    setUser(null);
    // Lógica para cerrar sesión
  };

  return (
    <AuthContext.Provider value={{ user, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
