import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import IssueList from './components/IssueList';
import IssueDetail from './components/IssueDetail';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={IssueList} />
        <Route path="/issue/:id" component={IssueDetail} />
      </Switch>
    </Router>
  );
}

export default App;
