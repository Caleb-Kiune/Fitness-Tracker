import React, { useState } from 'react';


const Report = () => {
  const [workouts, ] = useState([
    { date: '2024-11-12', activity: 'Push Up', sets: 4, reps: 12 },
    { date: '2024-11-13', activity: 'Pull Up', sets: 4, reps: 10 },
    { date: '2024-11-14', activity: 'Squat', sets: 5, reps: 15 },
  ]);

  return (
    <div className="report">
      <h1>My Reports</h1>
      <div className="report-summary">
        <h2>Workout Summary</h2>
        <ul>
          {workouts.map((workout, index) => (
            <li key={index} className="report-item">
              <span>{workout.date}</span> - {workout.activity}: {workout.sets} sets x {workout.reps} reps
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Report;
