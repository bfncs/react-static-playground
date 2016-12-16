import React from 'react';
import { render } from 'react-dom'
import App from './App';
import Home from './pages/Home';
import Subpage from './pages/Subpage';

import { Router, Route, IndexRoute, browserHistory } from 'react-router'

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/subpage" component={Subpage} />
    </Route>
  </Router>
);
render(routes, document.getElementById('root'));