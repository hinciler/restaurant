export {default as en} from './en.json';
export {default as tr} from './tr.json';
const tr = require('./tr.json');
const en = require('./en.json');
export const languages = [
  {
    value: 'en',
    file: en,
    title: 'English',
  },
  {
    value: 'tr',
    file: tr,
    title: 'Turkce',
  },
];
