import React, { useState } from 'react';

function CustomWorkouts({ addWorkout }) {
  const [name, setName] = useState('');
  const [sets, setSets] = useState('');
  const [reps, setReps] = useState('');
  const [weight, setWeight] = useState('');
  const [category, setCategory] = useState('Chest');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !sets || !reps || !weight) {
      setError('Please fill in all fields');
      setSuccess('');
      return;
    }
    if (sets <= 0 || reps <= 0 || weight <= 0) {
      setError('Sets, reps, and weight must be positive numbers');
      setSuccess('');
      return;
    }
    const newWorkout = { name, sets, reps, weight, category, completed: false };
    addWorkout(newWorkout);  // Calls addWorkout to update the state in App.js
    setName('');
    setSets('');
    setReps('');
    setWeight('');
    setCategory('Chest');
    setError('');
    setSuccess('Workout added!');
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="custom-workouts-form">
        <h2>Add Custom Workout</h2>
        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}
        <div className="form-row">
          <input 
            type="text" 
            placeholder="Workout Name" 
            value={name} 
            onChange={e => setName(e.target.value)} 
          />
          <input 
            type="number" 
            placeholder="Sets" 
            value={sets} 
            onChange={e => setSets(e.target.value)} 
          />
          <input 
            type="number" 
            placeholder="Reps" 
            value={reps} 
            onChange={e => setReps(e.target.value)} 
          />
          <input 
            type="number" 
            placeholder="Weight" 
            value={weight} 
            onChange={e => setWeight(e.target.value)} 
          />
          <select value={category} onChange={e => setCategory(e.target.value)}>
            <option value="Chest">Chest</option>
            <option value="Back">Back</option>
            <option value="Legs">Legs</option>
            <option value="Arms">Arms</option>
            <option value="Shoulders">Shoulders</option>
          </select>
        </div>
        <button type="submit">Add Workout</button>
      </form>
    </div>
  );
}

export default CustomWorkouts;
