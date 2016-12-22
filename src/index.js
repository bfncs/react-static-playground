import React from 'react';
import { render } from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import { SheetsRegistryProvider, SheetsRegistry } from 'react-jss';
import { Router, RouterContext, browserHistory, createMemoryHistory, match } from 'react-router';
import Helmet from 'react-helmet';
import routes from './routes';
import HtmlWrapper from './components/HtmlWrapper';

const serverSideStylesId = 'server-side-styles';


if (typeof document !== 'undefined') {
  render(
    <Router history={browserHistory} routes={routes} />,
    document.getElementById('root'),
    () => {
      const serverSideStyles = document.getElementById(serverSideStylesId);
      serverSideStyles.parentNode.removeChild(serverSideStyles);
    },
  );
}

export default (locals, callback) => {
  const history = createMemoryHistory();
  const location = history.createLocation(locals.path);

  match({ routes, location }, (error, redirectLocation, renderProps) => {
    const head = Helmet.rewind();
    const sheets = new SheetsRegistry();
    const appContent = ReactDOMServer.renderToStaticMarkup(
      <SheetsRegistryProvider registry={sheets}>
        <RouterContext {...renderProps} />
      </SheetsRegistryProvider>,
    );
    const html = ReactDOMServer.renderToStaticMarkup(
      <HtmlWrapper
        title={head.title.toComponent()}
        appContent={appContent}
        appStyle={sheets.toString()}
        appStyleId={serverSideStylesId}
        buildHash={locals.buildHash}
      />,
    );
    callback(null, html);
  });
};
