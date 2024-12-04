import React from 'react';
import { Link } from 'react-router-dom';
import './LuxuryStyle.css'; // Ensure this path is correct for your project

const SportsClassicsPage = () => {
  return (
    <div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/fleet">Fleet</Link>
        <Link to="#">Reserve</Link>
        <Link to="/help">Help</Link>
      </div>

      <div className="car-card">
        <img src="images/SportsClassics/1.jpg" alt="Ferrari F40" className="car-photo" />
        <h3 className="car-title">Ferrari F40</h3>
        <p className="car-description">A brief description of the car, such as make, model, and features.</p>
      </div>

      <div className="car-card">
        <img src="images/SportsClassics/2.jpg" alt="Lamborghini Countach" className="car-photo" />
        <h3 className="car-title">Lamborghini Countach</h3>
        <p className="car-description">A brief description of the car, such as make, model, and features.</p>
      </div>

      <div className="car-card">
        <img src="images/SportsClassics/3.jpg" alt="Dodge Viper" className="car-photo" />
        <h3 className="car-title">Dodge Viper</h3>
        <p className="car-description">A brief description of the car, such as make, model, and features.</p>
      </div>

      <div className="car-card">
        <img src="images/SportsClassics/4.jpg" alt="McLaren F1" className="car-photo" />
        <h3 className="car-title">McLaren F1</h3>
        <p className="car-description">A brief description of the car, such as make, model, and features.</p>
      </div>

      <div className="car-card">
        <img src="images/SportsClassics/5.jpg" alt="Porsche 911" className="car-photo" />
        <h3 className="car-title">Porsche 911</h3>
        <p className="car-description">A brief description of the car, such as make, model, and features.</p>
      </div>
    </div>
  );
};

export default SportsClassicsPage;
