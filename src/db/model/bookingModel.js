const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  bus: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Bus',
    required: true,
  },
  pickupPoint: {
    type: String,
    required: true,
  },
  numPassengers: {
    type: Number,
    required: true,
  },
  bookingStatus: {
    type: String,
    enum: ['pending', 'booked', 'canceled'], // Example status values
    default: 'pending',
  },
  // Add other relevant fields here
});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;
