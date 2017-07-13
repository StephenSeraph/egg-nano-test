'use strict';

const nano = require('nanomsg');

module.exports = app => {
  class HomeController extends app.Controller {
    * index() {
      this.logger.info('begin to execute NANOMSG!!!');
      const req = nano.socket('req');
      this.logger.info('WELL DONE!!!');
      this.ctx.body = 'hi, egg';
    }
  }
  return HomeController;
};
