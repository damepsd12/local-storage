// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next) // passe i18n à l'instance de react-i18next
  .init({
    resources: {
      en: {
        translation: {
          greeting: 'Hello',
          searchPlaceholder: "Search anything here.",
          // Ajoutez plus de clés ici...
        }
      },
      fr: {
        translation: {
          greeting: 'Bonjour',
          searchPlaceholder: "Rechercher n'importe quoi ici.",
          // Ajoutez plus de clés ici...
        }
      },
      // Ajoutez davantage de langues si nécessaire
    },
    lng: 'fr', // langue par défaut
    fallbackLng: 'en', // langue de repli
    interpolation: {
      escapeValue: false // React gère l'échappement
    }
  });

export default i18n;