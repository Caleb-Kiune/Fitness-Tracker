import React, { useState } from 'react';

function Details() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
   
    console.log('Searching for:', searchTerm);
  };

  return (
    <div>
      <h2>Exercises</h2>

      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Search exercises"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default Details;
