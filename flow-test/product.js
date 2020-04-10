const express = require('express');

const Router = express.Router();

Router.route('/').get((req, res) => {
  res.send('from the get products router');
});

module.exports = Router;
