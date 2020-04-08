const userController = require('../RouteHandler/userHandler');

const express = require('express');

const Router = express.Router();

Router.route('/api/v1/users').get(userController.getAllUsers);

module.exports = Router;
