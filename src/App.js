import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './Components/Navigation';
import Workouts from './Components/Workouts';
import Details from './Components/Details';
import Profile from './Components/Profile';
import CustomWorkouts from './Components/CustomWorkouts';
import Report from './Components/Report';
import Home from './Components/Home';
import './App.css';

function App() {
  const [workouts, setWorkouts] = useState([]);

  const addWorkout = (newWorkout) => {
    setWorkouts([...workouts, newWorkout]);
  };

  return (
    <Router>
      <Navigation />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-workout" element={<CustomWorkouts addWorkout={addWorkout} />} />
          <Route path="/details" element={<Details />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/report" element={<Report />} />
          <Route path="/workouts" element={<Workouts workouts={workouts} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
