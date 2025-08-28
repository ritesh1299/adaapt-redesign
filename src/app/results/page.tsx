"use client";

import { useState } from 'react';
import Navigation from '@/components/sections/navigation';
import { useQuery } from '@/lib/store';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Send, Share, Download, ChevronDown, CheckCircle, AlertTriangle } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, LineChart, Line, Area, AreaChart, PieChart, Pie, Cell, Legend } from 'recharts';

const LastVsThis = { last: 54110, this: 59240 };
const Daily = [1620,1775,1910,1860,2025,2105,1950,2010,1930,2060,2140,2080,1995,2210,2155,2050,2190,2260,2295,2240,2180,2310,2375,2430,2390,2465,2520,2480,2540,2595];
const TopCustomers = [
  {name:"Orion Retail", value:182500},
  {name:"Northstar LLC", value:173200},
  {name:"Quantum Foods", value:165800},
  {name:"BluePeak Inc.", value:159300},
  {name:"Citrus Labs", value:153900}
];
const RevenueByCategory = [
  {name:"Electronics", value:32},
  {name:"Home & Kitchen", value:21},
  {name:"Apparel", value:18},
  {name:"Beauty", value:12},
  {name:"Sports", value:9},
  {name:"Other", value:8}
];
const ComparativeTable = [
  ["Alpha Headphones","11,240","$562k","+4.2%","+9.8%","+15.3%"],
  ["Nova Smartwatch","8,910","$498k","+2.8%","+7.1%","+11.9%"],
  ["Aero Blender","7,360","$341k","-1.1%","+3.4%","+6.2%"],
  ["Polar Kettle","6,820","$312k","+0.7%","+2.6%","+5.1%"],
  ["Vega Sneakers","6,410","$289k","+3.0%","+4.8%","+8.7%"]
];

const COLORS = ['#4f84ff', '#8b5cf6', '#ec4899', '#f59e0b', '#10b981', '#ef4444'];

