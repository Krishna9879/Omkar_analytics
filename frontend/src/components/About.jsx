import React from 'react';
import { CheckCircle, TrendingUp, Users, Award, Target, Shield } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "In-depth Research & Real-time Insights",
      description: "Comprehensive market analysis with cutting-edge tools and real-time data interpretation"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Transparent & Ethical Advisory",
      description: "Honest, transparent practices with complete disclosure of all recommendations and risks"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Personalized Guidance",
      description: "Tailored investment strategies for both individual traders and institutional clients"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Risk Management Focus",
      description: "Strong emphasis on risk management and sustainable wealth creation strategies"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-800 mb-4">
            About Omkar Research Analyst
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Your trusted partner in navigating market complexities with confidence and precision
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-primary-50 to-secondary-50 p-6 rounded-2xl">
              <h3 className="text-2xl font-bold text-dark-800 mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                At Omkar Research Analyst, we are committed to delivering accurate, insightful, and timely market analysis to empower smart investment decisions. With a passion for financial markets and a strong foundation in data-driven research, we specialize in equity, commodity, and technical analysis tailored to both individual investors and institutional clients.
              </p>
            </div>

            <div className="bg-gradient-to-r from-secondary-50 to-primary-50 p-6 rounded-2xl">
              <h3 className="text-2xl font-bold text-dark-800 mb-4">Our Approach</h3>
              <p className="text-gray-700 leading-relaxed">
                Our approach blends deep market knowledge with cutting-edge tools and real-time data interpretation, ensuring that our clients stay ahead of the curve. Whether you're a seasoned trader or just beginning your investment journey, we stand as your trusted partner in achieving financial success.
              </p>
            </div>
          </div>

          {/* Right Content - Features */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-dark-800 mb-8">What Sets Us Apart</h3>
            
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white p-3 rounded-lg flex-shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-dark-800 mb-2">{feature.title}</h4>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-r from-dark-900 to-primary-900 text-white rounded-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Our Track Record</h3>
            <p className="text-gray-300">Numbers that speak for our excellence</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary-400 mb-2">5+</div>
              <div className="text-sm text-gray-400 uppercase tracking-wider">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary-400 mb-2">500+</div>
              <div className="text-sm text-gray-400 uppercase tracking-wider">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary-400 mb-2">95%</div>
              <div className="text-sm text-gray-400 uppercase tracking-wider">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary-400 mb-2">24/7</div>
              <div className="text-sm text-gray-400 uppercase tracking-wider">Market Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;