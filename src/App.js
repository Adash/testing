import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Numpad from './components/Numpad/Numpad';
import ToDo from './components/ToDoComponent/ToDoComponent';
import RandomThemer from './components/RandomThemer/RandomThemer';
import Timer from './components/Timer/Timer';
import { Router } from '@reach/router';
import 'bootstrap/dist/css/bootstrap.css';
const App = () => {
  return (
    <>
      <Navbar />
      <Router>
        <Home path="/" />
        <Numpad path="/numpad" />
        <ToDo path="/todo" />
        <RandomThemer path="/randomthemer" />
        <Timer path="/timer" />
      </Router>
    </>
  );
};

export default App;
