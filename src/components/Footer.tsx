
import { Facebook, Instagram, Phone, MapPin, Clock, Mail } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-red-800 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">C</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">CVDA Automobile</h3>
                <p className="text-gray-300 text-sm">La fiabilité, notre moteur</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Votre partenaire de confiance pour tous vos besoins automobiles à Keur Massar et dans la région de Dakar.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com/cvda.automobile"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/cvda.automobile"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://tiktok.com/@cvda.automobile"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-black rounded-full flex items-center justify-center hover:bg-gray-900 transition-colors"
              >
                <span className="text-white font-bold text-sm">T</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Navigation</h4>
            <nav className="space-y-3">
              <button onClick={() => scrollToSection('accueil')} className="block text-gray-300 hover:text-white transition-colors">
                Accueil
              </button>
              <button onClick={() => scrollToSection('services')} className="block text-gray-300 hover:text-white transition-colors">
                Nos Services
              </button>
              <button onClick={() => scrollToSection('vehicules')} className="block text-gray-300 hover:text-white transition-colors">
                Véhicules
              </button>
              <button onClick={() => scrollToSection('avis')} className="block text-gray-300 hover:text-white transition-colors">
                Avis Clients
              </button>
              <button onClick={() => scrollToSection('contact')} className="block text-gray-300 hover:text-white transition-colors">
                Contact
              </button>
              <button onClick={() => scrollToSection('apropos')} className="block text-gray-300 hover:text-white transition-colors">
                À propos
              </button>
            </nav>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Nos Services</h4>
            <ul className="space-y-3 text-gray-300">
              <li>Vente de véhicules</li>
              <li>Location de véhicules</li>
              <li>Réparation mécanique</li>
              <li>Diagnostic électronique</li>
              <li>Maintenance préventive</li>
              <li>Carrosserie & peinture</li>
              <li>Services pneus</li>
              <li>Climatisation auto</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-red-400 mt-1" />
                <div>
                  <a href="tel:+221783326970" className="text-gray-300 hover:text-white">
                    +221 78 332 69 70
                  </a>
                  <p className="text-sm text-gray-400">WhatsApp disponible</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-red-400 mt-1" />
                <div>
                  <p className="text-gray-300">Rond-point Gouygui</p>
                  <p className="text-gray-300">Keur Massar, Dakar</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-red-400 mt-1" />
                <div>
                  <p className="text-gray-300">Lun-Ven: 8h00-18h00</p>
                  <p className="text-gray-300">Sam: 8h00-16h00</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-center md:text-left mb-4 md:mb-0">
              © 2024 CVDA Automobile. Tous droits réservés.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">
                Mentions légales
              </a>
              <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">
                Politique de confidentialité
              </a>
              <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">
                CGV
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;