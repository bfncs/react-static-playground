import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App';
import Home from './pages/Home';
import Subpage from './pages/Subpage';
import OtherPage from './pages/OtherPage';

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="/subpage" component={Subpage} />
    <Route path="/otherpage" component={OtherPage} />
  </Route>
);

export default routes;
