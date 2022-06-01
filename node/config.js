const dotenv = require('dotenv');
const path = require('path');

dotenv.config({
  path: path.resolve(__dirname, '../.envs/.node/.env'),
});

module.exports = {
  APP: {
    PORT: process.env.PORT || 3000,
  },
};
