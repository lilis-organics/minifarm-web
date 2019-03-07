module.exports = {
  target: 'serverless',
  // assetPrefix: process.env.stage === 'local' ? '' : process.env.stage
  assetPrefix: '' // '' for local, 'dev', 'staging', 'prod' for serverless deployment
};
