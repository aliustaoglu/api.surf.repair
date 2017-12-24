const AWS = require('aws-sdk');
const JSZip = require('jszip');
const fs = require('fs');
const path = require('path');

const zip = new JSZip();

const walkSync = function(dir, filelist) {
  var fs = fs || require('fs'),
    files = fs.readdirSync(dir);
  filelist = filelist || [];
  files.forEach(function(file) {
    if (fs.statSync(dir + '/' + file).isDirectory()) {
      filelist = walkSync(dir + '/' + file, filelist);
    } else {
      filelist.push(path.join(dir, file).replace(__dirname, ''));
    }
  });
  return filelist;
};

const fileList = walkSync(__dirname + '/api');
console.log(fileList);
