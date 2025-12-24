import React, { useState } from 'react';
import { X, Phone, Star } from 'lucide-react';

const Banner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-red-800 to-red-900 text-white py-3 px-4 relative">
      <div className="container mx-auto flex items-center justify-center text-center">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
          </div>
          <span className="text-sm md:text-base font-medium">
            🎉 <strong>Offre spéciale :</strong> Diagnostic gratuit pour tout entretien complet !
          </span>
          <a
            href="tel:+221783326970"
            className="bg-white text-red-800 px-4 py-1 rounded-full text-sm font-semibold hover:bg-gray-100 transition-colors flex items-center space-x-1"
          >
            <Phone className="w-3 h-3" />
            <span>Appelez maintenant</span>
          </a>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-200 transition-colors"
          aria-label="Fermer la bannière"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default Banner;