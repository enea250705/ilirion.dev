import React from 'react';
import Hero from '../components/Hero';
import TechnologyOverview from '../components/TechnologyOverview';
import InteractiveDemo from '../components/InteractiveDemo';
import Solutions from '../components/Solutions';
import Research from '../components/Research';
import About from '../components/About';
import Contact from '../components/Contact';

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <TechnologyOverview />
      <InteractiveDemo />
      <Solutions />
      <Research />
      <About />
      <Contact />
    </div>
  );
};

export default Home; 