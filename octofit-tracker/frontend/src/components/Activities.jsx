import React, { useState, useEffect } from 'react';

const Activities = () => {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const response = await fetch('-8000.app.github.dev/api/activities');
        const data = await response.json();
        setActivities(data);
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
          {activities.map((activity, index) => (
            <li key={index}>{activity.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Activities;
