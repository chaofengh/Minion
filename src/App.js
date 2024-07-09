import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './frontend/components/Home';
import Minions from './frontend/components/AllMinions';
import Ideas from './frontend/components/AllIdeas';
import Meetings from './frontend/components/AllMeetings';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/minions" component={Minions} />
          <Route path="/ideas" component={Ideas} />
          <Route path="/meetings" component={Meetings} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
