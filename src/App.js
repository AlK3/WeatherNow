import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route
} from 'react-router-dom';
import { About } from './pages/About';
import { Weather } from './pages/Weather';

export const App = () => {

  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Weather} />
        <Route exact path='/about' component={About} />
        <Redirect to='/' />
      </Switch>
    </Router>
  );
}