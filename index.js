let lambdaResponse;
const context = {
  succeed: (response) => {
    lambdaResponse = response;
  }
};

const dp = require('./deploy');

const mapData = require('./api/mapData');
const AWS = require('aws-sdk');
var JSZip = require("jszip");
var zip = new JSZip();
var fs = require('fs');

var contents = fs.readFileSync(__dirname + '/api/mapData.js', 'utf8');


AWS.config.update({region: 'us-east-1'});

const m = mapData.handler(null, context, null);

const s3 = new AWS.S3({apiVersion: '2006-03-01'});
const ddb = new AWS.DynamoDB({apiVersion: '2012-10-08'});
const ld = new AWS.Lambda();

zip.file("index.js", contents);
var promise = zip.generateAsync({type : "uint8array"});
promise.then(
  (buff)=> {
    ld.updateFunctionCode(
      {
        FunctionName: 'arn:aws:lambda:us-east-1:504786997684:function:hellomyapi',
        ZipFile: buff
      }, (err, data) => {
        console.log(err);
      }
    );
  }
);






/*ddb.listTables({Limit: 10}, function(err, data) {
  if (err) {
    console.log("Error", err.code);
  } else {
    console.log("Table names are ", data.TableNames[0]);
  }
});*/