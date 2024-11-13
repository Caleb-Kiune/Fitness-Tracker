import React, { useState } from 'react';
import '../App.css';  // Ensure your CSS includes styles for the cards

function CustomWorkouts({ addWorkout }) {
  const [workout, setWorkout] = useState({
    name: '',
    sets: '',
    reps: '',
    weight: '',
    category: 'Chest',
    day: 'Monday'
  });
  const [workoutList, setWorkoutList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);

  const handleChange = (e) => {
    setWorkout({
      ...workout,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, sets, reps, weight } = workout;

    if (!name || !sets || !reps || !weight) {
      alert('Please fill in all fields');
      return;
    }

    let updatedList;
    if (isEditing) {
      updatedList = workoutList.map((item, index) =>
        index === editingIndex ? { ...workout } : item
      );
      setIsEditing(false);
      setEditingIndex(null);
    } else {
      const newWorkout = { ...workout, completed: false };
      addWorkout(newWorkout);
      updatedList = [...workoutList, newWorkout];
    }

    setWorkoutList(updatedList);
    localStorage.setItem('workoutList', JSON.stringify(updatedList)); // Save to local storage

    setWorkout({ name: '', sets: '', reps: '', weight: '', category: 'Chest', day: 'Monday' });
  };

  const handleEdit = (index) => {
    setWorkout(workoutList[index]);
    setIsEditing(true);
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    const updatedList = workoutList.filter((_, i) => i !== index);
    setWorkoutList(updatedList);
    localStorage.setItem('workoutList', JSON.stringify(updatedList)); // Save to local storage
  };

  const toggleComplete = (index) => {
    const updatedList = workoutList.map((workout, i) => 
      i === index ? { ...workout, completed: !workout.completed } : workout
    );
    setWorkoutList(updatedList);
    localStorage.setItem('workoutList', JSON.stringify(updatedList)); // Save to local storage
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="custom-workouts-form">
        <h2>{isEditing ? 'Edit Workout' : 'Add Custom Workout'}</h2>
        <div className="form-row">
          <input
            type="text"
            name="name"
            placeholder="Workout Name"
            value={workout.name}
            onChange={handleChange}
          />
          <input
            type="number"
            name="sets"
            placeholder="Sets"
            value={workout.sets}
            onChange={handleChange}
          />
          <input
            type="number"
            name="reps"
            placeholder="Reps"
            value={workout.reps}
            onChange={handleChange}
          />
          <input
            type="number"
            name="weight"
            placeholder="Weight"
            value={workout.weight}
            onChange={handleChange}
          />
          <select name="category" value={workout.category} onChange={handleChange}>
            <option value="Chest">Chest</option>
            <option value="Back">Back</option>
            <option value="Legs">Legs</option>
            <option value="Arms">Arms</option>
            <option value="Shoulders">Shoulders</option>
          </select>
          <select name="day" value={workout.day} onChange={handleChange}>
            <option value="Monday">Monday</option>
            <option value="Tuesday">Tuesday</option>
            <option value="Wednesday">Wednesday</option>
            <option value="Thursday">Thursday</option>
            <option value="Friday">Friday</option>
            <option value="Saturday">Saturday</option>
            <option value="Sunday">Sunday</option>
          </select>
        </div>
        <button type="submit">{isEditing ? 'Save Changes' : 'Add Workout'}</button>
      </form>

      <div className="workout-list">
        <h3>Workouts</h3>
        {workoutList.map((workout, index) => (
          <div key={index} className={`workout-card ${workout.completed ? 'completed' : ''}`}>
            <h4>{workout.name}</h4>
            <p>Sets: {workout.sets}</p>
            <p>Reps: {workout.reps}</p>
            <p>Weight: {workout.weight} kg</p>
            <p>Category: {workout.category}</p>
            <p>Day: {workout.day}</p>
            <button onClick={() => toggleComplete(index)}>
              {workout.completed ? 'Mark as Incomplete' : 'Mark as Complete'}
            </button>
            <button onClick={() => handleEdit(index)}>Edit</button>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CustomWorkouts;
