import React from 'react';
import injectSheet from '../util/injectSheet';
import logo from '../logo.svg';
import { spin } from '../style/animations';
import { jssSheet } from '../util/propTypes';

const styles = {
  wrapper: {
    backgroundColor: '#222',
    height: '150px',
    padding: '20px',
    color: 'white',
  },
  logo: {
    animation: `${spin} infinite 20s linear`,
    height: '80px',
  },
};

const SimpleHeader = ({ sheet: { classes }, ...props }) => (
  <div className={classes.wrapper}>
    <img
      src={logo}
      className={classes.logo}
      alt={props.logoAlt}
    />
    <h2>{ props.children }</h2>
  </div>
);

SimpleHeader.propTypes = {
  children: React.PropTypes.string.isRequired,
  logoAlt: React.PropTypes.string,
  sheet: jssSheet,
};

SimpleHeader.defaultProps = {
  logoAlt: 'Logo',
};

export default injectSheet(styles)(SimpleHeader);
