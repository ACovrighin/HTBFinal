import React from "react";
import { Link } from "react-router-dom";

const Luxury = () => {
  const luxuryCars = [
    { id: 1, name: "Mercedes Benz AMG G63", image: "/images/XL/1.jpg", description: "Price Per Day: $550" },
    { id: 2, name: "BMW X6M", image: "/images/XL/2.jpg", description: "Price Per Day: $500" },
    { id: 3, name: "Lamborghini Urus", image: "/images/XL/3.jpg", description: "Price Per Day: $1100" },
    { id: 4, name: "Rolls Royce Cullinan", image: "/images/XL/4.jpg", description: "Price Per Day: $1300" },
    { id: 5, name: "Cadillac Escalade", image: "/images/XL/5.jpg", description: "Price Per Day: $600" },
    { id: 6, name: "Mercedes Benz AMG GLS 600", image: "/images/XL/6.jpg", description: "Price Per Day: $550" },
  ];

  return (
    <div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/fleet">Fleet</Link>
        <Link to="/reserve">Reserve</Link>
        <Link to="/help">Help</Link>
      </div>
      <div className="fleetDesc">
        <h1>XL Fleet</h1>
      </div>
      <div className="car-grid">
        {luxuryCars.map((car) => (
          <div className="car-card" key={car.id}>
            <img src={car.image} alt={car.name} className="car-photo" />
            <h2 className="car-title">{car.name}</h2>
            <p className="car-description">{car.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Luxury;
