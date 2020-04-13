const fs = require('fs');

const Tour = require('../models/tourModel');
exports.getAllTours = async (req, res) => {
  try {
    queryObj = { ...req.query }; // we cant assign objects directly as changing queryObj will change req.query
    const excludeFields = ['page', 'sort', 'limit', 'fields'];
    excludeFields.forEach((el) => delete queryObj[el]);
    let queryStr = JSON.stringify(queryObj); // converting JSON  to string for pattern replacement
    queryStr = queryStr.replace(/\b(gte|gt|lt|lte)\b/g, (match) => `$${match}`);
    console.log(queryStr);

    const query = Tour.find(JSON.parse(queryStr));
    const tours = await query;

    res.status(200).json({ status: 'Success', result: tours.length, tours });
  } catch (err) {
    res.status(400).json({ status: 'Fail', message: err });
  }
};

exports.getTourById = async (req, res) => {
  try {
    const tour = await Tour.findById(req.params.id);
    res.status(200).json(tour);
  } catch (err) {
    res.status(400).json('something went wrong');
  }
};

exports.insertAtour = async (req, res) => {
  // const newTour = await Tour.create(req.body);
  const newTour = new Tour(req.body);
  newTour.save();
  res.json(newTour);
};

exports.updateAtourById = (req, res) => {
  res.send('in patch');
};

exports.deleteTour = (req, res) => {
  res.status(204).json({
    status: 'success',
  });
};
