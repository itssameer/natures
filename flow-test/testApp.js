const app = require('express')();

const product = require('./product');

app.use((req, res, next) => {
  console.log('hello from the middleware');
  next();
});
app.use('/product', product);

const port = 3001;

app.listen(port, '127.0.0.1', () => {
  console.log('Listing for test data on 3030');
});
