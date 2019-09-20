'use strict';
import { Application } from 'beidou';
module.exports = (app: Application) => {
  const { router, controller } = app;
  router.post('/api/upload', controller.upload.create);
  router.get('/', '/*',controller.index.index);
};