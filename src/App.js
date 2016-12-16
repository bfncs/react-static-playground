import React  from 'react';
import injectSheet from 'react-jss';
import globalStyles from './style/globalStyles';
import AppHeader from './components/AppHeader';
import AppIntro from './components/AppIntro';

const styles = {
  ...globalStyles,
  wrapper: {
    textAlign: 'center',
  },
};

const App = ({ sheet: { classes }} ) => (
  <div className={ classes.wrapper }>
    <AppHeader title={ 'Welcome to React' } />
    <AppIntro>
      <p>To get started, edit <code>src/App.js</code> and save to reload.</p>
    </AppIntro>
  </div>
);

export default injectSheet(styles)(App);
