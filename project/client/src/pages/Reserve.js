import React, { useEffect, useState } from 'react';

const Reserve = () => {
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
        carCategory: '',
        carModel: '',
      });
    } catch (err) {
      alert(`Error submitting reservation: ${err.message}`);
    }
  };

  if (loading) return <p>Loading car data...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '500px', margin: '0 auto' }}>
      <h2>Reserve a Car</h2>

      <div>
        <label>Full Name</label>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Phone</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Address</label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Rental Date</label>
        <input
          type="date"
          name="rentalDate"
          value={formData.rentalDate}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Car Category</label>
        <select
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

      <div>
        <label>Car Model</label>
        <select
          name="carModel"
          value={formData.carModel}
          onChange={handleChange}
          required
        >
          <option value="">Select Model</option>
          {cars
            .filter((car) => car.category === formData.carCategory)
            .map((car) => (
              <option key={car.model} value={car.model}>
                {car.model}
              </option>
            ))}
        </select>
      </div>

      <button type="submit">Submit Reservation</button>
    </form>
  );
};

export default Reserve;
