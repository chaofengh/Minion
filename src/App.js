import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './frontend/components/Home';
import AllMinions from './frontend/components/AllMinions';
import MinionDetail from './frontend/components/MinionDetail';
import AllIdeas from './frontend/components/AllIdeas';
import IdeaDetail from './frontend/components/IdeaDetail'
import AllMeetings from './frontend/components/AllMeetings';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/minions" element={<AllMinions />} />
        <Route path = 'minions/:id' element={<MinionDetail/>}/>
        <Route path="/ideas" element={<AllIdeas />} />
        <Route path='ideas/:id' element={<IdeaDetail/>}/>
        <Route path="/meetings" element={<AllMeetings />} />
      </Routes>
    </Router>
  );
};

export default App;
