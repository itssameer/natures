const fs = require('fs');
const express = require('express');

//JSON.parse() functions coverts string into json
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`, 'utf-8')
);

const getAllTours = (req, res) => {
  res.status(200).json({ status: 'Success', result: tours.length, tours });
};

const getTourById = (req, res) => {
  id = req.params.id * 1;
  const tour = tours.find((el) => el.id === id);
  res.status(200).json(tour);
};

const insertAtour = (req, res) => {
  const newId = tours[tours.length - 1].id + 1;
  const newTour = Object.assign({ id: newId }, req.body);

  tours.push(newTour);

  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    (err) => {
      if (err)
        return res.status(400).json({
          status: 'failure',
        });
      res.json(newTour);
    }
  );
};

const updateAtourById = (req, res) => {
  res.send('in patch');
  tour.req.body;
};

const deleteTour = (req, res) => {
  res.status(204).json({
    status: 'success',
  });
};

const Router = express.Router();

Router.route('/').get(getAllTours).post(insertAtour);
Router.route('/:id').get(getTourById).patch(updateAtourById).delete(deleteTour);

module.exports = Router;

/****************************************************************
 * Sub routes:
 * first app.use() will get the req as it is the middle ware
 * then it will direct that request to eiter tourHandler or userHandler as these are the sub routes( and also the middleware)
 * so request will go through these routes too.
 */
