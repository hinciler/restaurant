const {settings, options} = require('./data.json');
export default (lang = 'en') => {
  const getSettings = () => {
    settings.map((item) => {
      item.text = item[lang];
    });
    return [...settings];
  };
};
