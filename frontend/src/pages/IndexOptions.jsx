import React, { useState } from 'react';
import { 
  TrendingUp, 
  Shield, 
  Target, 
  CheckCircle, 
  Star, 
  BarChart3,
  Clock,
  Users,
  Award,
  ArrowRight,
  Phone,
  Mail,
  MessageSquare
} from 'lucide-react';

const IndexOptions = () => {
  const [selectedPlan, setSelectedPlan] = useState('plus');

  const plans = [
    {
      id: 'basic',
      name: 'Index Options',
      price: '₹2,999',
      period: '/month',
      popular: false,
      description: 'Perfect for beginners entering the index options market',
      features: [
        'Daily 2-3 Index Options calls',
        'Nifty & Bank Nifty coverage',
        'Basic market analysis',
        'SMS & WhatsApp alerts',
        'Trading time: 9:15 AM - 3:30 PM',
        'Email support'
      ],
      color: 'blue'
    },
    {
      id: 'plus',
      name: 'Index Options Plus',
      price: '₹4,999',
      period: '/month',
      popular: true,
      description: 'Most popular choice for serious traders',
      features: [
        'Daily 4-5 Premium Index Options calls',
        'Nifty, Bank Nifty & Fin Nifty coverage',
        'Advanced technical analysis',
        'SMS, WhatsApp & Telegram alerts',
        'Live market updates',
        'Risk management guidance',
        'Priority customer support',
        'Weekly market outlook'
      ],
      color: 'indigo'
    },
    {
      id: 'combo',
      name: 'Index Options Combo',
      price: '₹7,999',
      period: '/month',
      popular: false,
      description: 'Complete trading solution with maximum coverage',
      features: [
        'Daily 6-8 Premium Index Options calls',
        'All major indices coverage',
        'Intraday + positional strategies',
        'Multi-channel alerts (SMS, WhatsApp, Telegram, Email)',
        'Live trading room access',
        'Personal relationship manager',
        'Advanced risk management tools',
        'Daily market briefings',
        'Exclusive research reports',
        '24/7 customer support'
      ],
      color: 'purple'
    }
  ];

  const features = [
    {
      icon: TrendingUp,
      title: 'High Accuracy',
      description: 'Our research-backed calls deliver consistent performance with 75%+ accuracy rate'
    },
    {
      icon: Shield,
      title: 'Risk Management',
      description: 'Every call comes with proper stop-loss and target levels for risk control'
    },
    {
      icon: Target,
      title: 'Precise Targets',
      description: 'Well-defined entry, exit, and profit booking levels for optimal returns'
    },
    {
      icon: Clock,
      title: 'Timely Alerts',
      description: 'Real-time alerts delivered across multiple channels when opportunities arise'
    }
  ];

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'Full-time Trader',
      content: 'Omkar Analytics has transformed my trading journey. Their index options calls are incredibly accurate.',
      rating: 5
    },
    {
      name: 'Priya Sharma',
      role: 'Investment Advisor',
      content: 'The research quality and timely alerts have helped me achieve consistent profits for my clients.',
      rating: 5
    },
    {
      name: 'Amit Patel',
      role: 'Business Owner',
      content: 'As a part-time trader, their clear guidance and risk management approach suits me perfectly.',
      rating: 5
    }
  ];

  const getColorClasses = (color, selected = false) => {
    const colors = {
      blue: selected ? 'bg-blue-600 text-white' : 'bg-blue-50 border-blue-200 text-blue-600',
      indigo: selected ? 'bg-indigo-600 text-white' : 'bg-indigo-50 border-indigo-200 text-indigo-600',
      purple: selected ? 'bg-purple-600 text-white' : 'bg-purple-50 border-purple-200 text-purple-600'
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">
              Index Options Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Professional Index Options Trading Calls with Proven Results
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-sm">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-yellow-400" />
                <span>SEBI Registered Research Analyst</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-green-400" />
                <span>5000+ Happy Clients</span>
              </div>
              <div className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-blue-400" />
                <span>75%+ Accuracy Rate</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Our Index Options Services?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We provide research-backed index options calls with proper risk management and consistent performance
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Plans */}
      <div className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Choose Your Trading Plan</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Select the perfect plan that matches your trading goals and experience level
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan) => (
              <div 
                key={plan.id}
                className={`relative rounded-2xl p-8 transition-all duration-300 hover:scale-105 cursor-pointer ${
                  plan.popular 
                    ? 'bg-gradient-to-br from-indigo-600 to-purple-700 text-white shadow-2xl border-2 border-indigo-400' 
                    : 'bg-white border-2 border-gray-200 hover:border-indigo-300 hover:shadow-xl'
                }`}
                onClick={() => setSelectedPlan(plan.id)}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                      <Star className="w-4 h-4" />
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-gray-800'}`}>
                    {plan.name}
                  </h3>
                  <p className={`text-sm mb-4 ${plan.popular ? 'text-indigo-100' : 'text-gray-600'}`}>
                    {plan.description}
                  </p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className={`text-4xl font-bold ${plan.popular ? 'text-white' : 'text-gray-800'}`}>
                      {plan.price}
                    </span>
                    <span className={`text-lg ${plan.popular ? 'text-indigo-200' : 'text-gray-600'}`}>
                      {plan.period}
                    </span>
                  </div>
                </div>
                
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                        plan.popular ? 'text-green-300' : 'text-green-500'
                      }`} />
                      <span className={`text-sm ${plan.popular ? 'text-indigo-100' : 'text-gray-600'}`}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
                
                <button className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                  plan.popular 
                    ? 'bg-white text-indigo-600 hover:bg-indigo-50' 
                    : 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700'
                }`}>
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">What Our Clients Say</h2>
            <p className="text-lg text-gray-600">Real feedback from real traders who trust our services</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-gray-800">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-indigo-900 to-purple-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Trading Journey?</h2>
          <p className="text-xl mb-8 text-indigo-200 max-w-2xl mx-auto">
            Join thousands of successful traders who trust Omkar Analytics for their index options trading
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold hover:bg-indigo-50 transition-colors flex items-center gap-2">
              <Phone className="w-5 h-5" />
              Call Now: +91 98765 43210
            </button>
            <button className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-green-600 hover:to-green-700 transition-all flex items-center gap-2">
              <MessageSquare className="w-5 h-5" />
              WhatsApp Us
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-indigo-600 transition-all flex items-center gap-2">
              <Mail className="w-5 h-5" />
              Email Inquiry
            </button>
          </div>
          <p className="text-sm text-indigo-200">
            SEBI Registered Research Analyst | All investments are subject to market risks
          </p>
        </div>
      </div>
    </div>
  );
};

export default IndexOptions;