import React from 'react';
import { Link } from 'react-router-dom';
import './Fleet.css';

const Fleet = () => {
  return (
    <div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/fleet">Fleet</Link>
        <Link to="/reserve">Reserve</Link>
        <Link to="/help">Help</Link>
      </div>

      <br /><br /><br /><br />

      <div className="fleetDesc">
        <h1>Browse our vast fleet</h1>
        <h4>and don't get <i>too</i> carried away...</h4>
      </div>

      <img src="/images/arrow.png" className="arrow" alt="Arrow" />

      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

      <div className="luxury">
        <img src="/images/13.jpg" alt="Luxury Car" />
        <div className="luxtext">
          <h3>Luxury</h3>
          <p>Discover the pinnacle of comfort and style with our luxury car rental service.
            Select from an exclusive range of high-end vehicles, crafted for those who value
            sophistication and performance, ensuring every drive is an unforgettable experience.
          </p>
          <Link to="/luxury" className="glow-button">Browse Luxury</Link>
        </div>
      </div>

      <div className="sports">
        <div className="sportstext">
          <h3>Sports</h3>
          <p>Experience unmatched power, precision, and luxury with our exclusive collection
            of high-end sports cars. From sleek, iconic designs to adrenaline-inducing performance,
            our sports cars deliver an exhilarating drive perfect for any enthusiast looking to make
            a statement on the road.
          </p>
          <Link to="/sports" className="glow-button-sports">Browse Sports</Link>
        </div>
        <img src="/images/14.png" alt="Sports Car" />
      </div>

      <div className="XL">
        <img src="/images/18.jpg" alt="XL Car" />
        <div className="XLtext">
          <h3>XL</h3>
          <p>Discover spacious comfort and premium features with our XL rental selection, designed
            for those who need extra room without compromising on style. Ideal for family trips or
            group outings, our XL vehicles combine luxury with ample space to ensure a smooth, relaxing
            journey for everyone on board.
          </p>
          <Link to="/xl" className="glow-button-XL">Browse XL</Link>
        </div>
      </div>

      <div className="sportsClassics">
        <div className="sportsCtext">
          <h3>Sports Classics</h3>
          <p>Embrace timeless elegance with our Sports Classics collection, where vintage design meets
            refined performance. Perfect for those who appreciate the beauty and charm of classic automotive icons.
          </p>
          <Link to="/sports-classics" className="glow-button-sportsC">Browse Sports Classics</Link>
        </div>
        <img src="/images/21.jpg" alt="Sports Classic Car" />
      </div>
    </div>
  );
};

export default Fleet;
