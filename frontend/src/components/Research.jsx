import React from 'react';
import { TrendingUp, TrendingDown, AlertCircle, Calendar, Clock, ArrowRight } from 'lucide-react';

const Research = () => {
  const marketData = [
    {
      symbol: "NIFTY 50",
      price: "19,435.50",
      change: "+245.80",
      percentage: "+1.28%",
      trend: "up"
    },
    {
      symbol: "SENSEX",
      price: "65,842.10",
      change: "+387.20",
      percentage: "+0.59%",
      trend: "up"
    },
    {
      symbol: "BANK NIFTY",
      price: "44,628.35",
      change: "-142.65",
      percentage: "-0.32%",
      trend: "down"
    },
    {
      symbol: "GOLD",
      price: "61,450.00",
      change: "+180.00",
      percentage: "+0.29%",
      trend: "up"
    }
  ];

  const researchReports = [
    {
      type: "Stock Analysis",
      title: "Technology Sector Outlook - Q4 2024",
      date: "Dec 15, 2024",
      summary: "Comprehensive analysis of leading tech stocks with price targets and recommendations.",
      rating: "BUY",
      ratingColor: "text-green-600"
    },
    {
      type: "Market Update",
      title: "Banking Sector Performance Review",
      date: "Dec 14, 2024",
      summary: "Detailed review of major banking stocks and their performance metrics.",
      rating: "HOLD",
      ratingColor: "text-yellow-600"
    },
    {
      type: "Commodity Report",
      title: "Gold & Silver Market Analysis",
      date: "Dec 13, 2024",
      summary: "Technical and fundamental analysis of precious metals market trends.",
      rating: "BUY",
      ratingColor: "text-green-600"
    }
  ];

  const insights = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Market Trends",
      description: "Stay ahead with our real-time market trend analysis and predictions."
    },
    {
      icon: <AlertCircle className="w-6 h-6" />,
      title: "Risk Alerts",
      description: "Receive instant notifications about potential market risks and opportunities."
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Economic Calendar",
      description: "Track important economic events and their potential market impact."
    }
  ];

  return (
    <section id="research" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-800 mb-4">
            Research & Market Insights
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Access premium research reports and real-time market data to make informed investment decisions
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Live Market Data */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-dark-800 mb-6">Live Market Data</h3>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {marketData.map((data, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-dark-800">{data.symbol}</h4>
                    <div className={`flex items-center space-x-1 ${data.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                      {data.trend === 'up' ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                      <span className="text-sm font-medium">{data.percentage}</span>
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-dark-800 mb-1">{data.price}</div>
                  <div className={`text-sm ${data.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                    {data.change}
                  </div>
                </div>
              ))}
            </div>

            {/* Research Reports */}
            <h3 className="text-2xl font-bold text-dark-800 mb-6">Latest Research Reports</h3>
            <div className="space-y-4">
              {researchReports.map((report, index) => (
                <div key={index} className="bg-gradient-to-r from-gray-50 to-primary-50 rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                        {report.type}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${report.ratingColor} bg-current/10`}>
                        {report.rating}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-500 text-sm">
                      <Calendar className="w-4 h-4" />
                      <span>{report.date}</span>
                    </div>
                  </div>
                  <h4 className="font-bold text-dark-800 mb-2">{report.title}</h4>
                  <p className="text-gray-600 mb-4">{report.summary}</p>
                  <button className="flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-medium">
                    <span>Read Full Report</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Quick Insights */}
            <div className="bg-gradient-to-br from-dark-900 to-primary-900 text-white rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-6">Quick Insights</h3>
              <div className="space-y-4">
                {insights.map((insight, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="bg-secondary-500 p-2 rounded-lg">
                      {insight.icon}
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">{insight.title}</h4>
                      <p className="text-sm text-gray-300">{insight.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Market Status */}
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-dark-800 mb-4">Market Status</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Market Status</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-green-600 font-medium">Open</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Last Updated</span>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-800">2 mins ago</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Next Update</span>
                  <span className="text-gray-800">Real-time</span>
                </div>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-gradient-to-r from-secondary-500 to-secondary-600 text-white rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4">Stay Updated</h3>
              <p className="text-sm text-secondary-100 mb-4">
                Subscribe to our newsletter for daily market insights and analysis.
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 rounded-lg text-dark-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button className="w-full bg-white text-secondary-600 py-2 px-4 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;