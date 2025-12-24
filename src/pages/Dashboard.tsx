import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
//@ts-ignore
import { getVehicules, addVehicule, updateVehicule, deleteVehicule } from "../VehiculesApi";

type VehiculeType = {
  id: number;
  nom: string;
  type: string;
  prix: string;
  annee: string;
  passagers: number;
  carburant: string;
  transmission: string;
  description: string;
  image: string;
};

const Dashboard = () => {
  const navigate = useNavigate();
  const [vehicules, setVehicules] = useState<VehiculeType[]>([]);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [currentVehicule, setCurrentVehicule] = useState<Partial<VehiculeType>>({});
  const [imageFile, setImageFile] = useState<File | null>(null);

  const fetchVehicules = async () => {
    try {
      setLoading(true);
      const res = await getVehicules();
      setVehicules(res.data);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVehicules();
  }, []);

  const handleDelete = async (id: number) => {
  if (!window.confirm('Confirmer la suppression ?')) return;
  try {
    await deleteVehicule(id); // appelle VehiculeApi.deleteVehicule
    setVehicules(prev => prev.filter(v => v.id !== id));
  } catch (err: any) {
    console.error('Erreur lors de la suppression:', err.response || err);
    alert('Erreur lors de la suppression');
  }
};

  const handleEdit = (vehicule: VehiculeType) => {
    setCurrentVehicule(vehicule);
    setImageFile(null);
    setIsEditing(true);
  };

  const handleAdd = () => {
    setCurrentVehicule({});
    setImageFile(null);
    setIsEditing(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  try {
    const formData = new FormData();
    formData.append('nom', currentVehicule.nom || '');
    formData.append('type', currentVehicule.type || '');
    formData.append('prix', currentVehicule.prix || '');
    formData.append('annee', currentVehicule.annee || '');
    formData.append('passagers', String(currentVehicule.passagers || ''));
    formData.append('carburant', currentVehicule.carburant || '');
    formData.append('transmission', currentVehicule.transmission || '');
    formData.append('description', currentVehicule.description || '');
    if (imageFile) formData.append('image', imageFile);

    if (currentVehicule.id) {
      await updateVehicule(currentVehicule.id, formData);
    } else {
      await addVehicule(formData);
    }

    setIsEditing(false);
    fetchVehicules();
  } catch (err: any) {
    console.error('Erreur lors de la sauvegarde:', err.response || err);
    alert('Erreur lors de la sauvegarde');
  }
};
  const handleLogout = () => {
    localStorage.removeItem("authData");
    navigate("/login");
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Dashboard Véhicules</h1>
        <button onClick={handleLogout} className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
          Déconnecter
        </button>
      </div>

      <button onClick={handleAdd} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 mb-4">
        Ajouter un véhicule
      </button>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {vehicules.map((v) => (
          <div key={v.id} className="border rounded shadow p-4 flex flex-col">
            {v.image && <img src={v.image} alt={v.nom} className="h-40 w-full object-cover rounded mb-2" />}
            <h2 className="text-xl font-semibold">{v.nom}</h2>
            <p>{v.type} - {v.annee}</p>
            <p>{v.prix} FCFA</p>
            <p className="text-sm flex-1">{v.description}</p>
            <div className="mt-4 flex space-x-2">
              <button onClick={() => handleEdit(v)} className="flex-1 bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600">
                Modifier
              </button>
              <button onClick={() => handleDelete(v.id)} className="flex-1 bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700">
                Supprimer
              </button>
            </div>
          </div>
        ))}
      </div>

      {isEditing && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-2xl max-h-screen overflow-y-auto">
            <h3 className="text-xl font-bold mb-4">
              {currentVehicule.id ? 'Modifier le véhicule' : 'Ajouter un véhicule'}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="Nom du véhicule" 
                  value={currentVehicule.nom || ""} 
                  onChange={e => setCurrentVehicule({...currentVehicule, nom: e.target.value})} 
                  required 
                  className="w-full border rounded px-3 py-2" 
                />
                <select
                  value={currentVehicule.type || ""}
                  onChange={e => setCurrentVehicule({...currentVehicule, type: e.target.value})}
                  required
                  className="w-full border rounded px-3 py-2"
                >
                  <option value="">Type</option>
                  <option value="Vente">Vente</option>
                  <option value="Location">Location</option>
                </select>
                <input 
                  type="text" 
                  placeholder="Prix (FCFA)" 
                  value={currentVehicule.prix || ""} 
                  onChange={e => setCurrentVehicule({...currentVehicule, prix: e.target.value})} 
                  required 
                  className="w-full border rounded px-3 py-2" 
                />
                <input 
                  type="number" 
                  placeholder="Année" 
                  value={currentVehicule.annee || ""} 
                  onChange={e => setCurrentVehicule({...currentVehicule, annee: e.target.value})} 
                  required 
                  className="w-full border rounded px-3 py-2" 
                />
                <input 
                  type="number" 
                  placeholder="Nombre de passagers" 
                  value={currentVehicule.passagers || ""} 
                  onChange={e => setCurrentVehicule({...currentVehicule, passagers: parseInt(e.target.value)})} 
                  required 
                  className="w-full border rounded px-3 py-2" 
                />
                <select
                  value={currentVehicule.carburant || ""}
                  onChange={e => setCurrentVehicule({...currentVehicule, carburant: e.target.value})}
                  required
                  className="w-full border rounded px-3 py-2"
                >
                  <option value="">Carburant</option>
                  <option value="Essence">Essence</option>
                  <option value="Diesel">Diesel</option>
                  <option value="Hybride">Hybride</option>
                  <option value="Électrique">Électrique</option>
                </select>
                <select
                  value={currentVehicule.transmission || ""}
                  onChange={e => setCurrentVehicule({...currentVehicule, transmission: e.target.value})}
                  required
                  className="w-full border rounded px-3 py-2"
                >
                  <option value="">Transmission</option>
                  <option value="Manuelle">Manuelle</option>
                  <option value="Automatique">Automatique</option>
                </select>
              </div>
              <textarea 
                placeholder="Description" 
                value={currentVehicule.description || ""} 
                onChange={e => setCurrentVehicule({...currentVehicule, description: e.target.value})} 
                required 
                rows={3}
                className="w-full border rounded px-3 py-2" 
              />
              <div>
                <label className="block text-sm font-medium mb-2">Image du véhicule</label>
                <input 
                  type="file" 
                  accept="image/*"
                  onChange={e => e.target.files && setImageFile(e.target.files[0])} 
                  className="w-full" 
                />
                {currentVehicule.image && !imageFile && (
                  <div className="mt-2">
                    <img src={currentVehicule.image} alt="Image actuelle" className="h-20 object-cover rounded" />
                    <p className="text-xs text-gray-500">Image actuelle</p>
                  </div>
                )}
              </div>
              <div className="flex space-x-2">
                <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
                  {currentVehicule.id ? 'Mettre à jour' : 'Ajouter'}
                </button>
                <button type="button" onClick={() => setIsEditing(false)} className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500">
                  Annuler
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
