const fs = require('fs');

const APIFeatures = require('../utils/apiFeatures');

const Tour = require('../models/tourModel');

exports.getTourStats = async (req, res) => {
  const stats = await Tour.aggregate([
    {
      $match: { rating: { $gte: 4.5 } },
    },
    {
      $group: {
        _id: null,
        avgRating: { $avg: '$rating' },
      },
    },
  ]);
  res.status(200).json(stats);
};

exports.getAllTours = async (req, res) => {
  /*
  queryObj = { ...req.query }; // we cant assign objects directly as changing queryObj will change this.queryString
  const excludeFields = ['page', 'sort', 'limit', 'fields'];
  excludeFields.forEach((el) => delete queryObj[el]);
  let queryStr = JSON.stringify(queryObj); // converting JSON  to string for pattern replacement
  queryStr = queryStr.replace(/\b(gte|gt|lt|lte)\b/g, (match) => `$${match}`);
  console.log(queryStr);

  let query = Tour.find(JSON.parse(queryStr));
  //Sorting;
  if (req.query.sort) {
    const sortBy = query.sort.split(',').join(' ');
    console.log('exports.getAllTours -> query', query);
    console.log('exports.getAllTours -> sortBy', sortBy);
    query = query.sort(sortBy);
  }

  // selecting fields
  if (req.query.fields) {
    const fields = query.fields.split(',').join(' ');
    query = query.select(fields);
  } else {
    query = query.select('-__v');
  }

  // Pagi/zng and limit (pagination)
  const page = req.query.page * 1 || 1;
  const limit = req.query.limit * 1 || 50;
  const skip = (page - 1) * limit;

  // handling the out of page request
  if (req.query.page) {
    const totalTours = await Tour.countDocuments();
    if (skip >= totalTours) {
      throw new Error("This request couldn't be processed");
    }
  }

  query = query.skip(skip).limit(limit);
*/
  const features = new APIFeatures(Tour, req.query)
    .filter()
    .limitFields()
    .sort()
    .paginate();
  const tours = await features.query;

  res.status(200).json({ status: 'Success', result: tours.length, tours });
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
