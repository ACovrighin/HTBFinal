import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Fleet from './pages/Fleet';
import Luxury from './pages/Luxury';
import Sports from './pages/Sports';
import SportsClassics from './pages/SportsClassics';
import XL from './pages/XL';
import Help from './pages/Help';



const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/fleet" element={<Fleet />} />
      <Route path="/luxury" element ={<Luxury />} />
      <Route path="/sports" element ={<Sports />} />
      <Route path="/sports-classics" element ={<SportsClassics />} />
      <Route path="/XL" element ={<XL />} />
      <Route path="/Help" element ={<Help />} />
    </Routes>
  </Router>
);

export default App;
