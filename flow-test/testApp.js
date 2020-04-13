const express = require('express');
const mongoose = require('mongoose');
const app = express();
const product = require('./product');

// mongoose
//   .connect('mongodb://localhost:27017/natours', {
//     useUnifiedTopology: true,
//     useNewUrlParser: true,
//   })
//   .then(() => {
//     console.log('Connected to DB');
//   });

app.use(express.json());

app.use((req, res, next) => {
  console.log('hello from the middleware');
  next();
});

app.use('/product', product);

const port = 3001;

app.listen(port, '127.0.0.1', () => {
  console.log('Listing for test data on 3001 ');
});
