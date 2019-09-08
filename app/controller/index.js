'use strict';

const { Controller } = require('beidou-core');

class IndexController extends Controller {
  async index() {
    const { ctx } = this;
    await ctx.render('index', {lang:ctx.query.lang});
  }
}

module.exports = IndexController;