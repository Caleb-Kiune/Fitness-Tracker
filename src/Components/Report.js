import React, { useEffect, useState } from 'react';

const Report = () => {
  const [workouts, setWorkouts] = useState([]);
  const [completedWorkouts, setCompletedWorkouts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/workouts')
      .then(response => response.json())
      .then(data => {
        console.log("Fetched workouts:", data); // Debug log
        setWorkouts(data);
        const completed = data.filter(workout => workout.completed);
        console.log("Completed workouts:", completed); // Debug log
        setCompletedWorkouts(completed);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="report">
      <h1>My Reports</h1>
      <div className="report-summary">
        <h2>Completed Workouts</h2>
        {completedWorkouts.length > 0 ? (
          <ul>
            {completedWorkouts.map((workout, index) => (
              <li key={index} className="report-item">
                <span>{workout.date || 'N/A'}</span> - {workout.name}: {workout.sets} sets x {workout.reps} reps, {workout.weight} kg
              </li>
            ))}
          </ul>
        ) : (
          <p>No completed workouts yet.</p>
        )}
      </div>
    </div>
  );
};

export default Report;
