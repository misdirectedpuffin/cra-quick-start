// @flow
import React from 'react';
import { Route, Switch } from 'react-router';
import Home from '../components/Home';
import About from '../components/About';
import Topics from '../components/Topics';
import Counter from '../components/CounterContainer';
// import About from '../components/About';

const routes = (
  <div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/topics" component={Topics} />
      <Route path="/counter" component={Counter} />
    </Switch>
  </div>
)

export default routes