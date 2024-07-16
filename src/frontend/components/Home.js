import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className='home'>
      <h1>Boss Machine</h1>
      <div className='icon-container'>
        <Link to='/minions' className='icon'>
          <span>Minions.exe</span>
        </Link>
        <Link to='/ideas' className='icon'>
          <span>Million $ Ideas.exe</span>
        </Link>
        <Link to='/meetings' className='icon'>
          <span>Meetings.exe</span>
        </Link>
      </div>
    </div>
  );
};

export default Home;
