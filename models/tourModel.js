const mongoose = require('mongoose');
const tourSchema = mongoose.Schema({
  name: {
    type: String,
    require: [true, 'A Tour must have name'],
  },
  price: {
    type: String,
    require: [true, 'A Tour must have some price'],
  },
  rating: {
    type: Number,
    default: 4.5,
  },
});

const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;
