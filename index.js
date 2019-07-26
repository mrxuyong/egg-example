/**
 * @name index.js
 * @desc egg源码级别的debug方式，
 *      项目根目录运行 node --inspect-brk index.js
 * @author: Created by XuYong of1615 on 2018/7/26
 */

'use strict';

const egg = require('egg');

egg.startCluster({}, () => {
  console.log('egg-example/started.js--');
});
