const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const config = require('../config');
const { apiRoutes } = require('../routes');

class Server {
  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }

  config() {
    this.app.use(express.json());
  }

  middlewares() {
    this.app.use(express.static(path.join(__dirname, '../public')));
    this.app.use(morgan('dev'));
    this.app.use(cors());
  }

  routes() {
    apiRoutes(this.app);
  }

  start() {
    this.app.listen(config.APP.PORT || 3000, () => {
      console.log(`Server on port ${config.APP.PORT}`);
    });
  }
}

module.exports = {
  Server,
};
