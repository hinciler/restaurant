import type from './types';
export const translate = (lang) => ({
  type: type.TRANSLATE,
  lang,
});
