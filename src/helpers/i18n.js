import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'

i18n.use(initReactI18next)
	.use(Backend)
	.use(LanguageDetector)
	.init({
		fallbackLng: 'ka',
		debug: false,
		ns: 'translation',
		defaultNS: 'translation',
		load: 'languageOnly',
		detection: {
			order: ['querystring', 'cookie', 'localStorage', 'sessionStorage'],
			lookupQuerystring: 'lng',
		},
		backend: {
			loadPath: 'locales/{{lng}}/{{ns}}.json',
			allowMultiLoading: false,
			reloadInterval: false,
		},
		interpolation: {
			escapeValue: false
		}
	})

export default i18n
