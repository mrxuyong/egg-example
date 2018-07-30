'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  console.log('router.js-- 1-- app:\n', app);
  const { router, controller } = app;
  console.log('router.js-- 2-- controller:\n', controller);
  router.get('/', controller.home.index);
};
