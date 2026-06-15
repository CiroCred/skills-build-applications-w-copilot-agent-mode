import React, { useState, useEffect } from 'react';
import { getApiUrl, normalizeCollection } from '../api.js';

const Teams = () => {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await fetch(getApiUrl('teams'));
        const data = await response.json();
        setTeams(normalizeCollection(data));
      } catch (error) {
        console.error('Error fetching teams:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTeams();
  }, []);

  if (loading) {
    return <div>Loading teams...</div>;
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Teams</h2>
      {teams.length === 0 ? (
        <p>No teams found.</p>
      ) : (
        <ul>
          {teams.map((team) => (
            <li key={team._id}>{team.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Teams;
