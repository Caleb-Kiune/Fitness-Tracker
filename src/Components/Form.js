import React, { useState } from 'react';

function Form() {
  const [name, setName] = useState('');
  const [reps, setReps] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Workout Name" 
        value={name} 
        onChange={e => setName(e.target.value)} 
      />
      <input 
        type="number" 
        placeholder="Reps" 
        value={reps} 
        onChange={e => setReps(e.target.value)} 
      />
      <button type="submit">Add Workout</button>
    </form>
  );
}

export default Form;
