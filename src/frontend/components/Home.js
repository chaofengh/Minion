import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = ()=>{
    return(
        <div className = 'home'>
            <h1>Boss Machine</h1>
            <div className ='links'>
                <Link to= '/minions' className='Link'>
                    <div className = 'icon'> Minions.exe</div>
                </Link>
                <Link to = '/ideas' className = 'Link'>
                    <div className = 'icon'>Million $ Ideas.exe</div>
                </Link>
                <Link to ='/meetings' className='Link'>
                    <div className ='icon'>Meetings.exe</div>
                </Link>
            </div>
        </div>
        
    )
}

export default Home;