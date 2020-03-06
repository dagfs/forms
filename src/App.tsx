import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import CreateForm from './pages/CreateForms/CreateForm';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/create-form/:formIndex" component={CreateForm}></Route>
        <Route default>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
