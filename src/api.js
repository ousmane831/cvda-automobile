// src/apiClient.ts
import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://127.0.0.1:8000/api/",
});

// Intercepteur pour ajouter automatiquement le token
apiClient.interceptors.request.use(
  (config) => {
    const stored = localStorage.getItem("authData");
    console.log("DEBUG - AuthData from localStorage:", stored);
    if (stored) {
      const authData = JSON.parse(stored);
      console.log("DEBUG - Parsed authData:", authData);
      if (authData.accessToken) {
        config.headers = {
          ...config.headers,
          Authorization: `Bearer ${authData.accessToken}`,
        };
        console.log("DEBUG - Token added to headers:", config.headers.Authorization);
      } else {
        console.log("DEBUG - No accessToken found in authData");
      }
    } else {
      console.log("DEBUG - No authData found in localStorage");
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default apiClient;
