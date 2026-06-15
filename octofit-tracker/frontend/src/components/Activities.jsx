import React, { useState, useEffect } from 'react';
import { getApiUrl, normalizeCollection } from '../api.js';

const Activities = () => {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const response = await fetch(getApiUrl('activities'));
        const data = await response.json();
        setActivities(normalizeCollection(data));
      } catch (error) {
        console.error('Error fetching activities:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchActivities();
  }, []);

  if (loading) {
    return <div>Loading activities...</div>;
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Activities</h2>
      {activities.length === 0 ? (
        <p>No activities found.</p>
      ) : (
        <ul>
          {activities.map((activity) => (
            <li key={activity._id}>{activity.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Activities;
