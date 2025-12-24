import { Calendar, Users, Fuel, Settings } from 'lucide-react';
import { useEffect, useState } from 'react';
import apiClient from '../api';

type VehiculesType = {
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

const getVehicules = async () => {
  return await apiClient.get<VehiculesType[]>('vehicules/');
};

const Vehicules = () => {
  const [vehicules, setVehicules] = useState<VehiculesType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchVehicules = async () => {
      try {
        const response = await getVehicules();

        const vehiculesData = Array.isArray(response.data) ? response.data : [];
        setVehicules(vehiculesData);
      } catch (err) {
        console.error(err);
        setError("Impossible de charger les Véhicules.");
      } finally {
        setLoading(false);
      }
    };

    fetchVehicules();
  }, []);

  if (loading) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <p>Chargement des véhicules...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <p className="text-red-600">{error}</p>
        </div>
      </section>
    );
  }

  return (
    <section id="vehicules" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Nos Véhicules</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez notre sélection de véhicules disponibles à la vente et à la location
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vehicules.map((vehicule) => (
            <div
              key={vehicule.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative">
                <img
                  src={
                    vehicule.image.startsWith('http')
                      ? vehicule.image
                      : `http://127.0.0.1:8000${vehicule.image}`
                  }
                  alt={vehicule.nom}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      vehicule.type === 'Vente' ? 'bg-green-500 text-white' : 'bg-blue-500 text-white'
                    }`}
                  >
                    {vehicule.type}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{vehicule.nom}</h3>
                <p className="text-2xl font-bold text-red-800 mb-4">{vehicule.prix}</p>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="text-sm">{vehicule.annee}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="w-4 h-4 mr-2" />
                    <span className="text-sm">{vehicule.passagers} places</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Fuel className="w-4 h-4 mr-2" />
                    <span className="text-sm">{vehicule.carburant}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Settings className="w-4 h-4 mr-2" />
                    <span className="text-sm">{vehicule.transmission}</span>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-6">{vehicule.description}</p>

                <div className="flex space-x-3">
                  <a href="#contact"
                    className="flex-1 bg-red-800 text-white py-2 px-4 rounded-lg hover:bg-red-900 transition-colors text-center font-semibold"
                  >
                    Contacter
                  </a>
                  <a
                    href={`https://wa.me/221783326970?text=Bonjour, je suis intéressé(e) par le véhicule ${encodeURIComponent(
                      vehicule.nom
                    )}`}
                    className="flex-1 border-2 border-green-500 text-green-500 py-2 px-4 rounded-lg hover:bg-green-500 hover:text-white transition-colors text-center font-semibold"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Vehicules;
