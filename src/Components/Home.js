import React from 'react';

function Home() {
  return (
    <div className="home">
      <h1>Welcome to Fitness Tracker</h1>
      <p>Your journey to fitness starts here!</p>
      <div className="quick-links">
        <h2>Quick Links</h2>
        <ul>
          <li><a href="/workouts">View Workouts</a></li>
          <li><a href="/add-workout">Add a Workout</a></li>
          <li><a href="/profile">Your Profile</a></li>
        </ul>
      </div>
      <div className="overview">
        <h2>Overview</h2>
        <p>Recent Workouts: 5</p>
        <p>Total Reps: 120</p>
        <p>Achievements: 3</p>
      </div>
      <div className="motivational-quote">
        <h2>Stay Motivated</h2>
        <p>"The only bad workout is the one that didn’t happen."</p>
      </div>
    </div>
  );
}

export default Home;
