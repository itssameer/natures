const express = require('express');

const getAllUsers = (req, res) => {
  res.json({
    status: 'Error',
    message: 'this route is not yet defined',
  });
};

const getUser = (req, res) => {
  res.json({
    status: 'Error',
    message: 'this route is not yet defined',
  });
};
const createUser = (req, res) => {
  res.json({
    status: 'Error',
    message: 'this route is not yet defined',
  });
};
const deleteUser = (req, res) => {
  res.json({
    status: 'Error',
    message: 'this route is not yet defined',
  });
};

const Router = express.Router();

Router.route('/api/v1/users').get(getAllUsers);

module.exports = Router;
