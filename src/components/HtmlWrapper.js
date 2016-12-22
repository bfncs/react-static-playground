import React, { PropTypes } from 'react';

const HtmlWrapper = (props) => {
  // eslint-disable-next-line react/no-danger
  const content = (<div id="content" dangerouslySetInnerHTML={{ __html: props.appContent }} />);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {props.title}
        <style id={props.appStyleId} type="text/css">
          {props.appStyle}
        </style>
      </head>
      <body>
        <div id="root">
          { content }
        </div>
        <script type="text/javascript" src="/static/js/main.js" charSet="utf-8" />
      </body>
    </html>
  );
};

HtmlWrapper.propTypes = {
  title: PropTypes.node.isRequired,
  appContent: PropTypes.node.isRequired,
  appStyle: PropTypes.string.isRequired,
  appStyleId: PropTypes.string.isRequired,
};

export default HtmlWrapper;
