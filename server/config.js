const package = require('./package.json')

module.exports = {
  'appName': package.name,
  'version': package.version,
  'port': parseInt(process.env.PORT, 10) || 4000
};