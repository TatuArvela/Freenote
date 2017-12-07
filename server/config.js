const package = require('./package.json')

module.exports = {
  'appName': package.name,
  'version': package.version,
  'port': parseInt(process.env.PORT, 10) || 4000,
  'database': {
    'url': process.env.DATABASEURL || 'localhost',
    'port': parseInt(process.env.DATABASEPORT, 10) || 27017,
    'name': 'Freenote'
  },
  'secret': 'Freenote'
};