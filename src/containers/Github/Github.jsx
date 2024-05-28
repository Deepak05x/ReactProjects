import React, { useState } from 'react';
import './Github.css';
import axios from 'axios';

const Github = ({ url }) => {
  const [error, setError] = useState('');
  const [username, setUsername] = useState('');
  const [profile, setProfile] = useState(null);

  const fetchProfile = async () => {
    try {
      const response = await axios.get(`${url}/${username}`);
      const data = response.data;
      setProfile(data);
      setError('');
    } catch (e) {
      setError('User Not Found / API Limit Exceeded');
      setProfile(null);
    }
  };

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username) fetchProfile();
  };

  return (
    <div className='react__github'>
      <h1>GitHub Profile Finder</h1>
      <form className='react__github-form' onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChange}
          value={username}
        />
        <button type="submit">Search</button>
      </form>
      {error && <h1 style={{ color: 'red' }}>{error}</h1>}
      {profile && (
        <div className='react__github-container'>
          <h1> {profile.name}</h1>
          <h2> {profile.bio}</h2>
          <img src={profile.avatar_url} alt={profile.name} width="100" />
          <a href={profile.html_url} target="_blank" rel="noopener noreferrer">
            View Profile on GitHub
          </a>
        </div>
      )}
    </div>
  );
};

export default Github;