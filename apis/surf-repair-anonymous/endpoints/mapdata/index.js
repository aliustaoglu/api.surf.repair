/**
 * GET Landing page map data
 */

'use strict';

module.exports = {
  handler: (event, context, callback) => {
    const fixerData = require('./data');
    const response = {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true
      },
      body: JSON.stringify(fixerData.fixers)
    };
    context.succeed(response);
  }
};
