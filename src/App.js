import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Numpad from './components/Numpad/Numpad';
import Other from './components/OtherComponent/OtherComponent';
import RandomThemer from './components/RandomThemer/RandomThemer';
import { Router } from '@reach/router';

const App = () => {
  return (
    <>
      <Navbar />
      <Router>
        <Home path="/" />
        <Numpad path="/numpad" />
        <Other path="/other" />
        <RandomThemer path="randomthemer" />
      </Router>
    </>
  );
};

export default App;
