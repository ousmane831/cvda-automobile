// src/pages/AuthContext.tsx
import React, { createContext, useState, ReactNode, useEffect } from "react";

interface User {
  id: number;
  username: string;
  role: string;
}

interface AuthData {
  accessToken: string;
  refreshToken: string;
  user: User;
}

interface AuthContextType {
  authData: AuthData | null;
  setAuthData: (data: AuthData | null) => void;
}

// Création du contexte
export const AuthContext = createContext<AuthContextType>({
  authData: null,
  setAuthData: () => {},
});

// Provider
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [authData, setAuthData] = useState<AuthData | null>(null);

  // Charger le token depuis localStorage au démarrage
  useEffect(() => {
    const stored = localStorage.getItem("authData");
    if (stored) {
      setAuthData(JSON.parse(stored));
    }
  }, []);

  // Sauvegarder automatiquement dans localStorage quand authData change
  useEffect(() => {
    if (authData) {
      localStorage.setItem("authData", JSON.stringify(authData));
    } else {
      localStorage.removeItem("authData");
    }
  }, [authData]);

  return (
    <AuthContext.Provider value={{ authData, setAuthData }}>
      {children}
    </AuthContext.Provider>
  );
};
