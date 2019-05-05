'use strict'

import I18n from 'react-native-i18n';

import vi from './locales/vi';
import en from './locales/en';
I18n.fallbacks = true;

I18n.translations = {
  vi: vi,
  en: en,
};

export default I18n;
