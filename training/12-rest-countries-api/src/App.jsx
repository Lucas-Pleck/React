import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Navbar';
import Home from './components/pages/Home';
import Detail from './components/pages/Detail';
import { ThemeProvider } from './context/ThemeContext';

const App = () => (
  <ThemeProvider>
    <Header />
    <main className="container mx-auto px-4">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/country/:alpha2Code" element={<Detail />} />
        </Routes>
      </Router>
    </main>
  </ThemeProvider>
);

export default App;
