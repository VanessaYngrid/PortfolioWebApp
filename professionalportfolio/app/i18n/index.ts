/*
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import React, { createContext } from 'react';
import { i18n as I18nType } from 'i18next';

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: require('./locales/en-US/common.json')
            },
            fr: {
                translation: require('./locales/fr-CA/common.json')
            },
        },
        lng: 'en', // default language
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false // React already escapes from XSS
        }
    });
export const I18nContext = createContext<I18nType | null>(null);
export default i18n;
*/