const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const app = require('./app');

let PORT = 3000;

dbString = process.env.DATABASE.replace('<PASSWORD>', process.env.DB_PASSWORD);
mongoose
  .connect(dbString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then((con) => {
    // console.log(con.connections);
    console.log('Connected to CloudDB');
  })
  .catch((err) => {
    console.log(err);
  });

console.log(process.env.NODE_ENV);

app.listen(PORT, '127.0.0.1', () => {
  console.log(`app running on port ${PORT}`);
});
