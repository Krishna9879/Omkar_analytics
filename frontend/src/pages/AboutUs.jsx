import React, { useState, useEffect } from 'react';
import { TrendingUp, Shield, Users, Target, BarChart3, PieChart, Award, CheckCircle, Star, ArrowRight, ChevronDown, Zap, Globe, Brain, Trophy, Eye, Heart, Sparkles } from 'lucide-react';

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState({});
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      setIsVisible(prev => ({
        ...prev,
        [entry.target.id]: entry.isIntersecting
      }));
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1,
      rootMargin: '50px'
    });

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const stats = [
    { number: "500+", label: "Satisfied Clients", icon: Users, color: "text-blue-600" },
    { number: "95%", label: "Success Rate", icon: Trophy, color: "text-green-600" },
    { number: "24/7", label: "Market Coverage", icon: Globe, color: "text-purple-600" },
    { number: "5+", label: "Years Experience", icon: Star, color: "text-orange-600" },
  ];

  const values = [
    {
      title: "Precision & Accuracy",
      description: "Every analysis is meticulously crafted with data-driven insights and real-time market intelligence.",
      icon: Target,
      color: "blue"
    },
    {
      title: "Innovation & Technology",
      description: "Leveraging cutting-edge tools and AI-powered analytics for superior market predictions.",
      icon: Brain,
      color: "purple"
    },
    {
      title: "Trust & Transparency",
      description: "Building lasting relationships through honest communication and ethical practices.",
      icon: Shield,
      color: "green"
    },
    {
      title: "Client-Centric Approach",
      description: "Your success is our priority. Personalized strategies tailored to your unique goals.",
      icon: Heart,
      color: "red"
    }
  ];

  const services = [
    {
      title: "Equity Research",
      description: "Deep fundamental analysis with sector-specific insights",
      icon: TrendingUp,
      features: ["Stock Screening", "Valuation Models", "Risk Assessment"],
      color: "blue"
    },
    {
      title: "Technical Analysis",
      description: "Advanced charting with proprietary indicators",
      icon: BarChart3,
      features: ["Chart Patterns", "Volume Analysis", "Momentum Indicators"],
      color: "purple"
    },
    {
      title: "Commodity Intelligence",
      description: "Global commodity trends and futures analysis",
      icon: PieChart,
      features: ["Price Forecasting", "Supply-Demand Analysis", "Market Timing"],
      color: "green"
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: {
        icon: "text-blue-600",
        bg: "bg-blue-50",
        border: "border-blue-200",
        hover: "hover:bg-blue-100",
        gradient: "from-blue-500 to-blue-600"
      },
      purple: {
        icon: "text-purple-600",
        bg: "bg-purple-50",
        border: "border-purple-200",
        hover: "hover:bg-purple-100",
        gradient: "from-purple-500 to-purple-600"
      },
      green: {
        icon: "text-green-600",
        bg: "bg-green-50",
        border: "border-green-200",
        hover: "hover:bg-green-100",
        gradient: "from-green-500 to-green-600"
      },
      red: {
        icon: "text-red-600",
        bg: "bg-red-50",
        border: "border-red-200",
        hover: "hover:bg-red-100",
        gradient: "from-red-500 to-red-600"
      },
      orange: {
        icon: "text-orange-600",
        bg: "bg-orange-50",
        border: "border-orange-200",
        hover: "hover:bg-orange-100",
        gradient: "from-orange-500 to-orange-600"
      }
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-hidden">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-6 text-center relative z-10">
          <div 
            className={`max-w-6xl mx-auto transform transition-all duration-1000 ${
              isVisible.hero ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
            }`}
            data-animate
            id="hero"
          >
            <div className="inline-flex items-center bg-gray-50 border border-gray-200 rounded-full px-6 py-3 mb-8 hover:bg-gray-100 transition-colors duration-300">
              <Sparkles className="w-5 h-5 mr-2 text-blue-600" />
              <span className="text-gray-700 font-medium">Premium Financial Intelligence</span>
            </div>
            
            <h1 className="text-7xl md:text-8xl font-black mb-8 leading-tight">
              <span className="text-gray-900">
                OMKAR
              </span>
              <br />
              <span className="text-blue-600">
                RESEARCH
              </span>
            </h1>
            
            <p className="text-2xl md:text-3xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
              Transforming Financial Markets Through 
              <span className="text-blue-600 font-bold"> Revolutionary Analytics</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25">
                <span className="relative z-10 flex items-center">
                  Explore Our Services
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
              </button>
              
              <button className="group px-8 py-4 border-2 border-gray-200 rounded-xl font-bold text-lg text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all duration-300">
                <span className="flex items-center">
                  <Eye className="mr-2 w-5 h-5" />
                  Watch Demo
                </span>
              </button>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-gray-400" />
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className={`text-center group cursor-pointer transform transition-all duration-500 ${
                  isVisible[`stat-${index}`] ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                } hover:scale-110`}
                data-animate
                id={`stat-${index}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="bg-white border border-gray-200 rounded-2xl p-6 group-hover:shadow-lg group-hover:border-gray-300 transition-all duration-300">
                  <stat.icon className={`w-8 h-8 mx-auto mb-3 ${stat.color} transition-colors`} />
                  <div className="text-3xl font-black text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div 
              className={`text-center mb-16 transition-all duration-1000 ${
                isVisible['mission-header'] ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
              }`}
              data-animate
              id="mission-header"
            >
              <h2 className="text-5xl font-black mb-6 text-gray-900">
                Our Mission
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
            </div>
            
            <div 
              className={`relative transition-all duration-1000 delay-300 ${
                isVisible['mission-content'] ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
              }`}
              data-animate
              id="mission-content"
            >
              <div className="bg-gray-50 border border-gray-200 rounded-3xl p-12 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center justify-center mb-8">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-4 rounded-2xl">
                    <Zap className="w-10 h-10 text-white" />
                  </div>
                </div>
                
                <p className="text-2xl text-gray-600 leading-relaxed text-center mb-8">
                  At Omkar Research Analyst, we are committed to delivering 
                  <span className="text-gray-900 font-bold"> accurate, insightful, and timely market analysis</span> 
                  to empower smart investment decisions. With a passion for financial markets and a strong foundation in data-driven research, we specialize in 
                  <span className="text-gray-900 font-bold"> equity, commodity, and technical analysis</span> 
                  tailored to both individual investors and institutional clients.
                </p>
                
                <div className="text-center">
                  <div className="inline-flex items-center bg-green-50 border border-green-200 rounded-full px-6 py-3">
                    <CheckCircle className="w-5 h-5 mr-2 text-green-600" />
                    <span className="text-green-700 font-medium">Trusted by 500+ Investors</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div 
              className={`text-center mb-16 transition-all duration-1000 ${
                isVisible['values-header'] ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
              }`}
              data-animate
              id="values-header"
            >
              <h2 className="text-5xl font-black mb-6 text-gray-900">
                Our Core Values
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value, index) => {
                const colorClasses = getColorClasses(value.color);
                return (
                  <div 
                    key={index}
                    className={`group relative overflow-hidden rounded-3xl transition-all duration-500 hover:scale-105 ${
                      isVisible[`value-${index}`] ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
                    }`}
                    data-animate
                    id={`value-${index}`}
                    style={{ transitionDelay: `${index * 200}ms` }}
                  >
                    <div className={`relative bg-white border border-gray-200 rounded-3xl p-8 h-full group-hover:shadow-xl transition-all duration-300 ${colorClasses.hover}`}>
                      <div className="flex items-center mb-6">
                        <div className={`${colorClasses.bg} p-3 rounded-2xl mr-4 border ${colorClasses.border}`}>
                          <value.icon className={`w-8 h-8 ${colorClasses.icon}`} />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900">{value.title}</h3>
                      </div>
                      <p className="text-gray-600 text-lg leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div 
              className={`text-center mb-16 transition-all duration-1000 ${
                isVisible['services-header'] ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
              }`}
              data-animate
              id="services-header"
            >
              <h2 className="text-5xl font-black mb-6 text-gray-900">
                Our Expertise
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full" />
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const colorClasses = getColorClasses(service.color);
                return (
                  <div 
                    key={index}
                    className={`group relative overflow-hidden rounded-3xl transition-all duration-500 hover:scale-105 ${
                      isVisible[`service-${index}`] ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
                    }`}
                    data-animate
                    id={`service-${index}`}
                    style={{ transitionDelay: `${index * 200}ms` }}
                  >
                    <div className="relative bg-white border border-gray-200 rounded-3xl p-8 h-full group-hover:shadow-xl transition-all duration-300">
                      <div className={`${colorClasses.bg} p-4 rounded-2xl w-fit mb-6 border ${colorClasses.border}`}>
                        <service.icon className={`w-8 h-8 ${colorClasses.icon}`} />
                      </div>
                      
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                      <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                        {service.description}
                      </p>
                      
                      <div className="space-y-3">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center">
                            <div className={`w-2 h-2 bg-gradient-to-r ${colorClasses.gradient} rounded-full mr-3`} />
                            <span className="text-gray-600">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div 
              className={`relative overflow-hidden rounded-3xl transition-all duration-1000 ${
                isVisible.cta ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
              }`}
              data-animate
              id="cta"
            >
              <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white p-16 text-center rounded-3xl">
                <div className="bg-white/20 p-6 rounded-3xl inline-block mb-8 backdrop-blur-sm">
                  <Award className="w-16 h-16 text-white mx-auto" />
                </div>
                
                <h2 className="text-5xl font-black text-white mb-6">
                  Your Financial Growth is Our Mission
                </h2>
                
                <p className="text-2xl text-blue-100 mb-8 leading-relaxed">
                  At Omkar Research Analyst, we don't just provide market analysis – we build lasting partnerships that help you achieve your financial goals. 
                  <span className="text-white font-bold"> Your success is our success</span>, and we're committed to being your trusted guide in the ever-evolving world of financial markets.
                </p>
                
                <button className="group relative px-12 py-6 bg-white text-blue-900 rounded-2xl font-bold text-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                  <span className="relative z-10 flex items-center">
                    Start Your Journey Today
                    <ArrowRight className="ml-3 w-6 h-6 transition-transform group-hover:translate-x-1" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;