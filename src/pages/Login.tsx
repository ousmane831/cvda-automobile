// src/pages/Login.tsx
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/card"; 
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Button } from "../components/ui/button";
import { AuthContext } from "./AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { setAuthData } = useContext(AuthContext);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(
        "http://127.0.0.1:8000/api/accounts/auth/login/",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        }
      );

      if (!response.ok) throw new Error("Email ou mot de passe incorrect");

      const data = await response.json();

      // Vérifier le rôle admin
      if (data.user.role !== "admin") {
        toast.error("Vous n'êtes pas autorisé à accéder au dashboard");
        setLoading(false);
        return;
      }

      // Mettre à jour le contexte Auth avec accessToken
      setAuthData({
        accessToken: data.access,   // <-- accessToken côté frontend
        refreshToken: data.refresh,
        user: data.user,
      });

      toast.success(`Bienvenue ${data.user.username}`);
      navigate("/dashboard");
    } catch (error: any) {
      toast.error(error.message || "Une erreur est survenue");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-subtle px-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-navy">Dashboard CVDA</CardTitle>
          <p className="text-muted-foreground">Connectez-vous pour gérer vos véhicules</p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="exemple@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Mot de passe</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full bg-gradient-primary" disabled={loading}>
              {loading ? "Connexion..." : "Se connecter"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
