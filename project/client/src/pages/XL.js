import React from 'react';
import { Link } from 'react-router-dom';
import './LuxuryStyle.css'; // Ensure this path is correct for your project

const XLPage = () => {
  return (
    <div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/fleet">Fleet</Link>
        <Link to="#">Reserve</Link>
        <Link to="/help">Help</Link>
      </div>

      <div className="car-card">
        <img src="images/XL/1.jpg" alt="Mercedes-Benz G Class" className="car-photo" />
        <h3 className="car-title">Mercedes-Benz G Class</h3>
        <p className="car-description">A brief description of the car, such as make, model, and features.</p>
      </div>

      <div className="car-card">
        <img src="images/XL/2.jpg" alt="BMW X6M" className="car-photo" />
        <h3 className="car-title">BMW X6M</h3>
        <p className="car-description">A brief description of the car, such as make, model, and features.</p>
      </div>

      <div className="car-card">
        <img src="images/XL/3.jpg" alt="Lamborghini Urus" className="car-photo" />
        <h3 className="car-title">Lamborghini Urus</h3>
        <p className="car-description">A brief description of the car, such as make, model, and features.</p>
      </div>

      <div className="car-card">
        <img src="images/XL/4.jpg" alt="Audi RS Q8" className="car-photo" />
        <h3 className="car-title">Audi RS Q8</h3>
        <p className="car-description">A brief description of the car, such as make, model, and features.</p>
      </div>

      <div className="car-card">
        <img src="images/XL/5.jpg" alt="Cadillac Escalade V" className="car-photo" />
        <h3 className="car-title">Cadillac Escalade V</h3>
        <p className="car-description">A brief description of the car, such as make, model, and features.</p>
      </div>
    </div>
  );
};

export default XLPage;
