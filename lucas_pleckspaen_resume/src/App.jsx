import React from 'react';
import Navbar from './components/navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Skills from './components/skills/Skills';
import Career from './components/career/Career';

const App = () => (
  <div className="py-4 max-w-7xl mx-auto">
    <header>
      <Navbar />
    </header>
    <main>
      <div className="sm:px-6 lg:px-8">
        <div className="px-4 py-8 sm:px-0">
          <div className="border-4 border-dashed border-gray-200 rounded-lg min-h-96">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/career" element={<Career />} />
            </Routes>
          </div>
        </div>
      </div>
    </main>
  </div>
);

export default App;
