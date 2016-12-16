import React  from 'react';
import injectSheet from 'react-jss';
import globalStyles from './style/globalStyles';
import { Link } from 'react-router'

const styles = {
  ...globalStyles,
  wrapper: {
    textAlign: 'center',
  },
};

const App = ({ sheet: { classes }, children } ) => (
  <div>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/subpage">Subpage</Link></li>
      </ul>
    </nav>
    <div className={ classes.wrapper }>
      {children}
    </div>
  </div>
);

export default injectSheet(styles)(App);
