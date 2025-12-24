import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Bonjour CVDA Automobile,\n\nNom: ${formData.nom}\nEmail: ${formData.email}\n\nMessage: ${formData.message}`;
    const whatsappUrl = `https://wa.me/221783326970?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Contactez-nous</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Nous sommes là pour répondre à toutes vos questions et vous accompagner
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Informations de contact</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-red-800 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Téléphone & WhatsApp</h4>
                  <a href="tel:+221783326970" className="text-red-800 hover:text-red-900 font-medium">
                    +221 78 332 69 70
                  </a>
                  <p className="text-gray-600 text-sm mt-1">Appel direct ou WhatsApp</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-red-800 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Adresse</h4>
                  <p className="text-gray-600">Rond-point Gouygui, Keur Massar</p>
                  <p className="text-gray-600">Dakar, Sénégal</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-red-800 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Horaires d'ouverture</h4>
                  <p className="text-gray-600">Lundi - Vendredi : 8h00 - 18h00</p>
                  <p className="text-gray-600">Samedi : 8h00 - 16h00</p>
                  <p className="text-gray-600">Dimanche : Fermé</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="font-semibold text-gray-800 mb-4">Localisation</h4>
              <div className="w-full h-64 bg-gray-300 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3858.9234567890123!2d-17.123456789!3d14.789012345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sKeur%20Massar%2C%20Senegal!5e0!3m2!1sen!2s!4v1234567890123"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localisation CVDA Automobile"
                ></iframe>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Envoyez-nous un message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="nom" className="block text-sm font-medium text-gray-700 mb-2">
                  Nom complet *
                </label>
                <input
                  type="text"
                  id="nom"
                  name="nom"
                  value={formData.nom}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-800 focus:border-red-800 outline-none transition-colors"
                  placeholder="Votre nom complet"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-800 focus:border-red-800 outline-none transition-colors"
                  placeholder="votre@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-800 focus:border-red-800 outline-none transition-colors resize-vertical"
                  placeholder="Décrivez votre demande, le service souhaité ou posez votre question..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-red-800 text-white py-4 px-6 rounded-lg hover:bg-red-900 transition-colors flex items-center justify-center space-x-2 font-semibold text-lg"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Envoyer via WhatsApp</span>
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-gray-600 text-sm">
                Ou contactez-nous directement au{' '}
                <a href="tel:+221783326970" className="text-red-800 font-medium hover:text-red-900">
                  +221 78 332 69 70
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;