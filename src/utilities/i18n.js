import * as RNLocalize from 'react-native-localize';
import i18nJS from 'i18n-js';
import memoize from 'lodash/memoize';
// Supported languages for moment
import 'moment/locale/en';

import {en, tr} from './translations';

const translate = memoize(
  (key, config) => i18nJS.t(key, config),
  (key, config) => (config ? key + JSON.stringify(config) : key),
);

// fallback if no available language fits
const fallback = {languageTag: 'en', isRTL: false};

const {languageTag} =
  RNLocalize.findBestAvailableLanguage(['en', 'tr', 'ca']) || fallback;

// clear translation cache
translate.cache.clear();

// set i18n-js config
i18nJS.fallbacks = true;
i18nJS.translations = {
  ca: tr,
  en,
  tr,
};
i18nJS.locale = languageTag;

export const clearTranslateCache = () => translate.cache.clear();

export const getDeviceCurrentLanguage = () => {
  const locales = RNLocalize.getLocales();
  if (locales[0]) {
    return locales[0].languageCode;
  }
  return 'en';
};

const i18n = {
  t: translate,
};

export default i18n;
