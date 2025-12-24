import React, { useState } from 'react';
import { Menu, X, Phone, MapPin } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-white shadow-lg z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-red-800 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">C</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">CVDA Automobile</h1>
              <p className="text-sm text-gray-600">La fiabilité, notre moteur</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('accueil')} className="text-gray-700 hover:text-red-800 font-medium transition-colors">
              Accueil
            </button>
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-red-800 font-medium transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection('vehicules')} className="text-gray-700 hover:text-red-800 font-medium transition-colors">
              Véhicules
            </button>
            <button onClick={() => scrollToSection('avis')} className="text-gray-700 hover:text-red-800 font-medium transition-colors">
              Avis
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-red-800 font-medium transition-colors">
              Contact
            </button>
            <button onClick={() => scrollToSection('apropos')} className="text-gray-700 hover:text-red-800 font-medium transition-colors">
              À propos
            </button>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center text-sm text-gray-600">
              <MapPin className="w-4 h-4 mr-1" />
              Keur Massar
            </div>
            <a href="#contact"
              className="bg-red-800 text-white px-4 py-2 rounded-lg hover:bg-red-900 transition-colors flex items-center space-x-2"
            >
              <Phone className="w-4 h-4" />
              <span>Contacter</span>
            </a>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden border-t bg-white">
            <nav className="flex flex-col space-y-4 py-4">
              <button onClick={() => scrollToSection('accueil')} className="text-left text-gray-700 hover:text-red-800 font-medium">
                Accueil
              </button>
              <button onClick={() => scrollToSection('services')} className="text-left text-gray-700 hover:text-red-800 font-medium">
                Services
              </button>
              <button onClick={() => scrollToSection('vehicules')} className="text-left text-gray-700 hover:text-red-800 font-medium">
                Véhicules
              </button>
              <button onClick={() => scrollToSection('avis')} className="text-left text-gray-700 hover:text-red-800 font-medium">
                Avis
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-left text-gray-700 hover:text-red-800 font-medium">
                Contact
              </button>
              <button onClick={() => scrollToSection('apropos')} className="text-left text-gray-700 hover:text-red-800 font-medium">
                À propos
              </button>
              <a
                href="tel:+221783326970"
                className="bg-red-800 text-white px-4 py-2 rounded-lg hover:bg-red-900 transition-colors flex items-center space-x-2 w-fit"
              >
                <Phone className="w-4 h-4" />
                <span>Appeler maintenant</span>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;