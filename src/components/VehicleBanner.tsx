
import { ChevronLeft, ChevronRight, Car, Key, Star } from 'lucide-react';
import { useEffect, useState } from 'react';
import reparationImage from "../assets/banner4.jpg";
import reparationImage1 from "../assets/banner1.jpg";
import reparationImage2 from "../assets/nissan.avif";

const VehicleBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const vehicles = [
    {
      id: 1,
      name: "Toyota Corolla 2023",
      price: "15 000 000 FCFA",
      type: "Vente",
      image: "https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg",
      features: ["Automatique", "Climatisation", "GPS"]
    },
    {
      id: 2,
      name: "Nissan Sentra 2024",
      price: "25 000 FCFA/jour",
      type: "Location",
      image : reparationImage2,
      features: ["Économique", "Fiable", "Garantie"]
    },
    {
      id: 3,
      name: "Réparation Mécanique",
      price: "dépend du service",
      type: "diagnostic",
      image: reparationImage1,
      features: ["Location flexible", "Assurance incluse", "Kilométrage libre"]
    },
    {
      id: 4,
      name: "service de réparation",
      price: "depend du service",
      type: "Réparation",
      image: reparationImage,
      features: ["Compacte", "Économique", "Idéale pour la ville"]
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % vehicles.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % vehicles.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + vehicles.length) % vehicles.length);
  };

  const scrollToVehicles = () => {
    document.getElementById('vehicules')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-16 overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contenu textuel */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2 mb-4">
              <Star className="w-6 h-6 text-yellow-400 fill-current" />
              <span className="text-yellow-400 font-semibold">Véhicules de qualité</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Trouvez votre
              <span className="text-red-400 block">véhicule idéal</span>
            </h2>
            
            <p className="text-xl text-gray-300 leading-relaxed">
              Large sélection de véhicules neufs et d'occasion, rigoureusement contrôlés. 
              Vente et location à prix compétitifs avec garantie de qualité.
            </p>

            <div className="grid grid-cols-2 gap-6 py-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-red-800 rounded-full flex items-center justify-center">
                  <Car className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">500+</div>
                  <div className="text-gray-300 text-sm">Véhicules vendus</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-red-800 rounded-full flex items-center justify-center">
                  <Key className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">100+</div>
                  <div className="text-gray-300 text-sm">Locations actives</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToVehicles}
                className="bg-red-800 text-white px-8 py-4 rounded-lg hover:bg-red-900 transition-all duration-300 font-semibold text-lg hover:scale-105"
              >
                Voir tous nos véhicules
              </button>
              <a
                href="tel:+221783326970"
                className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold text-lg text-center"
              >
                Nous contacter
              </a>
            </div>
          </div>

          {/* Carrousel de véhicules */}
          <div className="relative">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              {vehicles.map((vehicle, index) => (
                <div
                  key={vehicle.id}
                  className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                    index === currentSlide 
                      ? 'opacity-100 transform translate-x-0' 
                      : index < currentSlide 
                        ? 'opacity-0 transform -translate-x-full' 
                        : 'opacity-0 transform translate-x-full'
                  }`}
                >
                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                  
                  {/* Informations du véhicule */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex justify-between items-end">
                      <div>
                        <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold mb-2 ${
                          vehicle.type === 'Vente' ? 'bg-green-500 text-white' : 'bg-blue-500 text-white'
                        }`}>
                          {vehicle.type}
                        </span>
                        <h3 className="text-2xl font-bold text-white mb-1">{vehicle.name}</h3>
                        <p className="text-xl font-semibold text-red-400">{vehicle.price}</p>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mt-3">
                      {vehicle.features.map((feature, idx) => (
                        <span key={idx} className="bg-white bg-opacity-20 text-white px-3 py-1 rounded-full text-sm">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Contrôles du carrousel */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            {/* Indicateurs */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {vehicles.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-red-400' : 'bg-white bg-opacity-50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Éléments décoratifs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-800 rounded-full opacity-10 transform translate-x-48 -translate-y-48"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-600 rounded-full opacity-10 transform -translate-x-32 translate-y-32"></div>
    </section>
  );
};

export default VehicleBanner;