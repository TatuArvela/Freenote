'use strict';

const chalk = require('chalk');
const url = require('url');
const config = require('./config')

function printHeader() {
  process.stdout.write(
    process.platform === 'win32' ? '\x1Bc' : '\x1B[2J\x1B[3J\x1B[H'
  )

  const localUrl = url.format({
    protocol: process.env.HTTPS === 'true' ? 'https' : 'http',
    hostname: 'localhost',
    port: parseInt(process.env.PORT, 10) || config.port,
    pathname: '/',
  });

  console.log(`${chalk.blue.bold(config.appName)} is now running on ${chalk.bold.cyan(localUrl)}`)
  console.log();
}


module.exports = {
  printHeader
}
