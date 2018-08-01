const Hapi = require('hapi');
const routes = require('./routes/');

// Create a server with a host and port
const server = Hapi.server({
  host: 'localhost',
  port: 3000,
});

const provision = async () => {
  server.route(routes);
};

const startForTest = async () => {
  await provision();
};


// Start the server
const start = async () => {
  try {
    await provision();
    await server.start();
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
  console.log('Server running at:', server.info.uri);
};
if (!module.parent) {
  start();
} else {
  startForTest();
}
module.exports = server;

