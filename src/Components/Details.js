import React, { useState } from 'react';
import '../App.css'; // Ensure the correct relative path to App.css

function Details() {
  const [searchTerm, setSearchTerm] = useState('');
  const [exercises, setExercises] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    setIsLoading(true);
    fetch(`https://api.algobook.info/v1/gym/exercises/${searchTerm}`)
      .then(response => response.json())
      .then(data => {
        setExercises(data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      });
  };

  return (
    <div>
      <h2>Exercises</h2>
      <div className="search-form">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search exercises"
          className="search-input"
        />
        <button onClick={handleSearch} className="search-button">Search</button>
      </div>

      {isLoading && <p>Loading...</p>}

      <div className="exercise-list">
        {exercises.map((exercise, index) => (
          <div key={index} className="exercise-item">
            <p>
              {exercise.name} - {exercise.muscle} 
              <a href={exercise.infoLink} target="_blank" rel="noopener noreferrer">Details</a>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Details;
