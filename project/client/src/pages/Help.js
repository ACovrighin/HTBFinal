import React from 'react';
import { Link } from 'react-router-dom';
import './HelpStyle.css'; // Ensure this path is correct for your project

const HelpPage = () => {
  return (
    <div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/fleet">Fleet</Link>
        <Link to="/reserve">Reserve</Link>
        <Link to="/help">Help</Link>
      </div>
      <br />
      <br />
      <h1>Sh*t Happens</h1>
      <img className="tow" src="images/20.png" alt="Tow Truck" />
      <h1>We'll Be There To Help</h1>
      <img src="images/arrow.png" className="arrow" alt="Arrow" />
      <p className="HelpDesc">
        We all make mistakes. Whether it's your fault or that other a-hole, you don't have to worry. You can always trust HTB to handle
        all of our prized customers' concerns regarding our rentals. Now while we <b><i>can't</i></b> guarantee that you'll be walking
        away scot-free (probably should have read that contract before signing), we <b><i>can</i></b> guarantee that we will stick
        to every promise we made in the contract (by now you probably realize that you've messed up).
        <br />
        <br />
        Only the best when it comes to customer service!
        <br />
        <img src="images/arrow.png" className="arrow2" alt="Arrow" />
        <br />
        <h2>
          You Can Contact Us Here: <br />
          <br />
          647-380-1300 <br />
          <br />
          HTBnotGonnaAnswer@gmail.com
        </h2>
      </p>
    </div>
  );
};

export default HelpPage;
