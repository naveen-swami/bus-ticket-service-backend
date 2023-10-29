const mongoose = require('mongoose');

const busSchema = new mongoose.Schema({
  source: {
    type: String,
    required: true,
  },
  destination: {
    type: String,
    required: true,
  },
  departureDate: {
    type: Date,
    required: true,
  },
  startLocation: {
    type: String,
    required: true,
  },
  endLocation: {
    type: String,
    required: true,
  },
  availableSeats: {
    type: Number,
    required: true,
  },
  stops: [
    {
      location: String,
      time: Date,
    },
  ],
  // Add other relevant fields here
});

const Bus = mongoose.model('Bus', busSchema);

module.exports = Bus;
