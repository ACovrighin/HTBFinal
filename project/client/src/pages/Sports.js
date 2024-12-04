import React from 'react';
import { Link } from 'react-router-dom';
import './LuxuryStyle.css'; 

const SportsPage = () => {
  return (
    <div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/fleet">Fleet</Link>
        <Link to="#">Reserve</Link>
        <Link to="/help">Help</Link>
      </div>

      <div className="car-card">
        <img src="/images/Sports/1.jpg" alt="Car Image" className="car-photo" />
        <h3 className="car-title">Ferrari La Ferrari</h3>
        <p className="car-description">A brief description of the car, such as make, model, and features.</p>
      </div>

      <div className="car-card">
        <img src="/images/Sports/2.jpg" alt="Car Image" className="car-photo" />
        <h3 className="car-title">BMW E93 M3</h3>
        <p className="car-description">A brief description of the car, such as make, model, and features.</p>
      </div>

      <div className="car-card">
        <img src="/images/Sports/3.jpg" alt="Car Image" className="car-photo" />
        <h3 className="car-title">Lexus LFA</h3>
        <p className="car-description">A brief description of the car, such as make, model, and features.</p>
      </div>

      <div className="car-card">
        <img src="/images/Sports/4.jpg" alt="Car Image" className="car-photo" />
        <h3 className="car-title">Lamborghini Aventador SVJ</h3>
        <p className="car-description">A brief description of the car, such as make, model, and features.</p>
      </div>

      <div className="car-card">
        <img src="/images/Sports/5.jpg" alt="Car Image" className="car-photo" />
        <h3 className="car-title">Bugatti Veyron Super Sport</h3>
        <p className="car-description">A brief description of the car, such as make, model, and features.</p>
      </div>
    </div>
  );
};

export default SportsPage;
