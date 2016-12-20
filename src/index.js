import React from 'react';
import { render } from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import { Router, Route, RouterContext, IndexRoute, browserHistory, createMemoryHistory, match } from 'react-router';
import App from './App';
import Home from './pages/Home';
import Subpage from './pages/Subpage';


const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="/subpage" component={Subpage} />
  </Route>
);

if (typeof document !== 'undefined') {
  render(
    <Router history={browserHistory} routes={routes} />,
    document.getElementById('root'),
    );
}

export default (locals, callback) => {
  const history = createMemoryHistory();
  const location = history.createLocation(locals.path);

  match({ routes, location }, (error, redirectLocation, renderProps) => {
    callback(null, ReactDOMServer.renderToString(<RouterContext {...renderProps} />));
  });
};
