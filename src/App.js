import React  from 'react';
import injectSheet from 'react-jss';
import globalStyles from './style/globalStyles';
import SimpleNavigation from './components/SimpleNavigation';

const styles = {
  ...globalStyles,
  wrapper: {
    textAlign: 'center',
  },
};

const App = ({ sheet: { classes }, children } ) => (
  <div>
    <SimpleNavigation />
    <div className={ classes.wrapper }>
      {children}
    </div>
  </div>
);

export default injectSheet(styles)(App);
