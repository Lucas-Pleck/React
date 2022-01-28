import React from 'react';
import Navbar from './components/navbar/Navbar';
import HeroBanner from './components/hero_banner/HeroBanner';
import AboutMe from './components/AboutMe/AboutMe';
import Skills from './components/skills/Skills';

const App = () => (
  <div className="py-10 max-w-7xl mx-auto">
    <header>
      <Navbar />
    </header>
    <main>
      <div className="sm:px-6 lg:px-8">
        <div className="px-4 py-8 sm:px-0">
          <div className="border-4 border-dashed border-gray-200 rounded-lg min-h-96">
            <HeroBanner />
          </div>
        </div>
      </div>
      <div className="sm:px-6 lg:px-8">
        <div className="px-4 sm:px-0">
          <div className="border-4 border-dashed border-gray-200 rounded-lg h-fit">
            <AboutMe />
          </div>
        </div>
      </div>
      <div className="sm:px-6 lg:px-8">
        <div className="px-4 py-8 sm:px-0">
          <div className="border-4 border-dashed border-gray-200 rounded-lg h-fit">
            <Skills />
          </div>
        </div>
      </div>
    </main>
  </div>
);

export default App;
