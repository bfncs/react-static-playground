import React from 'react';
import injectSheet from 'react-jss'

const styles = {
  wrapper: {
    fontSize: 'large',
  },
};

const AppIntro = ({sheet: {classes}, ...props}) => (
  <div className={classes.wrapper}>
    { props.children }
  </div>
);

AppIntro.PropTypes = {
  children: React.PropTypes.node,
};

export default injectSheet(styles)(AppIntro);