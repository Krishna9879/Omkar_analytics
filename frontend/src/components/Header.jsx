import React, { useState, useEffect } from 'react';
import { Menu, X, TrendingUp, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateToPage = (path) => {
    navigate(path);
    setIsMenuOpen(false);
    setOpenDropdown(null);
  };

  const scrollToSection = (sectionId) => {
    if (window.location.pathname !== '/') {
      navigate('/', { state: { scrollTo: sectionId } });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
    setOpenDropdown(null);
  };

  const handleDropdownToggle = (e, itemId) => {
    e.stopPropagation();
    setOpenDropdown(openDropdown === itemId ? null : itemId);
  };

  const isResearchPage = window.location.pathname === '/research-dashboard';
  const isEquityPage = window.location.pathname === '/equity';
  const isIndexOptionsPage = window.location.pathname === '/index-options';
  
  const isSpecialPage = isResearchPage || isEquityPage || isIndexOptionsPage;
  const headerBg = isScrolled || isSpecialPage ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent';
  const textColor = isScrolled || isSpecialPage ? 'text-gray-700' : 'text-white';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg}`}>
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => navigate('/')}
          >
            <div className="bg-gradient-to-r from-blue-600 to-purple-700 p-2 rounded-lg">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className={`text-xl font-bold ${textColor}`}>Omkar Research</h1>
              <p className={`text-xs ${isScrolled || isSpecialPage ? 'text-gray-600' : 'text-gray-300'}`}>Analyst</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {[
              { id: 'home', label: 'Home', action: () => scrollToSection('home') },
              { id: 'about', label: 'About', action: () => scrollToSection('about') },
              { 
                id: 'services', 
                label: 'Services',
                dropdown: [
                  { id: 'equity', label: 'Equity', action: () => navigate('/equity') },
                  { id: 'index-options', label: 'Index Options', action: () => navigate('/index-options') },
                ] 
              },
              { 
                id: 'research', 
                label: 'Research',
                action: () => navigate('/research-dashboard')
              },
              { id: 'contact', label: 'Contact', action: () => scrollToSection('contact') },
            ].map((item) => (
              item.dropdown ? (
                <div 
                  key={item.id} 
                  className="relative group"
                  onMouseEnter={(e) => handleDropdownToggle(e, item.id)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setOpenDropdown(openDropdown === item.id ? null : item.id);
                    }}
                    className={`relative font-medium transition-all duration-300 px-1 flex items-center
                      ${textColor}
                      hover:text-transparent bg-clip-text hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-700
                      hover:scale-110 hover:drop-shadow-lg
                      before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-0.5 before:bg-gradient-to-r before:from-blue-600 before:to-purple-700 before:rounded-full before:transition-all before:duration-300
                      hover:before:w-full
                    `}
                  >
                    {item.label}
                    <ChevronDown className="w-4 h-4 ml-1" />
                  </button>
                  <div className={`absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg transition-all duration-200 z-50
                    ${openDropdown === item.id ? 'opacity-100 visible' : 'opacity-0 invisible group-hover:opacity-100 group-hover:visible'}
                  `}>
                    {item.dropdown.map((option) => (
                      <button
                        key={option.id}
                        onClick={(e) => {
                          e.stopPropagation();
                          option.action();
                          setOpenDropdown(null);
                        }}
                        className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-700 hover:text-white rounded-lg transition-all duration-200 first:rounded-t-lg last:rounded-b-lg"
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <button
                  key={item.id}
                  onClick={item.action}
                  className={`relative font-medium transition-all duration-300 px-1
                    ${textColor}
                    hover:text-transparent bg-clip-text hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-700
                    hover:scale-110 hover:drop-shadow-lg
                    before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-0.5 before:bg-gradient-to-r before:from-blue-600 before:to-purple-700 before:rounded-full before:transition-all before:duration-300
                    hover:before:w-full
                  `}
                >
                  {item.label}
                </button>
              )
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-700 hover:to-purple-800 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden transition-colors ${textColor} hover:text-blue-600`}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-3 pt-4">
              {[
                { id: 'home', label: 'Home', action: () => scrollToSection('home') },
                { id: 'about', label: 'About', action: () => scrollToSection('about') },
                { 
                  id: 'services', 
                  label: 'Services',
                  dropdown: [
                    { id: 'equity', label: 'Equity', action: () => navigate('/equity') },
                    { id: 'index-options', label: 'Index Options', action: () => navigate('/index-options') },
                  ] 
                },
                { 
                  id: 'research', 
                  label: 'Research',
                  action: () => navigate('/research-dashboard')
                },
                { id: 'contact', label: 'Contact', action: () => scrollToSection('contact') },
              ].map((item) => (
                item.dropdown ? (
                  <div key={item.id} className="flex flex-col">
                    <button
                      onClick={() => {
                        setOpenDropdown(openDropdown === `mobile-${item.id}` ? null : `mobile-${item.id}`);
                      }}
                      className={`relative font-medium transition-all duration-300 text-left px-1 flex items-center
                        ${textColor}
                        hover:text-transparent bg-clip-text hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-700
                        hover:scale-105 hover:drop-shadow-lg
                        before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-0.5 before:bg-gradient-to-r before:from-blue-600 before:to-purple-700 before:rounded-full before:transition-all before:duration-300
                        hover:before:w-full
                      `}
                    >
                      {item.label}
                      <ChevronDown className="w-4 h-4 ml-1" />
                    </button>
                    <div className={`ml-4 flex flex-col mt-1 transition-all duration-200 ${
                      openDropdown === `mobile-${item.id}` ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                    }`}>
                      {item.dropdown.map((option) => (
                        <button
                          key={option.id}
                          onClick={(e) => {
                            e.stopPropagation();
                            option.action();
                            setIsMenuOpen(false);
                            setOpenDropdown(null);
                          }}
                          className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-700 hover:text-white rounded-lg transition-all duration-200 mt-1"
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  <button
                    key={item.id}
                    onClick={item.action}
                    className={`relative font-medium transition-all duration-300 text-left px-1
                      ${textColor}
                      hover:text-transparent bg-clip-text hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-700
                      hover:scale-105 hover:drop-shadow-lg
                      before:absolute before:-bottom-1 before:left-0 before:h-0.5 before:bg-gradient-to-r before:from-blue-600 before:to-purple-700 before:rounded-full before:transition-all before:duration-300
                      hover:before:w-full
                    `}
                  >
                    {item.label}
                  </button>
                )
              ))}
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-700 hover:to-purple-800 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-left mt-2"
              >
                Get Started
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;