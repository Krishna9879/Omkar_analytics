import React, { useState, useEffect } from 'react';
import { 
  TrendingUp, TrendingDown, BarChart3, PieChart, Activity, Target, 
  Clock, Download, Search, Filter, Star, BookOpen, DollarSign, 
  Globe, ChevronDown, FileText, Minus, Eye, Share2, Bell, ArrowUpRight,
  Calendar, ChevronRight, BarChart2, LineChart, Layers, Database, AlertCircle
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ResearchDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentTime, setCurrentTime] = useState(new Date());
  const [timeframe, setTimeframe] = useState('1D');
  const [expandedReport, setExpandedReport] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Sample data
  const marketIndices = [
    { name: "NIFTY 50", price: "21,245.30", change: "+342.15", percentage: "+1.64%", trend: "up" },
    { name: "SENSEX", price: "70,514.10", change: "+521.85", percentage: "+0.74%", trend: "up" },
    { name: "BANK NIFTY", price: "45,982.35", change: "-287.45", percentage: "-0.62%", trend: "down" },
    { name: "NIFTY IT", price: "35,874.20", change: "+612.80", percentage: "+1.74%", trend: "up" }
  ];

  const featuredReports = [
    {
      id: 1,
      type: "Premium Analysis",
      title: "India's Digital Transformation: Investment Opportunities in Fintech",
      author: "Omkar Analytics Team",
      date: "2 hours ago",
      readTime: "12 min read",
      rating: "STRONG BUY",
      ratingColor: "text-green-600",
      tags: ["Fintech", "Digital", "Growth"],
      summary: "This report examines India's rapidly evolving fintech landscape, highlighting key investment opportunities in digital payment platforms, neo-banking solutions, and InsurTech innovations. We analyze market trends, regulatory developments, and competitive positioning of major players.",
      views: "2.1k",
      likes: "234",
      featured: true,
      content: {
        sections: [
          {
            title: "Executive Summary",
            body: "India's fintech market is projected to grow at a CAGR of 22.7% through 2025, driven by increasing digital adoption, government support, and a large unbanked population."
          },
          {
            title: "Key Findings",
            body: "UPI transactions have grown 15x in the last 3 years. Neo-banking platforms are seeing 300% YoY user growth. Regulatory sandbox initiatives are fostering innovation."
          }
        ],
        recommendations: [
          "Focus on payment gateway providers with strong merchant networks",
          "Consider investments in AI-driven credit scoring platforms",
          "Monitor regulatory changes in digital lending space"
        ]
      }
    },
    // Add more reports as needed
  ];

  const researchTools = [
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Stock Screener",
      description: "Filter stocks based on technical and fundamental criteria",
      features: ["50+ filters", "Real-time data", "Custom alerts"]
    },
    // Add more tools as needed
  ];

  const getTrendIcon = (trend) => {
    return trend === 'up' 
      ? <TrendingUp className="w-4 h-4 text-green-600" /> 
      : <TrendingDown className="w-4 h-4 text-red-600" />;
  };

  const toggleReport = (id) => {
    setExpandedReport(expandedReport === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 pt-24">
      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Research Dashboard</h1>
              <p className="text-gray-600 mt-2">Real-time market insights and comprehensive analysis</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Clock className="w-4 h-4" />
                <span>{currentTime.toLocaleString()}</span>
              </div>
              <div className="flex items-center space-x-2 bg-green-100 px-3 py-1 rounded-full">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-green-800">Market Open</span>
              </div>
            </div>
          </div>
        </div>

        {/* Timeframe Selector */}
        <div className="flex items-center space-x-2 mb-6 bg-white p-2 rounded-lg shadow-sm w-fit">
          {['1D', '1W', '1M', '3M', '1Y'].map((tf) => (
            <button
              key={tf}
              onClick={() => setTimeframe(tf)}
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                timeframe === tf 
                  ? 'bg-blue-600 text-white' 
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              {tf}
            </button>
          ))}
        </div>

        {/* Market Overview */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 mb-8">
          {marketIndices.map((index, i) => (
            <div key={i} className="bg-white rounded-xl p-6 shadow hover:shadow-md transition-all border border-gray-100">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-gray-900">{index.name}</h3>
                <div className={`flex items-center space-x-1 ${
                  index.trend === 'up' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {getTrendIcon(index.trend)}
                  <span className="text-sm font-medium">{index.percentage}</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-gray-900">{index.price}</div>
                <div className={`text-sm ${
                  index.trend === 'up' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {index.change}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
          {/* Navigation Tabs */}
          <div className="flex border-b border-gray-200">
            {['overview', 'reports', 'tools', 'alerts'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-4 px-6 text-center font-medium capitalize transition-colors ${
                  activeTab === tab 
                    ? 'border-b-2 border-blue-600 text-blue-600' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {activeTab === 'overview' && (
              <div className="space-y-8">
                {/* Market Insights */}
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                    <div className="flex items-center justify-between mb-3">
                      <Activity className="w-6 h-6 text-blue-600" />
                      <TrendingUp className="w-4 h-4 text-green-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-1">Market Sentiment</h4>
                    <div className="text-2xl font-bold text-gray-900 mb-2">Bullish</div>
                    <p className="text-sm text-gray-600">72% of stocks trading above 200D MA</p>
                  </div>
                  {/* Add more insights */}
                </div>

                {/* Sector Performance */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Sector Performance</h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {['IT', 'Banking', 'Auto', 'Pharma'].map((sector) => (
                      <div key={sector} className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium text-gray-900">{sector}</span>
                          <TrendingUp className="w-4 h-4 text-green-600" />
                        </div>
                        <div className="text-2xl font-bold text-gray-900">+2.4%</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'reports' && (
              <div className="space-y-6">
                {/* Search and Filter */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search research reports..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <button className="flex items-center space-x-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors">
                    <Filter className="w-5 h-5" />
                    <span>Filter</span>
                  </button>
                </div>

                {/* Reports List */}
                <div className="space-y-6">
                  {featuredReports.map((report) => (
                    <div key={report.id} className="border border-gray-200 rounded-xl overflow-hidden">
                      <div className="p-6">
                        <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                          <div className="flex items-center space-x-3">
                            <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                              {report.type}
                            </span>
                            {report.featured && (
                              <div className="flex items-center space-x-1 text-yellow-500">
                                <Star className="w-4 h-4 fill-current" />
                                <span className="text-sm font-medium">Featured</span>
                              </div>
                            )}
                          </div>
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <div className="flex items-center space-x-1">
                              <Eye className="w-4 h-4" />
                              <span>{report.views}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Star className="w-4 h-4" />
                              <span>{report.likes}</span>
                            </div>
                          </div>
                        </div>

                        <h3 className="text-xl font-bold text-gray-900 mb-2">{report.title}</h3>

                        <div className="flex flex-wrap items-center gap-x-4 text-sm text-gray-600 mb-3">
                          <span>By {report.author}</span>
                          <span>•</span>
                          <span>{report.date}</span>
                          <span>•</span>
                          <span>{report.readTime}</span>
                        </div>

                        <p className="text-gray-700 mb-4">{report.summary}</p>

                        <div className="flex flex-wrap items-center justify-between gap-4">
                          <div className="flex items-center flex-wrap gap-3">
                            {report.tags.map((tag, i) => (
                              <span key={i} className="px-2 py-1 bg-gray-100 text-gray-600 rounded-lg text-sm">
                                {tag}
                              </span>
                            ))}
                            <span className={`px-3 py-1 rounded-full text-sm font-bold ${report.ratingColor} bg-current/10`}>
                              {report.rating}
                            </span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <button 
                              onClick={() => toggleReport(report.id)}
                              className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium"
                            >
                              {expandedReport === report.id ? (
                                <>
                                  <ChevronDown className="w-4 h-4" />
                                  <span>Collapse</span>
                                </>
                              ) : (
                                <>
                                  <BookOpen className="w-4 h-4" />
                                  <span>Read Report</span>
                                </>
                              )}
                            </button>
                            <button className="p-2 text-gray-500 hover:text-gray-700 rounded-lg hover:bg-gray-100">
                              <Share2 className="w-4 h-4" />
                            </button>
                            <button className="p-2 text-gray-500 hover:text-gray-700 rounded-lg hover:bg-gray-100">
                              <Download className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>

                      {expandedReport === report.id && (
                        <div className="border-t border-gray-200 p-6 bg-gray-50">
                          <div className="prose max-w-none">
                            {report.content.sections.map((section, i) => (
                              <div key={i} className="mb-6">
                                <h4 className="text-lg font-semibold text-gray-900 mb-2">{section.title}</h4>
                                <p className="text-gray-700">{section.body}</p>
                              </div>
                            ))}

                            <div className="mt-8">
                              <h4 className="text-lg font-semibold text-gray-900 mb-2">Recommendations</h4>
                              <ul className="space-y-2">
                                {report.content.recommendations.map((rec, i) => (
                                  <li key={i} className="flex items-start">
                                    <span className="flex-shrink-0 mt-1 mr-2 text-blue-500">
                                      <ArrowUpRight className="w-4 h-4" />
                                    </span>
                                    <span className="text-gray-700">{rec}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'tools' && (
              <div className="grid md:grid-cols-3 gap-6">
                {researchTools.map((tool, i) => (
                  <div key={i} className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-md transition-all">
                    <div className="text-blue-600 mb-4">{tool.icon}</div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{tool.title}</h4>
                    <p className="text-gray-600 mb-4">{tool.description}</p>
                    <div className="space-y-2 mb-6">
                      {tool.features.map((feature, j) => (
                        <div key={j} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-4 rounded-lg font-medium hover:from-blue-600 hover:to-purple-600 transition-all">
                      Launch Tool
                    </button>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'alerts' && (
              <div className="bg-yellow-50 rounded-xl p-8 border border-yellow-200 text-center">
                <Bell className="w-16 h-16 text-yellow-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Smart Alerts</h3>
                <p className="text-gray-600 mb-6">Set up custom alerts for price movements, news, and research updates</p>
                <button className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white py-3 px-8 rounded-lg font-medium hover:from-yellow-600 hover:to-orange-600 transition-all">
                  Create Alert
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-900 to-purple-900 text-white rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Make Informed Decisions?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Get access to premium research, real-time data, and advanced analytics tools
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => navigate('#contact')}
              className="bg-white text-blue-900 py-4 px-8 rounded-lg font-bold hover:bg-gray-100 transition-colors"
            >
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white py-4 px-8 rounded-lg font-bold hover:bg-white hover:text-blue-900 transition-colors">
              View Pricing
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchDashboard;