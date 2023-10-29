// Import necessary modules

const busService = require('../service/busService');

// Controller for searching buses
exports.searchBuses = async (req, res) => {
  const { source, destination, dateOfJourney } = req.body;

  if (!source || !destination || !dateOfJourney) {
    return res.status(400).json({ message: 'Invalid request. Missing required data.' });
  }

  
  try {
    // Query the database to find available buses
    const buses =  await busService.searchBuses(
      source,
      destination,
      dateOfJourney,
    );

    if (!buses || buses.length === 0) {
      return res.status(404).json({ message: 'No buses found for the given criteria' });
    }

    res.json(buses);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Controller for blocking seats
exports.blockSeats = async (req, res) => {
  const { numPassengers, busId, pickupPoint } = req.body;

  if (!numPassengers || !busId || !pickupPoint) {
    return res.status(400).json({ message: 'Invalid request. Missing required data.' });
  }

  try {

    const booking =  await busService.blockSeats(
      numPassengers, busId, pickupPoint
    );

    res.json({ message: 'Seats blocked successfully', bookingId: booking._id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Controller for booking tickets
exports.bookTicket = async (req, res) => {
  const { bookingId } = req.body;

  try {

    if (!bookingId) {
      return res.status(400).json({ message: 'Invalid request. Missing required data.' });
    }

    const booking =  await busService.bookTicket(
      bookingId
    );

    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }


    res.json({ message: 'Ticket booked successfully', bookingId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
