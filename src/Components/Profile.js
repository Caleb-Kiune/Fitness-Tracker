import React, { useState } from 'react';


function Profile() {
  const [user, setUser] = useState({
    name: 'Caleb Kiune',
    age: 25,
    gender: 'Male',
    currentWeight: 70, 
    targetWeight: 65, 
    height: 175, 
    email: 'ck.@gmail.com',
    profilePicture: 'https://via.placeholder.com/150'
  });

  const [editing, setEditing] = useState(false);
  const [updatedUser, setUpdatedUser] = useState(user);

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = () => {
    setUser(updatedUser);
    setEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedUser({
      ...updatedUser,
      [name]: value
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUpdatedUser({
          ...updatedUser,
          profilePicture: reader.result
        });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="profile">
      <h2>Profile</h2>
      <img src={user.profilePicture} alt="Profile" />
      {editing ? (
        <div className="profile-edit-card">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={updatedUser.name}
            onChange={handleChange}
          />
          <input
            type="number"
            name="age"
            placeholder="Age"
            value={updatedUser.age}
            onChange={handleChange}
          />
          <input
            type="text"
            name="gender"
            placeholder="Gender"
            value={updatedUser.gender}
            onChange={handleChange}
          />
          <input
            type="number"
            name="currentWeight"
            placeholder="Current Weight (kg)"
            value={updatedUser.currentWeight}
            onChange={handleChange}
          />
          <input
            type="number"
            name="targetWeight"
            placeholder="Target Weight (kg)"
            value={updatedUser.targetWeight}
            onChange={handleChange}
          />
          <input
            type="number"
            name="height"
            placeholder="Height (cm)"
            value={updatedUser.height}
            onChange={handleChange}
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
          />
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div>
          <p>Name: {user.name}</p>
          <p>Age: {user.age}</p>
          <p>Gender: {user.gender}</p>
          <p>Current Weight: {user.currentWeight} kg</p>
          <p>Target Weight: {user.targetWeight} kg</p>
          <p>Height: {user.height} cm</p>
          <button onClick={handleEdit}>Edit Profile</button>
        </div>
      )}
    </div>
  );
}

export default Profile;
