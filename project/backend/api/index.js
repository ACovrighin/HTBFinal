const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// Initialize app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(
  'mongodb+srv://andrew44291:rKYM0lSgkcRlMlJa@htb.3houy.mongodb.net/HTBrental?retryWrites=true&w=majority',
  { useNewUrlParser: true, useUnifiedTopology: true }
)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Failed to connect to MongoDB:', err));

// Define MongoDB schemas and models
const CarSchema = new mongoose.Schema({
  category: String,
  model: String,
  price: { type: Number, required: true },
});

const ReservationSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  rentalDate: { type: Date, required: true },
  checkoutDate: { type: Date, required: true },
  carCategory: { type: String, required: true },
  carModel: { type: String, required: true },
  cardNumber: { type: String, required: true },
  expiryDate: { type: String, required: true },
  cvv: { type: String, required: true },
  totalPrice: { type: Number, required: true },
});

const Car = mongoose.model('Car', CarSchema, 'cars'); // Explicit collection name
const Reservation = mongoose.model('Reservation', ReservationSchema);

// Routes

// Test route to check server health
app.get('/test', (req, res) => res.send('Server is working!'));

// Fetch all cars
app.get('/api/cars', async (req, res) => {
  try {
    const cars = await Car.find(); // Assumes 'price' is already in the car documents
    if (!cars.length) {
      return res.status(404).json({ message: 'No cars found' });
    }
    res.json(cars);
  } catch (error) {
    console.error('Error fetching cars:', error);
    res.status(500).json({ message: 'Error fetching cars', error: error.message });
  }
});

    // Fetch active reservations
    app.get('/api/active-reservations', async (req, res) => {
      try {
        const today = new Date();
        const activeReservations = await Reservation.find({ checkoutDate: { $gte: today } })
          .select('fullName carModel rentalDate checkoutDate') // Select only required fields
          .sort('checkoutDate'); // Sort by checkout date for easier viewing
        res.status(200).json(activeReservations);
      } catch (error) {
        console.error('Error fetching active reservations:', error);
        res.status(500).json({ message: 'Error fetching active reservations', error: error.message });
      }
    });

// Save a new reservation
app.post('/api/reservations', async (req, res) => {
  try {
    const {
      fullName,
      email,
      phone,
      address,
      rentalDate,
      checkoutDate,
      carCategory,
      carModel,
    } = req.body;

    // Validate input
    if (!fullName || !email || !phone || !address || !rentalDate || !checkoutDate || !carCategory || !carModel) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Calculate the number of rental days
    const rentalStart = new Date(rentalDate);
    const rentalEnd = new Date(checkoutDate);
    const rentalDays = (rentalEnd - rentalStart) / (1000 * 60 * 60 * 24);

    if (isNaN(rentalDays) || rentalDays <= 0) {
      return res.status(400).json({ message: 'Invalid rental dates provided' });
    }

    // Find the selected car's price
    const car = await Car.findOne({ model: carModel });
    if (!car || typeof car.price !== 'number') {
      return res.status(404).json({ message: 'Car not found or invalid price' });
    }

    const totalPrice = rentalDays * car.price;

    // Create the reservation object
    const newReservation = new Reservation({
      ...req.body,
      totalPrice, // Add the calculated total price
    });


    // Save the reservation
    await newReservation.save();
    res.status(201).json({ message: 'Reservation saved successfully', totalPrice });
  } catch (error) {
    console.error('Error saving reservation:', error);
    res.status(500).json({ message: 'Error saving reservation', error: error.message });
  }
});


// Start the server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
