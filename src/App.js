import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route
} from 'react-router-dom';
import { About } from './pages/About';
import { Article } from './pages/Article';
import { Articles } from './pages/Articles';
import { Contacts } from './pages/Contacts';
import { News } from './pages/News';
import { NotFound } from './pages/NotFound';
import { Ocean } from './pages/Ocean';
import { SomeNews } from './pages/SomeNews';
import { Weather } from './pages/Weather';

export const App = () => {

  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Weather} />
        <Route exact path='/about' component={About} />
        <Route exact path='/ocean' component={Ocean} />
        <Route exact path='/contacts' component={Contacts} />
        <Route exact path='/articles' component={Articles} />
        <Route exact path='/news' component={News} />
        <Route exact path='/articles/:articleId' component={Article} />
        <Route exact path='/news/:newsId' component={SomeNews} />
        <Route exact path='/404' component={NotFound} />
        <Redirect to='/404' />
      </Switch>
    </Router>
  );
}