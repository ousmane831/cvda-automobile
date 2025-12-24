import React from 'react';
import { Award, Target, Users, CheckCircle } from 'lucide-react';

const Apropos = () => {
  const valeurs = [
    {
      icon: Award,
      titre: "Excellence",
      description: "Nous visons l'excellence dans chaque service que nous proposons"
    },
    {
      icon: Target,
      titre: "Fiabilité",
      description: "La fiabilité est au cœur de tout ce que nous faisons"
    },
    {
      icon: Users,
      titre: "Service client",
      description: "Satisfaction client garantie avec un service personnalisé"
    },
    {
      icon: CheckCircle,
      titre: "Qualité",
      description: "Travail de qualité avec des pièces et équipements certifiés"
    }
  ];

  

  return (
    <section id="apropos" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">À propos de CVDA Automobile</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Depuis notre création, CVDA Automobile s'engage à fournir des services automobiles de qualité supérieure 
            à Keur Massar et dans toute la région de Dakar.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-3xl font-bold text-gray-800 mb-6">Notre Mission</h3>
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed">
                <strong className="text-red-800">CVDA Automobile</strong> a pour mission d'offrir des services 
                automobiles complets et de qualité, à des prix accessibles. Nous nous engageons à maintenir 
                votre véhicule en parfait état de fonctionnement tout en vous proposant les meilleures 
                solutions pour vos besoins de mobilité.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Que ce soit pour l'achat d'un véhicule neuf ou d'occasion, la location, l'entretien ou 
                les réparations, notre équipe d'experts met son savoir-faire et son expérience à votre service.
              </p>
              <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-800">
                <p className="text-red-800 font-semibold text-lg">
                  "La fiabilité, notre moteur"
                </p>
                <p className="text-gray-700 mt-2">
                  Cette devise guide chacune de nos actions et reflète notre engagement envers l'excellence.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-gray-800 mb-6">Nos Valeurs</h3>
            <div className="grid grid-cols-2 gap-6">
              {valeurs.map((valeur, index) => {
                const Icon = valeur.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-red-800 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-bold text-gray-800 mb-2">{valeur.titre}</h4>
                    <p className="text-gray-600 text-sm">{valeur.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-xl p-8">
          <h3 className="text-3xl font-bold text-gray-800 text-center mb-8">Pourquoi nous choisir ?</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-red-800 mb-2">500+</div>
              <p className="text-gray-600">Véhicules vendus</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-800 mb-2">1000+</div>
              <p className="text-gray-600">Réparations effectuées</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-800 mb-2">98%</div>
              <p className="text-gray-600">Clients satisfaits</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-800 mb-2">5+</div>
              <p className="text-gray-600">Années d'expérience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Apropos;