import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import axios from 'axios';

// Définition du type d'un avis
type AvisType = {
  id: number;
  nom: string;
  note: number;
  service: string;
  date: string;
  commentaire: string;
};

// Fonction pour récupérer les avis
const getAvis = async () => {
  return await axios.get('http://127.0.0.1:8000/api/avis/'); 
};

const Avis = () => {
  const [avis, setAvis] = useState<AvisType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchAvis = async () => {
      try {
        const response = await getAvis();

        // Vérifie que la réponse contient bien un tableau
        const avisData = Array.isArray(response.data) ? response.data : [];

        setAvis(avisData);
      } catch (err) {
        console.error(err);
        setError("Impossible de charger les avis.");
      } finally {
        setLoading(false);
      }
    };

    fetchAvis();
  }, []);

  const renderStars = (note: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${i < note ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  const pageCount = Math.ceil(avis.length / 3);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % pageCount);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + pageCount) % pageCount);
  };

  const currentAvis = Array.isArray(avis)
    ? avis.slice(currentIndex * 3, currentIndex * 3 + 3)
    : [];

  // Gestion du chargement
  if (loading) {
    return <div className="text-center py-10">Chargement des avis...</div>;
  }

  // Gestion des erreurs
  if (error) {
    return <div className="text-center py-10 text-red-600">{error}</div>;
  }

  return (
    <section id="avis" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Avis de nos clients</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez ce que nos clients pensent de nos services
          </p>
          <div className="flex items-center justify-center mt-4">
            <div className="flex items-center">
              {renderStars(5)}
              <span className="ml-2 text-lg font-semibold text-gray-800">4.9/5</span>
              <span className="ml-2 text-gray-600">({avis.length} avis)</span>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="grid md:grid-cols-3 gap-8">
            {Array.isArray(currentAvis) &&
              currentAvis.map((avisItem) => (
                <div
                  key={avisItem.id}
                  className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-red-800 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-semibold text-lg">
                        {avisItem.nom?.charAt(0) ?? 'A'}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">{avisItem.nom}</h4>
                      <p className="text-sm text-gray-600">{avisItem.service}</p>
                    </div>
                  </div>

                  <div className="flex items-center mb-3">
                    {renderStars(avisItem.note)}
                    <span className="ml-2 text-sm text-gray-600">{avisItem.date}</span>
                  </div>

                  <p className="text-gray-700 leading-relaxed">{avisItem.commentaire}</p>
                </div>
              ))}
          </div>

          <div className="flex justify-center items-center mt-8 space-x-4">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <div className="flex space-x-2">
              {Array.from({ length: pageCount }, (_, i) => (
                <div
                  key={i}
                  className={`w-3 h-3 rounded-full ${
                    i === currentIndex ? 'bg-red-800' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={nextSlide}
              className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Avis;
