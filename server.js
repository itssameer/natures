const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const app = require('./app');

let PORT = 3000;

// console.log(app.get('env'));
console.log(process.env.NODE_ENV);

app.listen(PORT, '127.0.0.1', () => {
  console.log(`app running on port ${PORT}`);
});
