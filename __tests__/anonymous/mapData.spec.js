const helper = require('../../testHelper');
const expect = require('chai').expect;
const mapData = require('../../apis/surf-repair-anonymous/endpoints/mapdata');

describe('mapData', function() {
  this.timeout(15000);
  it('Gets map data successfully', function(done) {
    const mapDataCallback = (error, result) => {
      expect(result).to.not.be.undefined;
      done();
    };
    const mapDataContext = {
      succeed: response => {
        expect(response).to.not.be.undefined;
        expect(response.statusCode).to.be.equal(200);
        done();
      }
    }
    mapData.handler({}, mapDataContext , mapDataCallback);
  });
});
