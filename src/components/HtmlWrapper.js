import React, { PropTypes } from 'react';

const HtmlWrapper = (props) => {
  // eslint-disable-next-line react/no-danger
  const content = (
    <div id="content" dangerouslySetInnerHTML={{ __html: props.appContent }} />
  );

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {props.title}
      </head>
      <body>
        { content }
        <script type="text/javascript" src="/static/js/main.js" charSet="utf-8" />
      </body>
    </html>
  );
};

HtmlWrapper.propTypes = {
  title: PropTypes.node.isRequired,
  appContent: PropTypes.node.isRequired,
};

export default HtmlWrapper;