import React from 'react';
import { Link } from 'react-router-dom';
import './ReserveStyle.css'; // Ensure this path is correct for your project

const HelpPage = () => {
  return (
    <div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/fleet">Fleet</Link>
        <Link to="/reserve">Reserve</Link>
        <Link to="/help">Help</Link>
      </div>
      {/* Form Page */}
      
        <h2 className="IntroText" style={{ textAlign: 'center' }}>Finally Made Up Your Mind?</h2>

        <img src="images/22.png" className="twingo" alt="Cute Renault Twingo" />
    <div className="form-container">
        <h3 className ="IntroDesc">
            Existing and currently active reservations will appear here.
        </h3>

        <h3 className ="IntroDesc">
            Or you can scroll down and make a new one by following the simple steps.
        </h3>

        <h3 className ="IntroDesc">
            Up to you, we wont judge :)
        </h3>


        <img src="images/arrow.png" className="arrow" alt="Arrow" />


       <div className='forms'>
        <form style={{ margin: '0 auto', maxWidth: '500px' }}>
          {/* Personal Info Section */}
          <div className="form-section">
            <h3>Personal Info</h3>
            <label htmlFor="fullName">Full Name</label>
            <input type="text" id="fullName" placeholder="Enter your full name" required />
            
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" required />
          </div>

          {/* Date of Renting Section */}
          <div className="form-section">
            <h3>Date of Renting</h3>
            <label htmlFor="rentalDate">Select Rental Date</label>
            <input type="date" id="rentalDate" required />
          </div>

          {/* Car Category Section */}
          <div className="form-section">
            <h3>Car Category</h3>
            <label htmlFor="carCategory">Choose Category</label>
            <select id="carCategory" required>
              <option value="">Select Category</option>
              <option value="luxury">Luxury</option>
              <option value="sports">Sports</option>
              <option value="classic">Sports Classics</option>
              <option value="xl">XL</option>
            </select>
          </div>

          {/* Specific Car Selection Section */}
          <div className="form-section">
            <h3>Choose Your Car</h3>
            <label htmlFor="carModel">Select Car</label>
            <select id="carModel" required>
              <option value="">Select a car</option>
              <option value="car1">Car Model 1</option>
              <option value="car2">Car Model 2</option>
              <option value="car3">Car Model 3</option>
              <option value="car4">Car Model 4</option>
            </select>
          </div>

          {/* Submit Button */}
          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <button type="submit">Submit Reservation</button>
          </div>
        </form>
      </div>
    </div>
    </div> 
  );
};

export default HelpPage;
