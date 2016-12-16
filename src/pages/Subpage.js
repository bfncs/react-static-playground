import React  from 'react';
import SimpleHeader from '../components/SimpleHeader';
import SimpleIntro from '../components/SimpleIntro';

const Home = () => (
  <div>
    <SimpleHeader title={ 'Welcome to the subpage' } />
    <SimpleIntro>
      <p>React Components make creating websites finally feel clean and productive.</p>
    </SimpleIntro>
  </div>
);

export default Home;
