import React from 'react';

const workoutData = {
  "Chest": [
    { name: "Bench Press", sets: 4, reps: "8-12" },
    { name: "Incline Bench Press", sets: 4, reps: "8-12" },
    { name: "Chest Fly", sets: 4, reps: "8-12" },
    { name: "Push-Up", sets: 4, reps: "8-12" }
  ],
  "Back": [
    { name: "Deadlift", sets: 4, reps: "8-12" },
    { name: "Pull-Up", sets: 4, reps: "8-12" },
    { name: "Bent Over Row", sets: 4, reps: "8-12" },
    { name: "Lat Pulldown", sets: 4, reps: "8-12" }
  ],
  "Legs": [
    { name: "Squat", sets: 4, reps: "8-12" },
    { name: "Leg Press", sets: 4, reps: "8-12" },
    { name: "Lunges", sets: 4, reps: "8-12" },
    { name: "Leg Curl", sets: 4, reps: "8-12" }
  ],
  "Arms": [
    { name: "Bicep Curl", sets: 4, reps: "8-12" },
    { name: "Tricep Extension", sets: 4, reps: "8-12" },
    { name: "Hammer Curl", sets: 4, reps: "8-12" },
    { name: "Tricep Dip", sets: 4, reps: "8-12" }
  ],
  "Shoulders": [
    { name: "Shoulder Press", sets: 4, reps: "8-12" },
    { name: "Lateral Raise", sets: 4, reps: "8-12" },
    { name: "Front Raise", sets: 4, reps: "8-12" },
    { name: "Shrugs", sets: 4, reps: "8-12" }
  ]
};

function Workouts() {
  return (
    <div className="workouts">
      <h2>Workouts by Muscle Group</h2>
      <div className="workout-cards">
        {Object.entries(workoutData).map(([muscleGroup, exercises]) => (
          <div key={muscleGroup} className="workout-card">
            <h3>{muscleGroup}</h3>
            <ul>
              {exercises.map((exercise, index) => (
                <li key={index}>
                  {exercise.name} ({exercise.sets} Sets x {exercise.reps} Reps)
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Workouts;
