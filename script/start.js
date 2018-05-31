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



const DEFAULT_PORT = parseInt(process.env.PORT, 10) || 3002;
const HOST = process.env.HOST || '0.0.0.0';

if (process.env.HOST) {
  console.log(
    chalk.cyan(
      `Attempting to bind to HOST environment variable: ${chalk.yellow(
        chalk.bold(process.env.HOST)
      )}`
    )
  );
  console.log(
    `If this was unintentional, check that you haven't mistakenly set it in your shell.`
  );
  console.log(`Learn more here: ${chalk.yellow('http://bit.ly/2mwWSwH')}`);
  console.log();
}

// We attempt to use the default port but if it is busy, we offer the user to
// run on a different port. `choosePort()` Promise resolves to the next free port.
new Promise(resolve =>{
  resolve(DEFAULT_PORT)
}).then(port => {

    const protocol = process.env.HTTPS === 'true' ? 'https' : 'http';
    const appName = require(paths.appPackageJson).name;
    const formatUrl = hostname =>
    url.format({
      protocol,
      hostname,
      port,
      pathname: '/',
    });
    const urls = formatUrl(HOST)
    // Create a webpack compiler that is configured with custom messages.
    const compiler = webpack(config,(err, stats) => {
        if (err)
            throw new err;
        console.log('[webpack:build]', stats.toString({
            colors: true
        }));
    })

    const serverConfig = createDevServerConfig(
      false,
      urls
    );
    const devServer = new WebpackDevServer(compiler, serverConfig);
    // Launch WebpackDevServer.
    devServer.listen(port, HOST, err => {
      if (err) {
        return console.log(err);
      }

      console.log(chalk.cyan('Starting the development server...\n'));
    });

    ['SIGINT', 'SIGTERM'].forEach(function(sig) {
      process.on(sig, function() {
        devServer.close();
        process.exit();
      });
    });
  })
  .catch(err => {
    if (err && err.message) {
      console.log(err.message);
    }
    process.exit(1);
  });
