import React from "react";
import { Link } from "react-router-dom";

const Luxury = () => {
  const luxuryCars = [
    { id: 1, name: "Mercedes Benz S-Class", image: "/images/luxury/1.jpg", description: "Price Per Day: $450" },
    { id: 2, name: "BMW 7 Series", image: "/images/luxury/2.jpg", description: "Price Per Day: $425" },
    { id: 3, name: "Audi A7", image: "/images/luxury/3.jpg", description: "Price Per Day: $425" },
    { id: 4, name: "Bentley Flying Spur", image: "/images/luxury/4.jpg", description: "Price Per Day: $600" },
    { id: 5, name: "Rolls Royce Wraith", image: "/images/luxury/5.jpg", description: "Price Per Day: $700" },
    { id: 6, name: "Bentley Bentayga", image: "/images/luxury/6.jpg", description: "Price Per Day: $550" },
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
        <h1>Luxury Fleet</h1>
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
