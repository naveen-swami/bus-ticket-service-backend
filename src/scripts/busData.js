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
    startTime: new Date('2023-11-01T08:00:00'),
    availableSeats: 40,
    stops: ['Pune', 'Ahmedabad', 'Jaipur', 'Agra'],
  },
  {
    busNumber: 'BUS002',
    source: 'Bangalore',
    destination: 'Chennai',
    startTime: new Date('2023-11-01T10:00:00'),
    availableSeats: 30,
    stops: ['Coimbatore', 'Salem'],
  },
  {
    busNumber: 'BUS003',
    source: 'Kolkata',
    destination: 'Patna',
    startTime: new Date('2023-11-01T12:00:00'),
    availableSeats: 50,
    stops: ['Durgapur', 'Asansol', 'Dhanbad'],
  },
  {
    busNumber: 'BUS004',
    source: 'Delhi',
    destination: 'Chandigarh',
    startTime: new Date('2023-11-02T09:30:00'),
    availableSeats: 35,
    stops: ['Ambala', 'Panchkula'],
  },
  {
    busNumber: 'BUS005',
    source: 'Chennai',
    destination: 'Hyderabad',
    startTime: new Date('2023-11-03T11:15:00'),
    availableSeats: 48,
    stops: ['Vellore', 'Kanchipuram'],
  },
  {
    busNumber: 'BUS006',
    source: 'Jaipur',
    destination: 'Udaipur',
    startTime: new Date('2023-11-04T14:45:00'),
    availableSeats: 27,
    stops: ['Ajmer', 'Chittorgarh'],
  },
  {
    busNumber: 'BUS007',
    source: 'Ahmedabad',
    destination: 'Surat',
    startTime: new Date('2023-11-05T15:20:00'),
    availableSeats: 60,
    stops: ['Vadodara', 'Bharuch'],
  },
  {
    busNumber: 'BUS008',
    source: 'Hyderabad',
    destination: 'Bengaluru',
    startTime: new Date('2023-11-06T17:30:00'),
    availableSeats: 55,
    stops: ['Anantapur', 'Tumkur'],
  },
  {
    busNumber: 'BUS009',
    source: 'Pune',
    destination: 'Goa',
    startTime: new Date('2023-11-07T12:45:00'),
    availableSeats: 20,
    stops: ['Kolhapur', 'Belgaum'],
  },
  {
    busNumber: 'BUS010',
    source: 'Jaipur',
    destination: 'Jodhpur',
    startTime: new Date('2023-11-08T16:00:00'),
    availableSeats: 35,
    stops: ['Ajmer', 'Pali'],
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
