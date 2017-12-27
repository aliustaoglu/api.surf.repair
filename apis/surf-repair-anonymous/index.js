'use strict';

exports.handler = function(event, context, callback) {
  const endpoint = require('./endpoints/' + event.queryStringParameters.target.toLowerCase() + '/index');
  endpoint.handler(event, context, callback);
};
