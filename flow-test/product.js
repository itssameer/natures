const User = require('./dbquery');

const express = require('express');

const Router = express.Router();

Router.route('/').get(async (req, res) => {
  const newUser = await User.create({
    name: 'Sameer',
    age: 26,
  });
  res.send('from the get products router');
  console.log(req.body);
});

module.exports = Router;
