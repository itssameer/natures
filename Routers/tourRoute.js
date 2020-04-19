const tourController = require('../RouteHandler/tourHandler');
const express = require('express');

const Router = express.Router();

Router.route('/tour-stats').get(tourController.getTourStats);
Router.route('/')
  .get(tourController.getAllTours)
  .post(tourController.insertAtour);
Router.route('/:id')
  .get(tourController.getTourById)
  .patch(tourController.updateAtourById)
  .delete(tourController.deleteTour);

module.exports = Router;

/****************************************************************
 * Sub routes:
 * first app.use() will get the req as it is the middle ware
 * then it will direct that request to eiter tourHandler or userHandler as these are the sub routes( and also the middleware)
 * so request will go through these routes too.
 */
