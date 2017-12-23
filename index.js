let lambdaResponse;
const context = {
  succeed: (response) => {
    lambdaResponse = response;
  }
};

const mapData = require('./api/mapData');
const AWS = require('aws-sdk');
AWS.config.update({region: 'us-east-1'});

const m = mapData.handler(null, context, null);

const s3 = new AWS.S3({apiVersion: '2006-03-01'});
const ddb = new AWS.DynamoDB({apiVersion: '2012-10-08'});

ddb.listTables({Limit: 10}, function(err, data) {
  if (err) {
    console.log("Error", err.code);
  } else {
    console.log("Table names are ", data.TableNames[0]);
  }
});