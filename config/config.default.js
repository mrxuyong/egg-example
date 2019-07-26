'use strict';

module.exports = appInfo => {
  const config = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1532757771228_7945';

  // add your config here
  config.middleware = [];

  config.logger = {
    level: 'DEBUG',
    consoleLevel: 'DEBUG',
  };

  // config.logger = {
  //   level: 'WARN',
  //   consoleLevel: 'WARN',
  // };

  // config.logger = {
  //   level: 'ERROR',
  //   consoleLevel: 'ERROR',
  // };

  // config.logger = {
  //   level: 'NONE',
  //   consoleLevel: 'NONE',
  // };

  return config;
};
