const mongoose = require('mongoose');
const Bus = require('../db/model/busModel');
require('dotenv').config();
// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL_COMMUNICATION_DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

// Define the sample data for bus routes within India
const dummyData = [
  {
    busNumber: 'BUS001',
    source: 'Mumbai',
    destination: 'Delhi',
    departureDate: new Date('2023-11-01T08:00:00'),
    startLocation: 'Mumbai Central Bus Terminal',
    endLocation: 'Delhi Bus Terminal',
    availableSeats: 40,
    stops: [
      { location: 'Pune', time: new Date('2023-11-01T10:30:00') },
      { location: 'Ahmedabad', time: new Date('2023-11-01T14:00:00') },
      { location: 'Jaipur', time: new Date('2023-11-01T18:30:00') },
      { location: 'Agra', time: new Date('2023-11-01T21:00:00') },
    ],
  },
  {
    busNumber: 'BUS002',
    source: 'Bangalore',
    destination: 'Chennai',
    departureDate: new Date('2023-11-01T10:00:00'),
    startLocation: 'Bangalore Central Bus Terminal',
    endLocation: 'Chennai Bus Terminal',
    availableSeats: 30,
    stops: [
      { location: 'Coimbatore', time: new Date('2023-11-01T13:30:00') },
      { location: 'Salem', time: new Date('2023-11-01T16:30:00') },
    ],
  },
  {
    busNumber: 'BUS003',
    source: 'Kolkata',
    destination: 'Patna',
    departureDate: new Date('2023-11-01T12:00:00'),
    startLocation: 'Kolkata Central Bus Terminal',
    endLocation: 'Patna Bus Terminal',
    availableSeats: 50,
    stops: [
      { location: 'Durgapur', time: new Date('2023-11-01T14:30:00') },
      { location: 'Asansol', time: new Date('2023-11-01T16:00:00') },
      { location: 'Dhanbad', time: new Date('2023-11-01T18:00:00') },
    ],
  },
  {
    busNumber: 'BUS004',
    source: 'Delhi',
    destination: 'Chandigarh',
    departureDate: new Date('2023-11-02T09:30:00'),
    startLocation: 'Delhi Bus Terminal',
    endLocation: 'Chandigarh Bus Terminal',
    availableSeats: 35,
    stops: [
      { location: 'Ambala', time: new Date('2023-11-02T12:00:00') },
      { location: 'Panchkula', time: new Date('2023-11-02T13:30:00') },
    ],
  },
  {
    busNumber: 'BUS005',
    source: 'Chennai',
    destination: 'Hyderabad',
    departureDate: new Date('2023-11-03T11:15:00'),
    startLocation: 'Chennai Bus Terminal',
    endLocation: 'Hyderabad Bus Terminal',
    availableSeats: 48,
    stops: [
      { location: 'Vellore', time: new Date('2023-11-03T14:30:00') },
      { location: 'Kanchipuram', time: new Date('2023-11-03T16:00:00') },
    ],
  },
];

// Insert dummy data into the busModel collection
Bus.insertMany(dummyData)
  .then(() => {
    console.log('Dummy data inserted successfully.');
  })
  .catch((error) => {
    console.error('Error inserting dummy data:', error);
  })
  .finally(() => {
    // Close the database connection
    mongoose.connection.close();
  });
