import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './frontend/components/Home';
import AllMinions from './frontend/components/AllMinions';
import AllIdeas from './frontend/components/AllIdeas.js';
import AllMeetings from './frontend/components/AllMeetings';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/minions" component={AllMinions} />
        <Route path="/ideas" component={AllIdeas} />
        <Route path="/meetings" component={AllMeetings} />
      </Switch>
    </Router>
  );
};

export default App;
