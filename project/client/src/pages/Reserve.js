import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ReserveStyle.css'; // Ensure this CSS file reflects your desired styling

const Reserve = () => {
  const [cars, setCars] = useState([]);
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
  });

  const [loading, setLoading] = useState(true);
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
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

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
      });
    } catch (err) {
      alert(`Error submitting reservation: ${err.message}`);
    }
  };

  if (loading) return <p>Loading car data...</p>;
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

      <img src="images/22.png" className="twingo" alt="Cute Renault Twingo" />

      <div className="form-container">
        <h3 className="IntroDesc">
          Existing and currently active reservations will appear here.
        </h3>
        <h3 className="IntroDesc">
          Or you can scroll down and make a new one by following the simple steps.
        </h3>
        <h3 className="IntroDesc">Up to you, we won’t judge :)</h3>

        <img src="images/arrow.png" className="arrow" alt="Arrow" />

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

  <button type="submit">Submit</button>
</form>
        </div>
      </div>
    </div>
  );
};

export default Reserve;
