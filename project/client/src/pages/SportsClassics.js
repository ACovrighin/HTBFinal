import React from 'react';
import { Link } from 'react-router-dom';
import './LuxuryStyle.css'; // Ensure this path is correct for your project

const SportsClassicsPage = () => {
  const luxuryCars = [
    { id: 1, name: "Ferrari F40", image: "/images/sportsClassics/1.jpg", description: "Price Per Day: $3000" },
    { id: 2, name: "Lamborghini Countach", image: "/images/sportsClassics/2.jpg", description: "Price Per Day: $2100" },
    { id: 3, name: "Dodge Viper", image: "/images/sportsClassics/3.jpg", description: "Price Per Day: $800" },
    { id: 4, name: "McLaren F1", image: "/images/sportsClassics/4.jpg", description: "Price Per Day: $3900" },
    { id: 5, name: "Porsche 911", image: "/images/sportsClassics/5.jpg", description: "Price Per Day: $900" },
    { id: 6, name: "Mercedes Benz 300E", image: "/images/sportsClassics/6.jpg", description: "Price Per Day: $1000" },
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
      <h1>Sports Classics Fleet</h1>
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

export default SportsClassicsPage;
