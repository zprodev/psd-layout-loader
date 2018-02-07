'use strict';

const loaderUtils = require('loader-utils');
const psd2json = require('psd2json');

module.exports = function() {
  const options = loaderUtils.getOptions(this) || {};
  const json = psd2json(this.resourcePath, options);
  return 'module.exports = ' + json;
};
