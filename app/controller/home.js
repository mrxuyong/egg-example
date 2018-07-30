'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    // console.log('home.js-- 1-- this:\n', this);
    console.log('home.js-- 2-- this.ctx:\n', this.ctx);
    this.ctx.body = 'hi, egg';
  }
}

module.exports = HomeController;
