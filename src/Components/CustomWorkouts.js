import React, { useState } from 'react';

function CustomWorkouts() {
  const [name, setName] = useState('');
  const [sets, setSets] = useState('');
  const [reps, setReps] = useState('');
  const [category, setCategory] = useState('Chest');
  const [error, setError] = useState('');
  const [workouts, setWorkouts] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !sets || !reps) {
      setError('Please fill in all fields');
      return;
    }
    const newWorkout = { name, sets, reps, category };
    setWorkouts([...workouts, newWorkout]);
    setName('');
    setSets('');
    setReps('');
    setCategory('Chest');
    setError('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="custom-workouts-form">
        <h2>Add Custom Workout</h2>
        {error && <p className="error">{error}</p>}
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
        <select value={category} onChange={e => setCategory(e.target.value)}>
          <option value="Chest">Chest</option>
          <option value="Back">Back</option>
          <option value="Legs">Legs</option>
          <option value="Arms">Arms</option>
          <option value="Shoulders">Shoulders</option>
        </select>
        <button type="submit">Add Workout</button>
      </form>
      <div className="workout-cards">
        {workouts.map((workout, index) => (
          <div key={index} className="workout-card">
            <h3>{workout.category}</h3>
            <p>{workout.name}</p>
            <p>{workout.sets} Sets x {workout.reps} Reps</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CustomWorkouts;
