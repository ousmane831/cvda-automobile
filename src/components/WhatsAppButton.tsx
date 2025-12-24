import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const openWhatsApp = () => {
    const message = "Bonjour CVDA Automobile, je souhaiterais obtenir des informations sur vos services.";
    const whatsappUrl = `https://wa.me/221783326970?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={openWhatsApp}
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 z-50 animate-pulse"
      aria-label="Contacter via WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
    </button>
  );
};

export default WhatsAppButton;