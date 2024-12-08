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
});

const Car = mongoose.model('Car', CarSchema, 'cars'); // Explicit collection name
const Reservation = mongoose.model('Reservation', ReservationSchema);

// Routes

// Test route to check server health
app.get('/test', (req, res) => res.send('Server is working!'));

// Fetch all cars
app.get('/api/cars', async (req, res) => {
  try {
    const cars = await Car.find();
    if (!cars.length) {
      return res.status(404).json({ message: 'No cars found' });
    }
    res.json(cars);
  } catch (error) {
    console.error('Error fetching cars:', error);
    res.status(500).json({ message: 'Error fetching cars', error: error.message });
  }
});

// Save a new reservation
app.post('/api/reservations', async (req, res) => {
  try {
    const { fullName, email, phone, address, rentalDate, carCategory, carModel } = req.body;

    // Validate input
    if (!fullName || !email || !phone || !address || !rentalDate || !carCategory || !carModel) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const newReservation = new Reservation(req.body);
    await newReservation.save();
    res.status(201).json({ message: 'Reservation saved successfully' });
  } catch (error) {
    console.error('Error saving reservation:', error);
    res.status(500).json({ message: 'Error saving reservation', error: error.message });
  }
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
