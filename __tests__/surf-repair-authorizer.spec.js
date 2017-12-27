const expect = require('chai').expect;
const authorizer = require('../apis/surf-repair-authorizer/index');
const R = require('ramda');

const authorizerEvent = {
  authorizationToken:
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJTdXJmIFJlcGFpciBBUEkiLCJpYXQiOjE1MTQyMzIzOTAsImV4cCI6MTU0NTc2ODM5MCwiYXVkIjoic3VyZi5yZXBhaXIiLCJzdWIiOiJhZG1pbkBzdXJmIiwiUm9sZSI6ImZpeGVyIiwiaWQiOiIzNzkwYTk4NC0wZmZmLTQyZjctODI1OC00MDI3YjlhZjI3ODUiLCJhbGlhcyI6ImZpeGVyMSJ9.hXNEbu_qLZzVLbkX5M019OGHogXGqMYij4_wtFUZV-M'
};

const authorizerContext = {
  succeed: response => {
    //console.log('context.succeed: ' + response);
  },
  done: response => {
    //console.log('context.done: ' + response);
  },
  fail: error => {
    //console.log('context.fail: ' + error);
  }
};

describe('Surf Api Authorizer', function() {
  it('Correct JWT token passes verification', function(done) {
    const authorizerCallback = (error, result) => {
      expect(error).to.be.null;
      expect(result).to.not.be.undefined;
      done();
    };
    authorizer.handler(authorizerEvent, authorizerContext, authorizerCallback);
  });

  it('Incorrect JWT token fails verification', function(done) {
    const authorizerCallback = (error, result) => {
      expect(error).to.not.be.undefined;
      expect(result).to.be.undefined;
      done();
    };
    authorizer.handler({authorizationToken: 'wrongtoken' }, authorizerContext, authorizerCallback);
    
  });


});
