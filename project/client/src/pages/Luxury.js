import React from 'react';
import { Link } from 'react-router-dom';
import './LuxuryStyle.css'; // Assuming you have your CSS file


const LuxuryPage = () => {
  return (
    <div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/fleet">Fleet</Link>
        <Link to="#">Reserve</Link>
        <Link to="/help">Help</Link>
      </div>

      <div className="car-card">
        <img src="images/Luxury/1.jpg" alt="Mercedes-Benz S Class" className="car-photo" />
        <h3 className="car-title">Mercedes-Benz S Class</h3>
        <p className="car-description">A brief description of the car, such as make, model, and features.</p>
      </div>
      
      <div className="car-card">
        <img src="images/Luxury/2.jpg" alt="BMW 7 Series" className="car-photo" />
        <h3 className="car-title">BMW 7 Series</h3>
        <p className="car-description">A brief description of the car, such as make, model, and features.</p>
      </div>
      
      <div className="car-card">
        <img src="images/Luxury/3.jpg" alt="Audi A7" className="car-photo" />
        <h3 className="car-title">Audi A7</h3>
        <p className="car-description">A brief description of the car, such as make, model, and features.</p>
      </div>
      
      <div className="car-card">
        <img src="images/Luxury/4.jpg" alt="Bentley Flying Spur" className="car-photo" />
        <h3 className="car-title">Bentley Flying Spur</h3>
        <p className="car-description">A brief description of the car, such as make, model, and features.</p>
      </div>
      
      <div className="car-card">
        <img src="images/Luxury/5.jpg" alt="Rolls Royce Phantom" className="car-photo" />
        <h3 className="car-title">Rolls Royce Phantom</h3>
        <p className="car-description">A brief description of the car, such as make, model, and features.</p>
      </div>
    </div>
  );
};

export default LuxuryPage;
