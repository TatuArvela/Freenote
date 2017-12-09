const package = require('./package.json')

module.exports = {
  'appName': package.name,
  'version': package.version,
  'port': parseInt(process.env.PORT, 10) || 4000,
  'database': {
    'url': 'mongo',
    'port': 27017,
    'name': 'Freenote'
  },
  'tokenExpiration': 86400,
  'secret': 'Freenote'
};