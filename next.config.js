const withPreact = require('next-plugin-preact');

const { i18n } = require('./next-i18next.config');

module.exports = withPreact({
  /* regular next.js config options here */
  i18n,
});
