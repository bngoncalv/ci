const Chai = require('chai');
const Lab = require('lab');

exports.lab = Lab.script();
const { lab } = exports;
const Server = require('../../src/server');

const { expect } = Chai;

lab.experiment('Test for /ping route', () => {
  lab.test('should return pong', async () => {
    const options = {
      method: 'GET',
      url: '/ping',
    };
    const response = await Server.inject(options);
    expect(response.statusCode).to.eqls(200);
    expect(response.result).to.eqls('pong');
  });
});
