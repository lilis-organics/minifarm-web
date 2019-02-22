const serverless = require('serverless-http');
const binaryMimeTypes = require('./binaryMimeTypes');
const server = require('./server');

const handler = serverless(server, {
  binary: binaryMimeTypes
});

module.exports.handler = async (event, context) => {
  return handler(event, context);
};
