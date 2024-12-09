import React from "react";
import { Link } from "react-router-dom";

const Luxury = () => {
  const luxuryCars = [
    { id: 1, name: "Ferrari LaFerrari", image: "/images/sports/1.jpg", description: "Price Per Day: $2500" },
    { id: 2, name: "BMW E93 M3", image: "/images/sports/2.jpg", description: "Price Per Day: $500" },
    { id: 3, name: "Lexus LFA", image: "/images/sports/3.jpg", description: "Price Per Day: $1900" },
    { id: 4, name: "Lamborghini Aventador", image: "/images/sports/4.jpg", description: "Price Per Day: $1300" },
    { id: 5, name: "Audi R8", image: "/images/sports/5.jpg", description: "Price Per Day: $1000" },
    { id: 6, name: "Mercedes Benz AMG C63", image: "/images/sports/6.jpg", description: "Price Per Day: $550" },
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
        <h1>Sports Fleet</h1>
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
