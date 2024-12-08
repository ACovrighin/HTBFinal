const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://andrew44291:rKYM0lSgkcRlMlJa@htb.3houy.mongodb.net/cars?retryWrites=true&w=majority&appName=HTB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Failed to connect to MongoDB', err));

// Define MongoDB schemas and models
const CarSchema = new mongoose.Schema({
  category: String,
  model: String,
});

const ReservationSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  phone: String,
  address: String,
  rentalDate: Date,
  carCategory: String,
  carModel: String,
});

const Car = mongoose.model('Car', CarSchema, 'cars');
const Reservation = mongoose.model('Reservation', ReservationSchema);

// Routes
app.get('/', (req, res) => res.send('API is running...'));

// Route to get car categories and models
app.get('/api/cars', async (req, res) => {
  try {
    const cars = await Car.find(); // Ensure this fetches documents
    if (!cars || cars.length === 0) {
      return res.status(404).json({ message: 'No cars found' });
    }
    res.json(cars);
  } catch (error) {
    console.error('Error fetching cars:', error);
    res.status(500).json({ message: 'Error fetching car data', error: error.message });
  }
});

// Route to save reservation data
app.post('/api/reservations', async (req, res) => {
  try {
    const newReservation = new Reservation(req.body);
    await newReservation.save();
    res.status(201).send('Reservation saved successfully');
  } catch (error) {
    res.status(400).send('Error saving reservation');
  }
});

// Sample data endpoint for the fleet
app.get('/fleet', (req, res) =>
  res.json({ pages: ['Luxury', 'Sports', 'Sports Classics', 'XL'] })
);

// Start the server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
