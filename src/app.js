const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
// Import controllers
const userController = require('./controller/userController');
const busController = require('./controller/busController');

const app = express();
const PORT = process.env.PORT || 3000;
require('dotenv').config();
mongoose.connect(process.env.MONGO_URL_COMMUNICATION_DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// User registration
app.post('/api/register', userController.register);

// User login
app.post('/api/login', userController.login);

// Bus search
app.get('/api/buses/search', busController.searchBuses);

// Route to block seats on a bus
app.post('/api/buses/blockSeats', busController.blockSeats);

// Route to book tickets based on a blocking ID
app.post('/api/buses/bookTicket', busController.bookTicket);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
