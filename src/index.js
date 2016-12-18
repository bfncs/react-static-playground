import React from 'react';
import { render } from 'react-dom'
import ReactDOMServer from 'react-dom/server';
import App from './App';
import Home from './pages/Home';
import Subpage from './pages/Subpage';

import { Router, Route, RouterContext, IndexRoute, browserHistory, createMemoryHistory, match } from 'react-router';

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="/subpage" component={Subpage} />
  </Route>
);

console.log({
  hasDocument: typeof document !== 'undefined'
});

if (typeof document !== 'undefined') {
  render(
    <Router history={browserHistory} routes={routes} />,
    document.getElementById('root')
    );
}

export default (locals, callback) => {
  console.log({locals});
  const history = createMemoryHistory();
  const location = history.createLocation(locals.path);

  match({ routes, location }, (error, redirectLocation, renderProps) => {
    callback(null, ReactDOMServer.renderToString(<RouterContext {...renderProps} />));
  });
};