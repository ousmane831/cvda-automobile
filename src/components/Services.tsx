import { Car, Key, Droplets, Wrench, Settings, Zap, Circle, Palette, Snowflake, Phone, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Car,
      title: "Vente de véhicules",
      description: "Véhicules neufs et d'occasion soigneusement sélectionnés pour vous.",
      image: "/src/assets/banner3.jpg",
      features: ["Véhicules garantis", "Prix compétitifs", "Financement disponible"]
    },
    {
      icon: Key,
      title: "Location de véhicules",
      description: "Location flexible (courte et longue durée) à prix compétitif.",
      image: "/src/assets/banner2.jpg",
      features: ["Assurance incluse", "Kilométrage illimité", "Livraison possible"]
    },
    {
      icon: Droplets,
      title: "Lavage complet",
      description: "Nettoyage intérieur et extérieur pour redonner éclat à votre voiture.",
      image: "/src/assets/banner1.jpg",
      features: ["Shampooing haute qualité", "Cirage des sièges", "Traitement pneus"]
    },
    {
      icon: Wrench,
      title: "Réparation mécanique",
      description: "Intervention rapide pour pannes mécaniques courantes.",
      image: "/src/assets/banner4.jpg",
      features: ["Diagnostic rapide", "Pièces d'origine", "Garantie 6 mois"]
    },
    {
      icon: Settings,
      title: "Maintenance préventive",
      description: "Entretien régulier pour prolonger la vie du véhicule.",
      image: "/src/assets/banner5.webp",
      features: ["Vidange moteur", "Contrôle complet", "Rapport détaillé"]
    },
    {
      icon: Zap,
      title: "Diagnostic électronique",
      description: "Analyse avancée des systèmes électroniques embarqués.",
      image: "/src/assets/nissan.avif",
      features: ["Outils modernes", "Diagnostic précis", "Solution immédiate"]
    }
  ];

  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Nos Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            CVDA Automobile vous propose une gamme complète de services automobiles pour répondre à tous vos besoins
          </p>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="flex-shrink-0 w-64 group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-red-800"
              >
                {/* Image du service - plus petite */}
                <div className="relative h-32 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  
                  {/* Icône superposée - plus petite */}
                  <div className="absolute top-2 right-2 w-8 h-8 bg-red-800 rounded-lg flex items-center justify-center shadow-lg group-hover:bg-red-900 transition-colors">
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                </div>

                {/* Contenu - plus compact */}
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-red-800 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3 leading-relaxed line-clamp-2">
                    {service.description}
                  </p>
                  
                  {/* Features - plus compactes */}
                  <div className="space-y-1 mb-3">
                    {service.features.slice(0, 2).map((feature, idx) => (
                      <div key={idx} className="flex items-center text-xs text-gray-700">
                        <div className="w-1 h-1 bg-red-800 rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* Bouton d'action - plus petit */}
                  <a
                    href="#contact"
                    className="inline-flex items-center text-red-800 text-sm font-semibold hover:text-red-900 transition-colors group"
                  >
                    <span>Demandez</span>
                    <ArrowRight className="w-3 h-3 ml-1 transform group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;