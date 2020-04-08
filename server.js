const app = require('./app');
let PORT = 3000;

app.listen(PORT, '127.0.0.1', () => {
  console.log(`app running on port ${PORT}`);
});
