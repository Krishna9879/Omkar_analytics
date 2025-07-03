import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Research from './components/Research';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Equity from './pages/Equity';
import IndexOptions from './pages/IndexOptions';

// Home page component
const HomePage = () => (
  <>
    <Hero />
    <About />
    <Services />
    <Research />
    <Contact />
    <Footer />
  </>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/equity" element={<Equity />} />
          <Route path="/index-options" element={<IndexOptions />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;