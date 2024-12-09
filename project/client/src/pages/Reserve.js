import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ReserveStyle.css';

const Reserve = () => {
  const [cars, setCars] = useState([]);
  const [activeReservations, setActiveReservations] = useState([]);
  const [loadingReservations, setLoadingReservations] = useState(true);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    rentalDate: '',
    checkoutDate: '',
    carCategory: '',
    carModel: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    totalPrice: 0,
  });

  const [loadingCars, setLoadingCars] = useState(true);
  const [error, setError] = useState('');

  // Fetch car data from the backend
  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/cars');
        if (!response.ok) {
          throw new Error(`Error fetching cars: ${response.statusText}`);
        }
        const data = await response.json();
        setCars(data);
        setLoadingCars(false);
      } catch (err) {
        setError(err.message);
        setLoadingCars(false);
      }
    };

    fetchCars();
  }, []);

  // Fetch active reservations
  useEffect(() => {
    const fetchActiveReservations = async () => {
      try {
        setLoadingReservations(true);
        const response = await fetch('http://localhost:5000/api/active-reservations');
        if (!response.ok) {
          throw new Error(`Error fetching active reservations: ${response.statusText}`);
        }
        const data = await response.json();
        setActiveReservations(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoadingReservations(false);
      }
    };

    fetchActiveReservations();
  }, []);

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Calculate total price based on selected car and rental duration
  useEffect(() => {
    if (formData.rentalDate && formData.checkoutDate && formData.carModel) {
      const rentalStart = new Date(formData.rentalDate);
      const rentalEnd = new Date(formData.checkoutDate);
      const rentalDays = (rentalEnd - rentalStart) / (1000 * 60 * 60 * 24);

      // Find the selected car's price
      const selectedCar = cars.find((car) => car.model === formData.carModel);

      if (selectedCar && rentalDays > 0) {
        setFormData((prev) => ({
          ...prev,
          totalPrice: rentalDays * selectedCar.price,
        }));
      } else {
        setFormData((prev) => ({
          ...prev,
          totalPrice: 0,
        }));
      }
    }
  }, [formData.rentalDate, formData.checkoutDate, formData.carModel, cars]);

  // Submit form data to the backend
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/reservations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`Error submitting reservation: ${response.statusText}`);
      }

      alert('Reservation submitted successfully!');
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        address: '',
        rentalDate: '',
        checkoutDate: '',
        carCategory: '',
        carModel: '',
        cardNumber: '',
        expiryDate: '',
        cvv: '',
        totalPrice: 0,
      });

      // Refresh active reservations
      const fetchActiveReservations = async () => {
        const response = await fetch('http://localhost:5000/api/active-reservations');
        const data = await response.json();
        setActiveReservations(data);
      };
      fetchActiveReservations();
    } catch (err) {
      alert(`Error submitting reservation: ${err.message}`);
    }
  };

  if (loadingCars) return <p>Loading car data...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/fleet">Fleet</Link>
        <Link to="/reserve">Reserve</Link>
        <Link to="/help">Help</Link>
      </div>

      <h2 className="IntroText" style={{ textAlign: 'center' }}>
        Finally Made Up Your Mind?
      </h2>


      {/* Active Reservations Section */}
      <div className="active-reservations-container">
        <h3>Currently Active Reservations</h3>
        {loadingReservations ? (
          <p>Loading active reservations...</p>
        ) : activeReservations.length > 0 ? (
          activeReservations.map((reservation, index) => (
            <div key={index} className="reservation-card">
              <p><strong>Name:</strong> {reservation.fullName}</p>
              <p><strong>Car:</strong> {reservation.carModel}</p>
              <p><strong>Start Date:</strong> {new Date(reservation.rentalDate).toLocaleDateString()}</p>
              <p><strong>Checkout Date:</strong> {new Date(reservation.checkoutDate).toLocaleDateString()}</p>
            </div>
          ))
        ) : (
          <p>No active reservations</p>
        )}
      </div>

      <h3 className="IntroDesc">
        View currently active reservations here <br/> or scroll down and make a new one by following the simple steps.
      </h3>
      <h3 className="IntroDesc">Up to you, we won’t judge :)</h3>

      <div className="forms">
        <form onSubmit={handleSubmit} className="form-container">
          <h2>Reserve Your Car</h2>
          {/* Full Name */}
          <div>
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Enter Your Name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Enter Your Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          {/* Address */}
          <div>
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              placeholder="Enter Your Address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>

          {/* Rental Date */}
          <div>
            <label htmlFor="rentalDate">Rental Date</label>
            <input
              type="date"
              id="rentalDate"
              name="rentalDate"
              value={formData.rentalDate}
              onChange={handleChange}
              required
            />
          </div>

          {/* Checkout Date */}
          <div>
            <label htmlFor="checkoutDate">Checkout Date</label>
            <input
              type="date"
              id="checkoutDate"
              name="checkoutDate"
              value={formData.checkoutDate}
              onChange={handleChange}
              required
            />
          </div>

          {/* Car Category */}
          <div>
            <label htmlFor="carCategory">Car Category</label>
            <select
              id="carCategory"
              name="carCategory"
              value={formData.carCategory}
              onChange={handleChange}
              required
            >
              <option value="">Select Category</option>
              {[...new Set(cars.map((car) => car.category))].map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          {/* Car Model */}
          <div>
            <label htmlFor="carModel">Car Model</label>
            <select
              id="carModel"
              name="carModel"
              value={formData.carModel}
              onChange={handleChange}
              required
            >
              <option value="">Select Car</option>
              {cars
                .filter((car) => car.category === formData.carCategory)
                .map((car) => (
                  <option key={car.model} value={car.model}>
                    {car.model}
                  </option>
                ))}
            </select>
          </div>

          <div>
            <label>Total Price</label>
            <input
              type="text"
              value={`$${formData.totalPrice}`}
              readOnly
              style={{ backgroundColor: '#2e2e2e', color: '#f5f5f5', fontWeight: 'bold' }}
            />
          </div>

          {/* Credit Card Details */}
          <div>
            <label htmlFor="cardNumber">Card Number</label>
            <input
              type="text"
              id="cardNumber"
              name="cardNumber"
              placeholder="Enter 16-digit Card Number"
              value={formData.cardNumber}
              onChange={handleChange}
              maxLength="16"
              pattern="\d{16}"
              required
            />
          </div>

          <div>
            <label htmlFor="expiryDate">Expiry Date</label>
            <input
              type="month"
              id="expiryDate"
              name="expiryDate"
              value={formData.expiryDate}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="cvv">CVV</label>
            <input
              type="text"
              id="cvv"
              name="cvv"
              placeholder="Enter 3-digit CVV"
              value={formData.cvv}
              onChange={handleChange}
              maxLength="3"
              pattern="\d{3}"
              required
            />
          </div>

          <button type="submit">RESERVE</button>
        </form>
      </div>
    </div>
  );
};

export default Reserve;
