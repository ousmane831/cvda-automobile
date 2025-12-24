// src/VehiculeApi.ts
//@ts-ignore
// src/VehiculeApi.ts
import apiClient from './api';

export const getVehicules = () => apiClient.get('vehicules/');
export const addVehicule = (vehiculeData: FormData) => apiClient.post('vehicules/', vehiculeData);
export const updateVehicule = (id: number, vehiculeData: FormData) =>
  apiClient.patch(`vehicules/${id}/`, vehiculeData);
export const deleteVehicule = (id: number) => {
  return apiClient.delete(`vehicules/${id}/`); // utilise bien apiClient
};