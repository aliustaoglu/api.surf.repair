'use strict';

exports.handler = function(event, context, callback) {
  const jsonSurfPoints = {
    payload: [
        {
            center: [-25.363, 131.044],
            name: 'Ding Fixers',
            id: "1",
            alias: "ding_fixers",
            info: {
                tel: '022222',
                email: 'aa'
            }
        }
        ]
  };

    const response = {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Origin" : "*", // Required for CORS support to work
            "Access-Control-Allow-Credentials" : true // Required for cookies, authorization headers with HTTPS 
        },
        body: JSON.stringify(jsonSurfPoints)
      };
      context.succeed(response);
};
