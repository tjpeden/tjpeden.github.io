const moment = require('moment');

module.exports = (date, format, options) => {
  return moment(date).format(format);
};
