# bus-ticket-service-backend
Below steps to run this project
1. npm install
2. run mongodb
3. add two files in .env file at root label
  a. JWT_SECRET="buildScalableSystem"
  b. MONGO_URL_COMMUNICATION_DB="mongodb://localhost:27017/bus-booking"
4. npm run start
5. to store dummy bus data run 
  **node src/scripts/busData.js**

sharing curls 
1. Register user
  curl --location 'http://localhost:3000/api/users/register' \
--header 'Content-Type: application/json' \
--data-raw '{
    "firstName": "John",
    "lastName": "Doe",
    "email": "john.doe@example.com",
    "phone": "1234567890",
    "address": "123 Main St",
    "password": "welcome123"
  }'

2. Login user
   curl --location 'http://localhost:3000/api/users/login' \
--header 'Content-Type: application/json' \
--data-raw '{
    "email": "john.doe@example.com",
    "password": "welcome123"
  }'

3. bus search

  Endpoint: /api/buses/search
  Description: Search for available buses.
  Method: POST
  Request Parameters:
  
  source (String): The source location or city from which you want to search for buses.
  destination (String): The destination location or city to which you want to travel.
  dateOfJourney (Date): The date of the journey.
  passengers (Number): The number of passengers for whom you want to search for buses.

   
 curl --location --request GET 'http://localhost:3000/api/buses/search' \
--header 'Content-Type: application/json' \
--header 'x-access-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTNlN2E2NDQ3MWEyOTRlOTIwZDM5YzciLCJpYXQiOjE2OTg1OTkxNTksImV4cCI6MTY5ODYwMjc1OX0.s-epv6DyFvExbttD_yiRboRy8rbYARJs7uRbHlnXgKA' \
--data '{
    "source": "Mumbai",
    "destination": "Delhi",
    "dateOfJourney": "2023-11-01T02:30:00.000+00:00"
  }'

5. Block seats

  Endpoint: /api/buses/blockSeats
Description: Block seats on a specific bus for a pending booking.
Method: POST
Request Parameters:

busNumber (String): The unique identifier of the bus.
passengers (Number): The number of passengers for whom you want to block seats.
pickupPoint (String): The name of the pickup point or stop on the bus route.

   curl --location 'http://localhost:3000/api/buses/blockSeats' \
--header 'Content-Type: application/json' \
--header 'x-access-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTNlN2E2NDQ3MWEyOTRlOTIwZDM5YzciLCJpYXQiOjE2OTg1OTkxNTksImV4cCI6MTY5ODYwMjc1OX0.s-epv6DyFvExbttD_yiRboRy8rbYARJs7uRbHlnXgKA' \
--data '{
    "busId": "653e77e0a8088241b6e1aa50",
    "numPassengers": 2,
    "pickupPoint": "Pune"
  }'

8. Book Seat
  Endpoint: /api/buses/bookTicket
Description: Book tickets with a blocking ID.
Method: POST
Request Parameters:

blockingId (String): The unique identifier for the blocked seats.

  curl --location 'http://localhost:3000/api/buses/bookTicket' \
--header 'Content-Type: application/json' \
--header 'x-access-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTNlN2E2NDQ3MWEyOTRlOTIwZDM5YzciLCJpYXQiOjE2OTg1OTkxNTksImV4cCI6MTY5ODYwMjc1OX0.s-epv6DyFvExbttD_yiRboRy8rbYARJs7uRbHlnXgKA' \
--data '{
    "bookingId": "653e864b59920981e7df533e"
  }'


<img width="994" alt="image" src="https://github.com/naveen-swami/bus-ticket-service-backend/assets/59306400/187b39e6-6adf-40e4-a0ed-0835b0a7009b">

<img width="991" alt="image" src="https://github.com/naveen-swami/bus-ticket-service-backend/assets/59306400/da120ff7-6f6b-4c72-ae87-0424b48ac266">

<img width="1001" alt="image" src="https://github.com/naveen-swami/bus-ticket-service-backend/assets/59306400/2dc31605-ab34-423e-8e70-6b46f5e60687">

<img width="994" alt="image" src="https://github.com/naveen-swami/bus-ticket-service-backend/assets/59306400/5c2a4830-15fb-44a4-b2de-471a5df85d73">

<img width="1004" alt="image" src="https://github.com/naveen-swami/bus-ticket-service-backend/assets/59306400/e14cdf94-5ea8-47d5-99ae-92a5969c36eb">

<img width="1176" alt="image" src="https://github.com/naveen-swami/bus-ticket-service-backend/assets/59306400/acb46ccf-ee6d-4431-9763-2c5a4b1d4afb">

<img width="1176" alt="image" src="https://github.com/naveen-swami/bus-ticket-service-backend/assets/59306400/a0b61065-3a3c-4101-9190-76e285eab320">

<img width="1171" alt="image" src="https://github.com/naveen-swami/bus-ticket-service-backend/assets/59306400/ad297e19-799d-47c9-8759-644eb132f920">






