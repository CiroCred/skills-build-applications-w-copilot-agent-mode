import React, { useState, useEffect } from 'react';
import { getApiUrl, normalizeCollection } from '../api.js';

const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const response = await fetch(getApiUrl('leaderboard'));
        const data = await response.json();
        setLeaderboard(normalizeCollection(data));
      } catch (error) {
        console.error('Error fetching leaderboard:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchLeaderboard();
  }, []);

  if (loading) {
    return <div>Loading leaderboard...</div>;
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Leaderboard</h2>
      {leaderboard.length === 0 ? (
        <p>No leaderboard data available.</p>
      ) : (
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ border: '1px solid #ddd', padding: '0.5rem' }}>Rank</th>
              <th style={{ border: '1px solid #ddd', padding: '0.5rem' }}>User</th>
              <th style={{ border: '1px solid #ddd', padding: '0.5rem' }}>Score</th>
            </tr>
          </thead>
          <tbody>
            {leaderboard.map((entry, index) => (
              <tr key={entry._id || index}>
                <td style={{ border: '1px solid #ddd', padding: '0.5rem' }}>{index + 1}</td>
                <td style={{ border: '1px solid #ddd', padding: '0.5rem' }}>{entry.user?.name || entry.user}</td>
                <td style={{ border: '1px solid #ddd', padding: '0.5rem' }}>{entry.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Leaderboard;
