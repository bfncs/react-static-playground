import React from 'react';
import { render } from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import { Router, Route, RouterContext, IndexRoute, browserHistory, createMemoryHistory, match } from 'react-router';
import Helmet from 'react-helmet';
import App from './App';
import Home from './pages/Home';
import Subpage from './pages/Subpage';
import HtmlWrapper from './components/HtmlWrapper';

const Routes = (
  <Route>
    <IndexRoute component={Home} />
    <Route path="/subpage" component={Subpage} />
  </Route>
);

const routes = (
  <Route path="/" component={App}>
    { Routes }
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
    const head = Helmet.rewind();
    const appContent = ReactDOMServer.renderToStaticMarkup(<RouterContext {...renderProps} />);
    const html = ReactDOMServer.renderToStaticMarkup(
      <HtmlWrapper
        title={head.title.toComponent()}
        appContent={appContent}
      />,
    );
    callback(null, html);
  });
};
