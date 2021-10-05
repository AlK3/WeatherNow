import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route
} from 'react-router-dom';
import { Loader } from './components/Loader/Loader';
import { About } from './pages/About';
import { Weather } from './pages/Weather';

function App() {

  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path='/' component={Weather} />
          <Route exact path='/about' component={About} />
          <Redirect to='/' />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;