import React from 'react';
import { ArrowRight, TrendingUp, BarChart3, Shield, Zap } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-dark-900 via-dark-800 to-primary-900 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      <div className="container mx-auto px-4 pt-20 pb-10 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen">
          {/* Left Content */}
          <div className="lg:w-1/2 space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-primary-600/20 backdrop-blur-sm border border-primary-500/30 px-4 py-2 rounded-full">
                <Zap className="w-4 h-4 text-secondary-400" />
                <span className="text-sm font-medium text-primary-200">Market Research Excellence</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Navigate Markets with
                <span className="bg-gradient-to-r from-secondary-400 to-secondary-600 bg-clip-text text-transparent block">
                  Precision & Insight
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
                At Omkar Research Analyst, we deliver accurate, insightful, and timely market analysis to empower smart investment decisions. Your financial growth is our mission.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={() => scrollToSection('services')}
                className="bg-gradient-to-r from-secondary-500 to-secondary-600 hover:from-secondary-600 hover:to-secondary-700 text-dark-900 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              
              <button 
                onClick={() => scrollToSection('contact')}
                className="border-2 border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
              >
                Get Started
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary-400">5+</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary-400">500+</div>
                <div className="text-sm text-gray-400">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary-400">95%</div>
                <div className="text-sm text-gray-400">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Right Content - Visual Elements */}
          <div className="lg:w-1/2 mt-10 lg:mt-0 relative">
            <div className="relative max-w-lg mx-auto">
              {/* Main Card */}
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 shadow-2xl animate-float">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="bg-green-500 w-3 h-3 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium">Live Market Data</span>
                  </div>
                  <BarChart3 className="w-6 h-6 text-secondary-400" />
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">NIFTY 50</span>
                    <span className="text-green-400 font-bold">+2.45%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">SENSEX</span>
                    <span className="text-green-400 font-bold">+1.87%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">BANK NIFTY</span>
                    <span className="text-red-400 font-bold">-0.65%</span>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-gradient-to-r from-primary-600/20 to-secondary-600/20 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <Shield className="w-4 h-4 text-secondary-400" />
                    <span className="text-sm font-medium">Risk Assessment</span>
                  </div>
                  <div className="text-xs text-gray-400">Portfolio analyzed with 95% accuracy</div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-secondary-500 p-3 rounded-full shadow-lg animate-pulse">
                <TrendingUp className="w-6 h-6 text-dark-900" />
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-primary-500 p-3 rounded-full shadow-lg animate-bounce">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;