import React  from 'react';
import SimpleHeader from '../components/SimpleHeader';
import SimpleIntro from '../components/SimpleIntro';

const Home = () => (
  <div>
    <SimpleHeader title={ 'Welcome to the homepage' } />
    <SimpleIntro>
      <p>It's beautiful here, isn't it?</p>
    </SimpleIntro>
  </div>
);

export default Home;
