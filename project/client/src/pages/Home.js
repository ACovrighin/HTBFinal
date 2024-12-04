import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div>
      <div className="typewriter">
        <div>
          <p>Welcome to HTB Luxury Rentals</p>
        </div>
      </div>

      <div id="image-track" data-mouse-down-at="0" data-prev-percentage="0">
        <img className="image" src="/images/6.jpg" alt="Car 6" draggable="false" />
        <img className="image" src="/images/3.jpg" alt="Car 3" draggable="false" />
        <img className="image" src="/images/2.jpg" alt="Car 2" draggable="false" />
        <img className="image" src="/images/1.jpg" alt="Car 1" draggable="false" />
        <img className="image" src="/images/9.jpg" alt="Car 9" draggable="false" />
        <img className="image" src="/images/10.jpg" alt="Car 10" draggable="false" />
        <img className="image" src="/images/7.jpg" alt="Car 7" draggable="false" />
        <img className="image" src="/images/8.jpg" alt="Car 8" draggable="false" />
      </div>



      <div className="desc">
        <h3>What We're About</h3>
        <p>
          Need a rental car that <i>isn't</i> a Nissan Altima? <br />
          Does the sheer thought of a Toyota Prius send shivers down your spine? <br />
          Planning on using a rental car for an illicit activity?
          <br />
          <br />
          Then we've got exactly what you need!
          <br />
          Browse our website and find the vehicle best suited for your needs.
        </p>
      </div>

      <div className="links">
        <a href="/">Home</a>
        <a href="/fleet">Fleet</a>
        <a href="/reserve">Reserve</a>
        <a href="/help">Help</a>
      </div>
    </div>
  );
};

export default Home;
