const mongoose = require('mongoose');
const tourSchema = mongoose.Schema({
  name: String,
  price: Number,
  rating: {
    type: Number,
    default: 4.5,
  },
});

const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;
