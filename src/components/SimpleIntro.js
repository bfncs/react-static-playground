import React from 'react';
import injectSheet from 'react-jss'

const styles = {
  wrapper: {
    margin: '2em 1em',
    fontSize: 'large',
  },
};

const SimpleIntro = ({sheet: {classes}, ...props}) => (
  <div className={classes.wrapper}>
    { props.children }
  </div>
);

SimpleIntro.PropTypes = {
  children: React.PropTypes.node,
};

export default injectSheet(styles)(SimpleIntro);