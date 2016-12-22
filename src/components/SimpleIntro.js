import React from 'react';
import injectSheet from '../util/injectSheet';
import { jssSheet } from '../util/propTypes';

const styles = {
  wrapper: {
    margin: '2em 1em',
    fontSize: 'large',
  },
};

const SimpleIntro = ({ sheet: { classes }, ...props }) => (
  <div className={classes.wrapper}>
    { props.children }
  </div>
);

SimpleIntro.propTypes = {
  children: React.PropTypes.node,
  sheet: jssSheet,
};

export default injectSheet(styles)(SimpleIntro);
