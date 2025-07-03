import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Research from './components/Research';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Equity from './pages/Equity';
import IndexOptions from './pages/IndexOptions';
import ResearchDashboard from './pages/ResearchPage';
import AboutUs from './pages/AboutUs';

// Scroll to section handler
const ScrollHandler = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return null;
};

// Home page component
const HomePage = () => (
  <>
    <ScrollHandler />
    <Hero />
    <About />
    <Services />
    <Research />
    <Contact />
  </>
);

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/equity" element={<Equity />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/index-options" element={<IndexOptions />} />
          <Route path="/research-dashboard" element={<ResearchDashboard />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;