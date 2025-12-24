/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1e40af',         // bleu foncé (exemple)
          foreground: '#ffffff',      // texte clair sur fond primaire
        },
        secondary: {
          DEFAULT: '#64748b',         // gris bleu
          foreground: '#f1f5f9',      // clair pour texte secondaire
        },
        accent: {
          DEFAULT: '#f43f5e',         // rouge corail, couleur d'accent
          60: 'rgba(244, 63, 94, 0.6)',   // transparence à 60%
          90: 'rgba(244, 63, 94, 0.9)',   // transparence à 90%
        },
        background: '#0f172a',          // fond foncé pour overlay
      }
    }
  },
  plugins: [],
};
