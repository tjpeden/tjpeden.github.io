const Handlebars = require('handlebars');
const moment = require('moment');

Handlebars.registerHelper('join', (list, separator, options) => {
  return list.join(separator);
})

// Date
Handlebars.registerHelper('today', (options) => {
  return new Date();
});

Handlebars.registerHelper('if-next-year', (date, next, options) => {
  if(!moment(date).isSame(next)) {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
})

Handlebars.registerHelper('format', (date, format, options) => {
  return moment(date).format(format);
})