export default function ResultsAnalysisPage() {
  const { state } = useQuery();
  const [followUpInput, setFollowUpInput] = useState("");
  const [forecastExpanded, setForecastExpanded] = useState(false);

  const barData = [
    { name: 'Last Month', value: LastVsThis.last },
    { name: 'This Month', value: LastVsThis.this }
  ];

  const dailyData = Daily.map((value, index) => ({
    day: index + 1,
    transactions: value
  }));

  const handleFollowUp = () => {
    if (followUpInput.trim()) {
      console.log("Follow-up query:", followUpInput);
      setFollowUpInput("");
    }
  };

  const handleQuickAction = (action: string) => {
    console.log("Quick action:", action);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-start justify-between mb-6">
            <h2 className="text-3xl font-semibold text-gray-900">
              {state.query_text || "Transaction Analysis Report"}
            </h2>
            
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <span>Scope {state.current_dataset || "Sales Data"}</span>
              <span>Last refresh: Today</span>
              <span>Version v1.0</span>
              <span className="text-green-600">Diff +2.4%</span>
              <Button variant="outline" size="sm" className="h-8">
                <Share className="w-4 h-4 mr-1" />
                Share
              </Button>
              <Button variant="outline" size="sm" className="h-8">
                <Download className="w-4 h-4 mr-1" />
                Export
                <ChevronDown className="w-3 h-3 ml-1" />
              </Button>
            </div>
          </div>
          <div className="h-px bg-gray-200" />
        </div>

        <div className="grid grid-cols-12 gap-8">
          {/* Main Content */}
          <div className="col-span-8 space-y-8">
            {/* Top Charts Row */}
            <div className="grid grid-cols-2 gap-6">
              {/* Bar Chart */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-lg font-medium mb-4">Transactions: This vs Last Month</h3>
                <ResponsiveContainer width="100%" height={200}>
                  <BarChart data={barData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
                    <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                    <YAxis tick={{ fontSize: 12 }} />
                    <Bar dataKey="value" fill="#4f84ff" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              {/* Line Chart */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-lg font-medium mb-4">Daily Transactions (last 30 days)</h3>
                <ResponsiveContainer width="100%" height={200}>
                  <AreaChart data={dailyData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
                    <XAxis dataKey="day" tick={{ fontSize: 12 }} />
                    <YAxis tick={{ fontSize: 12 }} />
                    <Area 
                      type="monotone" 
                      dataKey="transactions" 
                      stroke="#4f84ff" 
                      strokeWidth={2.5}
                      fill="#4f84ff"
                      fillOpacity={0.12}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Second Charts Row */}
            <div className="grid grid-cols-2 gap-6">
              {/* Horizontal Bar Chart */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-lg font-medium mb-4">Top 5 customers by sales ($)</h3>
                <div className="space-y-3">
                  {TopCustomers.map((customer, index) => (
                    <div key={customer.name} className="flex items-center gap-3">
                      <div className="w-32 text-sm font-medium truncate">{customer.name}</div>
                      <div className="flex-1 bg-gray-100 rounded-full h-6 relative">
                        <div 
                          className="bg-blue-500 h-6 rounded-full flex items-center justify-end pr-2"
                          style={{ width: `${(customer.value / TopCustomers[0].value) * 100}%` }}
                        >
                          <span className="text-xs text-white font-medium">
                            ${(customer.value / 1000).toFixed(0)}k
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Donut Chart */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-lg font-medium mb-4">Revenue by category (%)</h3>
                <div className="flex items-center gap-4">
                  <div className="flex-1">
                    <ResponsiveContainer width="100%" height={200}>
                      <PieChart>
                        <Pie
                          data={RevenueByCategory}
                          cx="50%"
                          cy="50%"
                          innerRadius={40}
                          outerRadius={80}
                          dataKey="value"
                        >
                          {RevenueByCategory.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                      </PieChart>
                    </ResponsiveContainer>
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <span className="text-lg font-semibold">100%</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    {RevenueByCategory.map((item, index) => (
                      <div key={item.name} className="flex items-center gap-2 text-sm">
                        <div 
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: COLORS[index % COLORS.length] }}
                        />
                        <span>{item.name}</span>
                        <span className="text-gray-500">{item.value}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Summary */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-medium mb-4">Summary</h3>
              <p className="text-gray-700 leading-relaxed">
                Transactions rose 9.5% MoM (59.2k vs 54.1k). Electronics leads category mix (32%). 
                North shows strongest YoY growth (+12.6%). Daily performance indicates consistent 
                upward momentum with 9 local highs observed in the last 30 days.
              </p>
            </div>

            {/* Key Insights */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-medium mb-4">Key Insights</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-lg">✅</span>
                  <span className="text-gray-700">North region leads YoY growth (+12.6%)</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-lg">🔍</span>
                  <span className="text-gray-700">Top 5 customers contribute ~27% revenue</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-lg">📈</span>
                  <span className="text-gray-700">9 local highs in last 30 days</span>
                </div>
              </div>
            </div>

            {/* Comparative Analysis Table */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-medium mb-4">Comparative Analysis</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-2 font-medium text-gray-700">Item</th>
                      <th className="text-left py-3 px-2 font-medium text-gray-700">Units</th>
                      <th className="text-left py-3 px-2 font-medium text-gray-700">Revenue</th>
                      <th className="text-left py-3 px-2 font-medium text-gray-700">WoW</th>
                      <th className="text-left py-3 px-2 font-medium text-gray-700">MoM</th>
                      <th className="text-left py-3 px-2 font-medium text-gray-700">YoY</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ComparativeTable.map((row, index) => (
                      <tr key={index} className="border-b border-gray-100">
                        <td className="py-3 px-2 font-medium">{row[0]}</td>
                        <td className="py-3 px-2 text-gray-600">{row[1]}</td>
                        <td className="py-3 px-2 text-gray-600">{row[2]}</td>
                        <td className={`py-3 px-2 ${row[3].startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                          {row[3]}
                        </td>
                        <td className={`py-3 px-2 ${row[4].startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                          {row[4]}
                        </td>
                        <td className={`py-3 px-2 ${row[5].startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                          {row[5]}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Forecast Section */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <div 
                className="flex items-center justify-between cursor-pointer"
                onClick={() => setForecastExpanded(!forecastExpanded)}
              >
                <h3 className="text-lg font-medium">Forecast</h3>
                <ChevronDown className={`w-5 h-5 transition-transform ${forecastExpanded ? 'rotate-180' : ''}`} />
              </div>
              {forecastExpanded && (
                <div className="mt-4 space-y-3">
                  <p className="text-gray-700">
                    Projected next month ≈ 61.5k ± 2.4k (95% CI) via Holt–Winters exponential smoothing
                  </p>
                  <div className="text-sm text-gray-600">
                    <p>• Assumes seasonal patterns continue</p>
                    <p>• Market conditions remain stable</p>
                  </div>
                </div>
              )}
            </div>

            {/* Actionable Recommendations */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-medium mb-4">Actionable Recommendations</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <span className="text-gray-700">Focus marketing spend on North region to capitalize on momentum</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <span className="text-gray-700">Develop retention programs for top 5 customers</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <span className="text-gray-700">Increase Electronics inventory ahead of peak season</span>
                </div>
              </div>
            </div>

            {/* Risks & Alerts */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-medium mb-4">Risks & Alerts</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 bg-amber-50 border border-amber-200 rounded-lg">
                  <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5" />
                  <span className="text-amber-800">Customer concentration risk: Top 5 represent 27% of revenue</span>
                </div>
                <div className="flex items-start gap-3 p-3 bg-red-50 border border-red-200 rounded-lg">
                  <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5" />
                  <span className="text-red-800">Aero Blender showing negative WoW growth (-1.1%)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="col-span-4">
            <div className="sticky top-8 space-y-6">
              {/* Follow-up Input */}
              <div className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm">
                <div className="flex items-center gap-2">
                  <Input
                    placeholder="Ask a follow-up…"
                    value={followUpInput}
                    onChange={(e) => setFollowUpInput(e.target.value)}
                    className="flex-1 h-11 bg-gray-50/50 border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20"
                    onKeyPress={(e) => e.key === 'Enter' && handleFollowUp()}
                  />
                  <Button 
                    size="sm"
                    onClick={handleFollowUp}
                    className="h-11 w-11 p-0 bg-blue-500 hover:bg-blue-600"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm">
                <div className="space-y-3">
                  {[
                    'Compare by region',
                    'Add margin %',
                    'Forecast next month',
                    'See returns rate',
                    'Top 5 by revenue',
                    'Share as PDF'
                  ].map((action) => (
                    <Button
                      key={action}
                      variant="ghost"
                      className="w-full justify-start h-10 text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                      onClick={() => handleQuickAction(action)}
                    >
                      {action}
                    </Button>
                  ))}
                </div>
              </div>

              {/* History Note */}
              <div className="text-center">
                <p className="text-sm text-gray-500">
                  History appears after first exchange.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}