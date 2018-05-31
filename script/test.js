'use strict';

// Do this as the first thing so that any code reading it knows the right env.
process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on('unhandledRejection', err => {
  throw err;
});

// Ensure environment variables are read.
require('../config/env');
const url = require('url');
const fs = require('fs');
const chalk = require('chalk');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

const paths = require('../config/paths');
const config = require('../config/webpack.config.dev.babel');
const createDevServerConfig = require('../config/webpackDevServer.config');

build()

// We attempt to use the default port but if it is busy, we offer the user to
// run on a different port. `choosePort()` Promise resolves to the next free port.
function build() {
  console.log(chalk.yellow('Test build output...'));

  let compiler = webpack(config);
  return new Promise((resolve, reject) => {
    compiler.run((err, stats) => {
      if (err) {
      console.log(err)

        return reject(err);
      }
      console.log(stats.toString({
            colors: true
        }))
      return resolve({
        stats
      });
    });
  });
}
