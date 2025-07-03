import React, { useState } from 'react';
import { TrendingUp, TrendingDown, BarChart3, PieChart, LineChart, DollarSign, Activity, AlertCircle, Calendar, Filter, Search, Download, Eye, Star, Shield, Target, Globe, Users, Zap, Award } from 'lucide-react';

const Equity = () => {
  const [selectedSector, setSelectedSector] = useState('all');
  const [selectedTimeframe, setSelectedTimeframe] = useState('1Y');
  const [activeTab, setActiveTab] = useState('overview');

  const equityData = [
    { symbol: 'RELIANCE', name: 'Reliance Industries Ltd', price: 2456.75, change: 2.34, changePercent: 0.095, volume: '12.5M', marketCap: '16.6L Cr', sector: 'Energy' },
    { symbol: 'TCS', name: 'Tata Consultancy Services', price: 3678.90, change: -15.60, changePercent: -0.42, volume: '8.2M', marketCap: '13.4L Cr', sector: 'Technology' },
    { symbol: 'HDFCBANK', name: 'HDFC Bank Limited', price: 1654.30, change: 8.75, changePercent: 0.53, volume: '18.3M', marketCap: '12.2L Cr', sector: 'Banking' },
    { symbol: 'INFY', name: 'Infosys Limited', price: 1789.45, change: 12.30, changePercent: 0.69, volume: '6.8M', marketCap: '7.4L Cr', sector: 'Technology' },
    { symbol: 'ICICIBANK', name: 'ICICI Bank Limited', price: 1123.60, change: -4.25, changePercent: -0.38, volume: '15.7M', marketCap: '7.9L Cr', sector: 'Banking' },
    { symbol: 'BHARTIARTL', name: 'Bharti Airtel Limited', price: 1456.80, change: 18.90, changePercent: 1.31, volume: '9.1M', marketCap: '8.2L Cr', sector: 'Telecom' }
  ];

  const sectors = [
    { name: 'Banking', allocation: 28.5, color: 'bg-blue-500' },
    { name: 'Technology', allocation: 22.3, color: 'bg-purple-500' },
    { name: 'Energy', allocation: 18.7, color: 'bg-green-500' },
    { name: 'Healthcare', allocation: 12.8, color: 'bg-red-500' },
    { name: 'Consumer Goods', allocation: 10.2, color: 'bg-yellow-500' },
    { name: 'Others', allocation: 7.5, color: 'bg-gray-500' }
  ];

  const marketInsights = [
    { title: 'Market Outlook', content: 'Strong bullish momentum with Q4 earnings driving optimism', trend: 'up' },
    { title: 'Sector Rotation', content: 'Technology and banking sectors showing institutional interest', trend: 'up' },
    { title: 'Risk Assessment', content: 'Moderate volatility expected due to global uncertainties', trend: 'neutral' },
    { title: 'Investment Theme', content: 'Focus on quality large-cap stocks with strong fundamentals', trend: 'up' }
  ];

  const researchHighlights = [
    { title: 'AI-Powered Analytics', description: 'Advanced machine learning algorithms for pattern recognition', icon: Zap },
    { title: 'Real-time Data', description: 'Live market data with sub-second latency', icon: Activity },
    { title: 'Risk Management', description: 'Comprehensive risk assessment and portfolio optimization', icon: Shield },
    { title: 'Global Coverage', description: 'Multi-market analysis across 50+ exchanges', icon: Globe }
  ];

  const filteredEquities = selectedSector === 'all' 
    ? equityData 
    : equityData.filter(equity => equity.sector.toLowerCase() === selectedSector.toLowerCase());

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-24">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
              Equity Research & Analytics
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
              Professional-grade equity analysis powered by advanced analytics and real-time market intelligence
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl">
                Start Analysis
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300">
                View Reports
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 bg-white rounded-lg p-2 shadow-lg">
          {['overview', 'screener', 'analysis', 'reports'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-md font-medium transition-all duration-300 ${
                activeTab === tab 
                  ? 'bg-blue-600 text-white shadow-md' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Research Highlights */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {researchHighlights.map((highlight, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <highlight.icon className="h-6 w-6 text-blue-600" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{highlight.title}</h3>
              <p className="text-gray-600 text-sm">{highlight.description}</p>
            </div>
          ))}
        </div>

        {/* Market Overview Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-green-100 rounded-lg">
                <TrendingUp className="h-6 w-6 text-green-600" />
              </div>
              <span className="text-sm font-medium text-green-600">+2.34%</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-800">Market Cap</h3>
            <p className="text-3xl font-bold text-gray-900">₹284.7L Cr</p>
            <p className="text-sm text-gray-600 mt-2">Total market capitalization</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-blue-100 rounded-lg">
                <Activity className="h-6 w-6 text-blue-600" />
              </div>
              <span className="text-sm font-medium text-blue-600">Live</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-800">Volume</h3>
            <p className="text-3xl font-bold text-gray-900">456.8M</p>
            <p className="text-sm text-gray-600 mt-2">Daily trading volume</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-purple-100 rounded-lg">
                <BarChart3 className="h-6 w-6 text-purple-600" />
              </div>
              <span className="text-sm font-medium text-purple-600">Active</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-800">Coverage</h3>
            <p className="text-3xl font-bold text-gray-900">1,247</p>
            <p className="text-sm text-gray-600 mt-2">Stocks under coverage</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-red-100 rounded-lg">
                <Award className="h-6 w-6 text-red-600" />
              </div>
              <span className="text-sm font-medium text-red-600">98.5%</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-800">Accuracy</h3>
            <p className="text-3xl font-bold text-gray-900">High</p>
            <p className="text-sm text-gray-600 mt-2">Research accuracy rate</p>
          </div>
        </div>

        {/* Main Content Based on Active Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Market Insights */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Target className="h-6 w-6 mr-2 text-blue-600" />
                Market Insights
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {marketInsights.map((insight, index) => (
                  <div key={index} className="p-4 rounded-lg border border-gray-200 hover:border-blue-300 transition-all duration-300">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold text-gray-800">{insight.title}</h3>
                      {insight.trend === 'up' && <TrendingUp className="h-5 w-5 text-green-500" />}
                      {insight.trend === 'down' && <TrendingDown className="h-5 w-5 text-red-500" />}
                      {insight.trend === 'neutral' && <AlertCircle className="h-5 w-5 text-yellow-500" />}
                    </div>
                    <p className="text-gray-600 text-sm">{insight.content}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Sector Allocation */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <PieChart className="h-6 w-6 mr-2 text-blue-600" />
                Sector Allocation
              </h2>
              <div className="space-y-4">
                {sectors.map((sector, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`w-4 h-4 rounded-full ${sector.color}`}></div>
                      <span className="font-medium text-gray-700">{sector.name}</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div 
                          className={`${sector.color} h-2 rounded-full transition-all duration-300`}
                          style={{ width: `${(sector.allocation / 30) * 100}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-semibold text-gray-600 w-12 text-right">
                        {sector.allocation}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'screener' && (
          <div className="space-y-8">
            {/* Filters */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex flex-wrap gap-4 items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                  <Filter className="h-6 w-6 mr-2 text-blue-600" />
                  Equity Screener
                </h2>
                <div className="flex gap-2">
                  <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    <Download className="h-4 w-4 mr-2" />
                    Export
                  </button>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4 items-center">
                <div className="flex items-center space-x-2">
                  <label className="text-sm font-medium text-gray-700">Sector:</label>
                  <select 
                    value={selectedSector} 
                    onChange={(e) => setSelectedSector(e.target.value)}
                    className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="all">All Sectors</option>
                    <option value="banking">Banking</option>
                    <option value="technology">Technology</option>
                    <option value="energy">Energy</option>
                    <option value="telecom">Telecom</option>
                  </select>
                </div>
                
                <div className="flex items-center space-x-2">
                  <label className="text-sm font-medium text-gray-700">Timeframe:</label>
                  <select 
                    value={selectedTimeframe} 
                    onChange={(e) => setSelectedTimeframe(e.target.value)}
                    className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="1D">1 Day</option>
                    <option value="1W">1 Week</option>
                    <option value="1M">1 Month</option>
                    <option value="1Y">1 Year</option>
                  </select>
                </div>
                
                <div className="flex-1 min-w-64">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input 
                      type="text" 
                      placeholder="Search stocks..." 
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Equity Table */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Stock</th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Change</th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Volume</th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Market Cap</th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {filteredEquities.map((equity, index) => (
                      <tr key={index} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div>
                            <div className="text-sm font-medium text-gray-900">{equity.symbol}</div>
                            <div className="text-sm text-gray-500">{equity.name}</div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          ₹{equity.price.toLocaleString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className={`flex items-center ${equity.change > 0 ? 'text-green-600' : 'text-red-600'}`}>
                            {equity.change > 0 ? <TrendingUp className="h-4 w-4 mr-1" /> : <TrendingDown className="h-4 w-4 mr-1" />}
                            <span className="text-sm font-medium">
                              {equity.change > 0 ? '+' : ''}{equity.change} ({equity.changePercent > 0 ? '+' : ''}{equity.changePercent}%)
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{equity.volume}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{equity.marketCap}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <div className="flex space-x-2">
                            <button className="text-blue-600 hover:text-blue-800 p-1">
                              <Eye className="h-4 w-4" />
                            </button>
                            <button className="text-yellow-600 hover:text-yellow-800 p-1">
                              <Star className="h-4 w-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'analysis' && (
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <LineChart className="h-6 w-6 mr-2 text-blue-600" />
              Advanced Analysis
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="p-6 bg-blue-50 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-900 mb-4">Technical Analysis</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-700">RSI (14)</span>
                      <span className="font-semibold text-blue-600">64.2</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">MACD</span>
                      <span className="font-semibold text-green-600">Bullish</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Support Level</span>
                      <span className="font-semibold text-gray-800">₹2,350</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Resistance Level</span>
                      <span className="font-semibold text-gray-800">₹2,580</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 bg-green-50 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-900 mb-4">Fundamental Analysis</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-700">P/E Ratio</span>
                      <span className="font-semibold text-green-600">18.5</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">EPS Growth</span>
                      <span className="font-semibold text-green-600">+12.3%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">ROE</span>
                      <span className="font-semibold text-green-600">15.8%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Debt/Equity</span>
                      <span className="font-semibold text-gray-800">0.42</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="p-6 bg-purple-50 rounded-lg">
                  <h3 className="text-lg font-semibold text-purple-900 mb-4">AI Recommendations</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                      <p className="text-sm text-gray-700">Strong buy signal based on momentum indicators</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                      <p className="text-sm text-gray-700">Institutional buying activity detected</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                      <p className="text-sm text-gray-700">Monitor for Q4 earnings impact</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 bg-red-50 rounded-lg">
                  <h3 className="text-lg font-semibold text-red-900 mb-4">Risk Assessment</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-700">Volatility</span>
                      <span className="font-semibold text-yellow-600">Medium</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Beta</span>
                      <span className="font-semibold text-gray-800">1.15</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">VaR (5%)</span>
                      <span className="font-semibold text-red-600">-2.8%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Sharpe Ratio</span>
                      <span className="font-semibold text-green-600">1.42</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'reports' && (
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Calendar className="h-6 w-6 mr-2 text-blue-600" />
              Research Reports
            </h2>
            <div className="space-y-6">
              {[
                { title: 'Q4 FY24 Earnings Review', date: '2024-07-01', type: 'Quarterly', status: 'Published' },
                { title: 'Sector Deep Dive: Banking', date: '2024-06-28', type: 'Sector Analysis', status: 'Published' },
                { title: 'Market Outlook: July 2024', date: '2024-06-25', type: 'Market Commentary', status: 'Published' },
                { title: 'ESG Integration in Equity Analysis', date: '2024-06-20', type: 'Special Report', status: 'Published' },
                { title: 'Mid-Cap Opportunities', date: '2024-06-15', type: 'Investment Theme', status: 'Published' }
              ].map((report, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6 hover:border-blue-300 transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{report.title}</h3>
                      <p className="text-sm text-gray-600 mt-1">{report.type} • {report.date}</p>
                    </div>
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">
                      {report.status}
                    </span>
                  </div>
                  <div className="flex space-x-4">
                    <button className="flex items-center text-blue-600 hover:text-blue-800 text-sm">
                      <Eye className="h-4 w-4 mr-1" />
                      View Report
                    </button>
                    <button className="flex items-center text-gray-600 hover:text-gray-800 text-sm">
                      <Download className="h-4 w-4 mr-1" />
                      Download PDF
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Equity;