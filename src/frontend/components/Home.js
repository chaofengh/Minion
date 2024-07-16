import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import AllMeetings from './AllMeetings';

const Home = () => {
  return (
    <div className='home'>
      <h1 className='title'>Boss Machine</h1>
      <div className='icon-container'>
        <Link to='/minions' className='icon'>
          <div className='icon-image' id='minions-icon'></div>
          <span>Minions</span>
        </Link>
        <Link to='/ideas' className='icon'>
          <div className='icon-image' id='ideas-icon'></div>
          <span>MILLION Dollar Ideas</span>
        </Link>
      </div>
      <AllMeetings />
    </div>
  );
};

export default Home;
