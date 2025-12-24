import { useEffect, useState } from "react";
import { ArrowRight, CheckCircle, Phone } from "lucide-react";
import { Button } from "./ui/button";

// Liste d'images (ajoute les tiennes dans /src/assets)
import img1 from "../assets/nissan.avif";
import img2 from "../assets/banner2.jpg";
import img3 from "../assets/banner3.jpg";

import img5 from "../assets/banner5.webp";

const images = [img1, img2, img3, img5];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Changement automatique toutes les 5 secondes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Images de fond défilantes */}
      <div className="absolute inset-0 transition-opacity duration-1000">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Background ${index + 1}`}
            className={`w-full h-full object-cover absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
      </div>

      {/* Contenu */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
            CVDA Automobile
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-4 font-medium drop-shadow-md">
            Conseil • Vente • Diagnostic • Automobile
          </p>
          <p className="text-lg md:text-xl text-white/80 mb-8 italic drop-shadow-sm">
            « La fiabilité, notre moteur »
          </p>

          {/* Features */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {[
              "Véhicules neufs & d'occasion",
              "Location flexible",
              "Réparation experte",
              "Diagnostic électronique",
            ].map((feature) => (
              <div
                key={feature}
                className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white"
              >
                <CheckCircle className="h-5 w-5 text-red-800" />
                <span className="font-medium">{feature}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              variant="default"
              size="lg"
              className="bg-red-800 text-white px-8 py-4 h-auto rounded-lg hover:bg-red-900 transition-all duration-300 font-semibold text-lg hover:scale-105"
              asChild
            >
              <a href="#services">
                Voir nos services
                <ArrowRight className="h-5 w-5 ml-2" />
              </a>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-4 h-auto text-white border-white hover:bg-white hover:text-black transition-colors"
              asChild
            >
              <a href="tel:+221783326970">
                <Phone className="h-5 w-5 mr-2" />
                +221 78 332 69 70
              </a>
            </Button>

            <Button
              variant="secondary"
              size="lg"
              className="text-lg px-8 py-4 h-auto"
              asChild
            >
              <a href="#contact">Prendre rendez-vous</a>
            </Button>
          </div>

          {/* Localisation */}
          <div className="mt-10 text-white/80">
            <p className="text-lg">📍 Rond-point Gouygui, Keur Massar, Sénégal</p>
          </div>
        </div>
      </div>

      {/* Indicateur de scroll */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
