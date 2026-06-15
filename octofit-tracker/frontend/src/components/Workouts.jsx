import React, { useState, useEffect } from 'react';
import { getApiUrl, normalizeCollection } from '../api.js';

const Workouts = () => {
  const [workouts, setWorkouts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const response = await fetch(getApiUrl('workouts'));
        const data = await response.json();
        setWorkouts(normalizeCollection(data));
      } catch (error) {
        console.error('Error fetching workouts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchWorkouts();
  }, []);

  if (loading) {
    return <div>Loading workouts...</div>;
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Workouts</h2>
      {workouts.length === 0 ? (
        <p>No workouts found.</p>
      ) : (
        <ul>
          {workouts.map((workout) => (
            <li key={workout._id}>
              {workout.durationMinutes} minutes of {workout.activity?.name || workout.activity}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Workouts;
