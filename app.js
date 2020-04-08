//This file is for all the code related to express
const fs = require('fs');
const express = require('express');
const morgan = require('morgan'); //its a middle to log request into console for INFO

const tourRoute = require('./Routers/tourRoute');
const userRoute = require('./Routers/userRoute');

const app = express();

app.use(morgan('dev'));

app.use(express.json()); // ***express.json add the incoming body data to request object.

app.use((req, res, next) => {
  // Custom middleware
  console.log('Hello from the middleware!');
  next();
});

/*
app.get('/api/v1/tours', getAllTours);
app.get('/api/v1/tours/:id', getTourById);
app.post('/api/v1/tours', insertAtour);
app.patch('/api/v1/tours/:id', updateAtourById);
app.delete('/api/v1/tours/:id', deleteTour);
*/
//we use route to chain same routes above routes can be written as

app.use('/api/v1/tours', tourRoute); // Mounting the new router to a tourRoute.
app.use('/api/v1/users', userRoute); // Mounting the new router to a userRoute.

module.exports = app;
