const Handlebars = require('handlebars');

Handlebars.registerHelper('join', (list, separator, options) => {
  return list.join(separator);
})

// Date
Handlebars.registerHelper('get-date', (options) => {
  return new Date();
});

Handlebars.registerHelper('get-year', (options) => {
  return new Date().getFullYear();
})
