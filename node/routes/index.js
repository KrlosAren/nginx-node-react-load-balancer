const express = require('express');
const router = express.Router();
const os = require('os');

function apiRoutes(app) {
  app.use('/api', router);

  app.get('/', (req, res) => {
    res.json({
      message: 'Hello World!',
      whoami: os.hostname(),
    });
  });
}

module.exports = {
  apiRoutes,
};
