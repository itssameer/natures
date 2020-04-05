//This file is for all the code related to express
const fs = require('fs');
const express = require('express');

const app = express();

app.use(express.json()); // ***express.json add the incoming body data to request object.

let PORT = 3000;

//JSON.parse() functions coverts string into json
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`, 'utf-8')
);

app.get('/api/v1/tours', (req, res) => {
  res.status(200).json({ status: 'Success', result: tours.length, tours });
});

app.get('/api/v1/tours/:id', (req, res) => {
  console.log(req.params);
  id = req.params.id * 1;
  const tour = tours.find((el) => el.id === id);
  res.status(200).json(tour);
});

app.post('/api/v1/tours', (req, res) => {
  console.log(req.body);
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
});

app.listen(PORT, '127.0.0.1', () => {
  console.log(`app running on port ${PORT}`);
});
