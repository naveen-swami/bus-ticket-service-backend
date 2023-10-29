const Bus = require('../db/model/busModel'); // Assuming you have a Bus model
const Booking = require('../db/model/bookingModel'); // Assuming you have a Booking model

const bookingStatus = {
  pending: 'pending',
  booked: 'booked',
  canceled: "canceled"
};

// Service for searching buses
exports.searchBuses = async (source, destination, dateOfJourney) => {
  try {
    const buses = await Bus.find({
      source,
      destination,
      departureDate: dateOfJourney,
    });
    return buses;
  } catch (error) {
    throw error;
  }
};

// Service for blocking seats
exports.blockSeats = async (numPassengers, busId, pickupPoint) => {
  try {

    const booking = new Booking({
      bus: busId,
      pickupPoint,
      numPassengers,
    });

    await booking.save();
    return booking._id;
  } catch (error) {
    throw error;
  }
};

// Service for booking tickets
exports.bookTicket = async (bookingId) => {
  try {

    const booking = await Booking.findOneAndUpdate(
      { _id: bookingId },
      { bookingStatus: bookingStatus.booked },
      { new: true }
    );

    if (!booking) {
      throw new Error('Booking not found');
    }

    return booking._id;
  } catch (error) {
    throw error;
  }
};
