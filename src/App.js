import React, { useState, useEffect } from 'react';
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

  useEffect(() => {
    fetch('http://localhost:3001/workouts')
      .then(response => response.json())
      .then(data => setWorkouts(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const addWorkout = (newWorkout) => {
    console.log('Adding workout:', newWorkout);
    fetch('http://localhost:3001/workouts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newWorkout)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log('Workout added:', data);
      setWorkouts(prevWorkouts => {
        const updatedWorkouts = [...prevWorkouts, data];
        console.log('Updated workouts:', updatedWorkouts);
        return updatedWorkouts;
      });
    })
    .catch(error => console.error('Error adding data:', error));
  };

  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
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
