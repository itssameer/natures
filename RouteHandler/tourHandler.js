const fs = require('fs');

//JSON.parse() functions coverts string into json
tours = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`, 'utf-8')
);

exports.checkId = (req, res, next, val) => {
  if (req.params.id * 1 > tours.length) {
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid Id',
    });
  }
  next();
};

exports.getAllTours = (req, res) => {
  res.status(200).json({ status: 'Success', result: tours.length, tours });
};

exports.getTourById = (req, res) => {
  id = req.params.id * 1;
  const tour = tours.find((el) => el.id === id);
  res.status(200).json(tour);
};

exports.insertAtour = (req, res) => {
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

exports.updateAtourById = (req, res) => {
  res.send('in patch');
  tour.req.body;
};

exports.deleteTour = (req, res) => {
  res.status(204).json({
    status: 'success',
  });
};
