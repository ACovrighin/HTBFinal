import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ReserveStyle.css';

const HelpPage = () => {
  const [cars, setCars] = useState([]);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    rentalDate: '',
    carCategory: '',
    carModel: '',
  });

  // Fetch car data from the backend
  useEffect(() => {
    fetch('http://localhost:5000/api/cars')
      .then((response) => response.json())
      .then((data) => setCars(data))
      .catch((error) => console.error('Error fetching cars:', error));
  }, []);

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Submit form data to the backend
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:5000/api/reservations', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          alert('Reservation submitted successfully!');
          setFormData({
            fullName: '',
            email: '',
            phone: '',
            address: '',
            rentalDate: '',
            carCategory: '',
            carModel: '',
          });
        } else {
          alert('Error submitting reservation');
        }
      })
      .catch((error) => console.error('Error submitting reservation:', error));
  };

  return (
    <div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/fleet">Fleet</Link>
        <Link to="/reserve">Reserve</Link>
        <Link to="/help">Help</Link>
      </div>
      <h2 style={{ textAlign: 'center' }}>Finally Made Up Your Mind?</h2>
      <div className="form-container">
        <form onSubmit={handleSubmit} style={{ margin: '0 auto', maxWidth: '500px' }}>
          {/* Personal Info Section */}
          <div className="form-section">
            <label>Full Name</label>
            <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />

            <label>Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />

            <label>Phone</label>
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />

            <label>Full Address</label>
            <input type="text" name="address" value={formData.address} onChange={handleChange} required />
          </div>

          {/* Rental Date */}
          <div className="form-section">
            <label>Rental Date</label>
            <input type="date" name="rentalDate" value={formData.rentalDate} onChange={handleChange} required />
          </div>

          {/* Car Category */}
          <div className="form-section">
            <label>Car Category</label>
            <select
              name="carCategory"
              value={formData.carCategory}
              onChange={handleChange}
              required
            >
              <option value="">Select Category</option>
              {Array.from(new Set(cars.map((car) => car.category))).map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          {/* Specific Car Selection */}
          <div className="form-section">
            <label>Car Model</label>
            <select
              name="carModel"
              value={formData.carModel}
              onChange={handleChange}
              required
            >
              <option value="">Select a car</option>
              {cars
                .filter((car) => car.category === formData.carCategory)
                .map((car) => (
                  <option key={car.model} value={car.model}>
                    {car.model}
                  </option>
                ))}
            </select>
          </div>

          {/* Submit Button */}
          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <button type="submit">Submit Reservation</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default HelpPage;
