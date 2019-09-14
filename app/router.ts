'use strict';
import { Application } from 'beidou';
module.exports = (app: Application) => {
  const { router, controller } = app;
  router.get('/*',controller.index.index);
};