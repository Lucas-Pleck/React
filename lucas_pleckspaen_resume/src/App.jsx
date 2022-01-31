import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Skills from './components/skills/Skills';
import Career from './components/career/Career';
import Footer from './components/footer/Footer';

const App = () => (
  <div className="py-4 max-w-7xl mx-auto h-screen">
    <header>
      <Navbar />
    </header>
    <main>
      <div className="sm:px-6 lg:px-8">
        <div className="px-4 py-8 sm:px-0">
          <div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/career" element={<Career />} />
            </Routes>
          </div>
        </div>
      </div>
    </main>
    <footer>
      <Footer />
    </footer>
  </div>
);

export default App;
