'use strict';

exports.handler = function(event, context, callback) {
  const fixerData = require('./fixers');

  const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*', // Required for CORS support to work
      'Access-Control-Allow-Credentials': true // Required for cookies, authorization headers with HTTPS
    },
    body: JSON.stringify(fixerData.fixers)
  };
  context.succeed(response);
};