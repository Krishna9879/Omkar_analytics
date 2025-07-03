import React from 'react';
import { TrendingUp, BarChart3, PieChart, LineChart, Shield, Target, Zap, Award } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Equity Research",
      description: "Comprehensive analysis of individual stocks and market sectors with detailed reports and recommendations.",
      features: ["Stock Analysis", "Sector Research", "Price Targets", "Risk Assessment"]
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Technical Analysis",
      description: "Advanced charting and pattern recognition to identify optimal entry and exit points for trades.",
      features: ["Chart Patterns", "Technical Indicators", "Support & Resistance", "Trend Analysis"]
    },
    {
      icon: <PieChart className="w-8 h-8" />,
      title: "Commodity Research",
      description: "In-depth analysis of commodity markets including precious metals, energy, and agricultural products.",
      features: ["Gold & Silver", "Energy Markets", "Agricultural Commodities", "Supply & Demand"]
    },
    {
      icon: <LineChart className="w-8 h-8" />,
      title: "Portfolio Management",
      description: "Customized portfolio strategies designed to maximize returns while managing risk effectively.",
      features: ["Asset Allocation", "Risk Management", "Performance Tracking", "Rebalancing"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Risk Management",
      description: "Comprehensive risk assessment and mitigation strategies to protect your investments.",
      features: ["Risk Assessment", "Stop Loss Strategies", "Diversification", "Hedging Techniques"]
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Investment Advisory",
      description: "Personalized investment advice tailored to your financial goals and risk tolerance.",
      features: ["Goal Planning", "Investment Strategy", "Regular Reviews", "Performance Reports"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-800 mb-4">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive financial services designed to help you achieve your investment goals
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white p-4 rounded-xl w-fit mb-6">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold text-dark-800 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              
              <div className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-secondary-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              
              <button className="w-full mt-6 bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 transform hover:scale-105">
                Learn More
              </button>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-dark-900 to-primary-900 text-white rounded-2xl p-8 md:p-12">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Award className="w-8 h-8 text-secondary-400" />
              <h3 className="text-2xl md:text-3xl font-bold">Ready to Get Started?</h3>
            </div>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Take the first step towards financial success with our expert guidance and proven strategies.
            </p>
            <button className="bg-gradient-to-r from-secondary-500 to-secondary-600 hover:from-secondary-600 hover:to-secondary-700 text-dark-900 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105">
              Contact Us Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;