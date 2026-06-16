/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { TourBooking, TourPackage, Lead } from '../types';

interface DashboardScreenProps {
  bookings: TourBooking[];
  packages: TourPackage[];
  leads: Lead[];
  onNavigate: (screenId: string) => void;
}

export default function DashboardScreen({ bookings, packages, leads, onNavigate }: DashboardScreenProps) {
  const [hoveredDataPoint, setHoveredDataPoint] = useState<{ id: number; x: number; y: number; label: string; value: number } | null>(null);
  const [monthlyTarget, setMonthlyTarget] = useState<number>(2000000); // 20 Lakhs default
  const [activeRevenueTab, setActiveRevenueTab] = useState<'all' | 'secured' | 'pipeline'>('all');

  // Math variables
  const totalLeads = leads.length;
  const newLeadsCount = leads.filter(l => l.status === 'new').length;
  
  // Total pipeline value
  const totalPipeline = bookings.reduce((sum, b) => b.status !== 'completed' ? sum + b.amount : sum, 0);
  const securedRevenue = bookings
    .filter(b => b.status === 'advance' || b.status === 'confirmed' || b.status === 'completed')
    .reduce((sum, b) => sum + b.amount, 0);
  
  const completedRevenue = bookings
    .filter(b => b.status === 'completed')
    .reduce((sum, b) => sum + b.amount, 0);

  const totalOverallValue = bookings.reduce((sum, b) => sum + b.amount, 0);

  // Active trips departing soon
  const activeBookingsCount = bookings.filter(b => b.status === 'confirmed' || b.status === 'advance').length;

  // Category counts
  const categories: Record<string, number> = { school: 0, college: 0, family: 0, corporate: 0, devotional: 0 };
  bookings.forEach(b => {
    categories[b.category] = (categories[b.category] || 0) + b.paxCount;
  });

  const totalPax = Object.values(categories).reduce((sum, c) => sum + c, 0) || 1;

  // Render Category proportions
  const categoryKeys = Object.keys(categories);
  const colors: Record<string, string> = {
    school: '#3B82F6',   // Blue
    college: '#8B5CF6',  // Purple
    family: '#10B981',   // Emerald
    corporate: '#F59E0B', // Amber
    devotional: '#EF4444' // Rose
  };
  const bgLightColors: Record<string, string> = {
    school: 'bg-blue-500/10 text-blue-400',
    college: 'bg-purple-500/10 text-purple-400',
    family: 'bg-emerald-500/10 text-emerald-400',
    corporate: 'bg-amber-500/10 text-amber-400',
    devotional: 'bg-rose-500/10 text-rose-400'
  };

  // SVG Chart data: Sales for the past 6 bookings
  const sortedBookingsForChart = [...bookings]
    .sort((a, b) => new Date(a.createdDate).getTime() - new Date(b.createdDate).getTime())
    .slice(-6);

  const chartPoints = sortedBookingsForChart.map((b, idx) => ({
    id: idx,
    label: b.institution.length > 12 ? b.institution.slice(0, 10) + '..' : b.institution,
    value: b.amount,
    fullLabel: b.institution,
    date: b.createdDate
  }));

  // SVG chart boundaries (380x150 width x height)
  const chartWidth = 520;
  const chartHeight = 160;
  const paddingX = 45;
  const paddingY = 25;

  const maxChartVal = Math.max(...chartPoints.map(p => p.value), 400000);
  const minChartVal = 0;

  const pointsString = chartPoints.map((p, idx) => {
    const x = paddingX + (idx / (chartPoints.length - 1 || 1)) * (chartWidth - paddingX * 2);
    const y = chartHeight - paddingY - ((p.value - minChartVal) / (maxChartVal - minChartVal || 1)) * (chartHeight - paddingY * 2);
    return `${x},${y}`;
  }).join(' ');

  // Fill polygon coordinates
  const fillPointsString = pointsString ? `${paddingX},${chartHeight - paddingY} ${pointsString} ${chartWidth - paddingX},${chartHeight - paddingY}` : '';

  // Calculate current goal progress
  const targetProgress = Math.min((securedRevenue / monthlyTarget) * 100, 100);

  // Format currency helper
  const fNum = (num: number) => {
    if (num >= 100000) {
      return `₹${(num / 100000).toFixed(2)}L`;
    }
    return `₹${num.toLocaleString('en-IN')}`;
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto" id="dashboard-tab-panel" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      
      {/* Dynamic Summary Cards */}
      <div className="stats-row">
        
        {/* KPI 1: Secured Revenue */}
        <div className="stat-box">
          <div className="sl">Secured Revenue</div>
          <div className="sv" style={{ color: 'var(--gold)' }}>{fNum(securedRevenue)}</div>
          <div className="ss">Advance + Confirmed + Completed</div>
        </div>

        {/* KPI 2: Pipeline Value */}
        <div className="stat-box">
          <div className="sl">Pipeline Drafts</div>
          <div className="sv">{fNum(totalPipeline)}</div>
          <div className="ss">Queries & Quoted ({bookings.filter(b => b.status === 'enquiry' || b.status === 'quote').length} trips)</div>
        </div>

        {/* KPI 3: Inflow Leads */}
        <div className="stat-box">
          <div className="sl">Leads Inbox</div>
          <div className="sv">{totalLeads} Leads</div>
          <div className="ss" style={{ color: 'var(--red-tx)', fontWeight: 'bold' }}>{newLeadsCount} unresolved today</div>
        </div>

        {/* KPI 4: Active Fleet Excursions */}
        <div className="stat-box">
          <div className="sl">Active departures</div>
          <div className="sv">{activeBookingsCount} lock-ins</div>
          <div className="ss">Guaranteed bus assignment</div>
        </div>

      </div>

      {/* Analytics Visualization Panel with custom interactive SVG charts */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6" style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '24px' }}>
        
        {/* Sales trends and custom SVG Chart */}
        <div className="lg:col-span-8" style={{ gridColumn: 'span 8 / span 8', background: 'var(--bg2)', border: '0.5px solid var(--border)', borderRadius: '10px', padding: '20px' }}>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-5" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
            <div style={{ textAlign: 'left' }}>
              <h3 className="text-sm font-semibold tracking-wide font-display" style={{ color: 'var(--text)' }}>
                Dynamic Sales pipeline & Inflow Trend
              </h3>
              <p className="text-xs" style={{ color: 'var(--text-3)' }}>Tracking most recent 6 institution bookings and valuation index</p>
            </div>
            
            {/* Legend / Tabs */}
            <div className="flex items-center gap-1.5 self-start">
              <span className="text-[10px] px-2.5 py-1 rounded-md font-mono" style={{ background: 'var(--gold-bg)', color: 'var(--warn-tx)', border: '0.5px solid var(--border-md)' }}>
                Interactive Graph
              </span>
            </div>
          </div>

          {/* SVG Container wrapped in absolute relative */}
          <div className="relative pt-1 overflow-x-auto">
            {chartPoints.length === 0 ? (
              <div className="h-44 flex items-center justify-center text-xs" style={{ color: 'var(--text-3)', height: '176px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                Not enough booking points to compute trends. Raise booking entries.
              </div>
            ) : (
              <div className="min-w-[480px]">
                <svg viewBox={`0 0 ${chartWidth} ${chartHeight}`} className="w-full h-auto overflow-visible select-none">
                  {/* Grid Lines */}
                  {[0, 0.25, 0.5, 0.75, 1].map((ratio, i) => {
                    const yVal = chartHeight - paddingY - ratio * (chartHeight - paddingY * 2);
                    const gridLabel = ratio * maxChartVal;
                    return (
                      <g key={i} className="opacity-40">
                        <line 
                          x1={paddingX} 
                          y1={yVal} 
                          x2={chartWidth - paddingX} 
                          y2={yVal} 
                          stroke="var(--border-md)" 
                          strokeWidth="0.5" 
                        />
                        <text 
                          x={paddingX - 8} 
                          y={yVal + 3} 
                          fill="var(--text-3)" 
                          fontSize="8" 
                          textAnchor="end"
                          className="font-mono"
                        >
                          {gridLabel >= 100000 ? `${(gridLabel/100000).toFixed(1)}L` : gridLabel}
                        </text>
                      </g>
                    );
                  })}

                  {/* Shaded Area under spline */}
                  <polygon 
                    points={fillPointsString} 
                    fill="url(#goldGradientFill)" 
                    opacity="0.12"
                  />

                  {/* Connected line spline */}
                  <polyline 
                    points={pointsString} 
                    fill="none" 
                    stroke="var(--gold)" 
                    strokeWidth="2.5" 
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  {/* Hover Interceptors and node circles */}
                  {chartPoints.map((p, idx) => {
                    const x = paddingX + (idx / (chartPoints.length - 1 || 1)) * (chartWidth - paddingX * 2);
                    const y = chartHeight - paddingY - ((p.value - minChartVal) / (maxChartVal - minChartVal || 1)) * (chartHeight - paddingY * 2);
                    
                    return (
                      <g key={idx}>
                        {/* Interactive vertical reference line on hover */}
                        {hoveredDataPoint && hoveredDataPoint.id === idx && (
                          <line 
                            x1={x} 
                            y1={paddingY} 
                            x2={x} 
                            y2={chartHeight - paddingY} 
                            stroke="var(--gold-lt)" 
                            strokeWidth="1" 
                            strokeDasharray="2,2"
                          />
                        )}

                        {/* Node circle */}
                        <circle 
                          cx={x} 
                          cy={y} 
                          r={hoveredDataPoint && hoveredDataPoint.id === idx ? "5" : "3.5"} 
                          fill={hoveredDataPoint && hoveredDataPoint.id === idx ? "var(--gold-lt)" : "var(--bg)"} 
                          stroke="var(--gold)" 
                          strokeWidth="2" 
                          className="cursor-pointer transition-all duration-100"
                          onMouseEnter={(e) => {
                            setHoveredDataPoint({
                              id: idx,
                              x,
                              y,
                              label: p.fullLabel,
                              value: p.value
                            });
                          }}
                          onMouseLeave={() => setHoveredDataPoint(null)}
                        />

                        {/* Label beneath Nodes */}
                        <text 
                          x={x} 
                          y={chartHeight - paddingY + 14} 
                          fill="var(--text-2)" 
                          fontSize="8.5" 
                          textAnchor="middle"
                          className="font-medium"
                        >
                          {p.label}
                        </text>
                      </g>
                    );
                  })}

                  {/* Gradients declarations */}
                  <defs>
                    <linearGradient id="goldGradientFill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="var(--gold)" />
                      <stop offset="100%" stopColor="var(--bg2)" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* SVG Live Tooltip Overlap */}
                {hoveredDataPoint && (
                  <div 
                    className="absolute rounded p-2 text-[11px] pointer-events-none shadow-xl z-10"
                    style={{
                      left: `${(hoveredDataPoint.x / chartWidth) * 100}%`,
                      top: `${(hoveredDataPoint.y / chartHeight) * 100 - 35}%`,
                      transform: 'translateX(-50%)',
                      background: 'var(--dark)',
                      border: '0.5px solid var(--gold)',
                      color: 'var(--text)'
                    }}
                  >
                    <div className="font-bold whitespace-nowrap" style={{ color: '#F0C56A' }}>{hoveredDataPoint.label}</div>
                    <div className="font-mono font-medium">₹{hoveredDataPoint.value.toLocaleString('en-IN')}</div>
                  </div>
                )}
              </div>
            )}
          </div>
          
          <div className="mt-4 pt-3 border-t flex flex-wrap items-center justify-between text-[11px] gap-2" style={{ display: 'flex', justifyContent: 'space-between', marginTop: '16px', paddingTop: '12px', borderTop: '0.5px solid var(--border)', color: 'var(--text-3)' }}>
            <span>💡 Hover over nodes to preview booking valuations instantly.</span>
            <span>Based on modern real-time CRM indices</span>
          </div>
        </div>

        {/* Dynamic Category segment proportion breakdown */}
        <div className="lg:col-span-4 flex flex-col justify-between" style={{ gridColumn: 'span 4 / span 4', background: 'var(--bg2)', border: '0.5px solid var(--border)', borderRadius: '10px', padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <h3 className="text-sm font-semibold tracking-wide font-display text-left" style={{ color: 'var(--text)' }}>
              Target Audience Breakdown
            </h3>
            <p className="text-xs text-left mb-4" style={{ color: 'var(--text-3)', marginBottom: '16px' }}>Total headcount pax allocation index</p>
            
            {/* Segment Ratio visual bars */}
            <div className="space-y-3.5 my-4" style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {categoryKeys.map((catKey) => {
                const valueOfPax = categories[catKey] || 0;
                const percentage = Math.round((valueOfPax / totalPax) * 100) || 0;
                return (
                  <div key={catKey} className="space-y-1" style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <div className="flex items-center justify-between text-xs" style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span className="capitalize font-medium flex items-center gap-1.5" style={{ color: 'var(--text-2)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <span className="w-2.5 h-2.5 rounded-full" style={{ display: 'inline-block', width: '10px', height: '10px', borderRadius: '50%', backgroundColor: colors[catKey] }} />
                        {catKey}
                      </span>
                      <span className="font-mono" style={{ color: 'var(--text-3)' }}>{valueOfPax} pax ({percentage}%)</span>
                    </div>
                    {/* Visual Segment Progress Bar */}
                    <div className="w-full h-1.5 rounded-full overflow-hidden" style={{ width: '100%', height: '6px', borderRadius: '3px', backgroundColor: 'var(--bg3)' }}>
                      <div 
                        className="h-full rounded-full transition-all duration-500"
                        style={{ 
                          height: '100%',
                          borderRadius: '3px',
                          width: `${percentage}%`,
                          backgroundColor: colors[catKey] 
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="pt-3" style={{ paddingTop: '12px', borderTop: '0.5px solid var(--border)' }}>
            <div className="p-2 rounded-lg flex items-start gap-2 text-left" style={{ background: 'var(--gold-bg)', border: '0.5px solid var(--border-md)', display: 'flex', alignItems: 'flex-start', gap: '8px', padding: '10px', borderRadius: '8px' }}>
              <i className="ti ti-sparkles" style={{ color: 'var(--gold)', fontSize: '14px', marginTop: '2px' }}></i>
              <div className="text-[10px]" style={{ color: 'var(--text-2)' }}>
                School and College groups generate <strong style={{ color: 'var(--text)' }}>{(totalPax > 1 ? ((categories['school'] + categories['college']) / totalPax * 100).toFixed(0) : '0')}%</strong> of overall Kerala volume.
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Booking Goal meter + High Priority operations */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }}>

        {/* Goal Indicator and Interactive monthly revenue target */}
        <div style={{ background: 'var(--bg2)', border: '0.5px solid var(--border)', borderRadius: '10px', padding: '20px', textAlign: 'left' }}>
          <div className="flex items-center justify-between mb-4" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <div className="flex items-center gap-2" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <i className="ti ti-target" style={{ color: 'var(--gold)', fontSize: '18px' }}></i>
              <h3 className="text-sm font-semibold tracking-wide font-display" style={{ color: 'var(--text)' }}>
                Monthly Target Tracker
              </h3>
            </div>
            <span className="badge b-green" style={{ padding: '4px 8px' }}>
              Financial Goal
            </span>
          </div>

          <div className="space-y-4" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div className="flex items-end justify-between" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
              <div>
                <span className="text-[11px] block text-left" style={{ color: 'var(--text-3)' }}>Current Secured Inflow</span>
                <span className="text-2xl font-bold font-mono" style={{ color: 'var(--text)' }}>{fNum(securedRevenue)}</span>
              </div>
              <div className="text-right">
                <span className="text-[11px] block" style={{ color: 'var(--text-3)' }}>Monthly Board Target</span>
                {/* Editable target selector */}
                <div className="flex items-center gap-1.5 justify-end" style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '4px' }}>
                  <select 
                    value={monthlyTarget} 
                    onChange={(e) => setMonthlyTarget(Number(e.target.value))}
                    className="mini"
                  >
                    <option value={1000000}>₹10 Lakhs</option>
                    <option value={1500000}>₹15 Lakhs</option>
                    <option value={2000000}>₹20 Lakhs</option>
                    <option value={2500000}>₹25 Lakhs</option>
                    <option value={3000000}>₹30 Lakhs</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Target Slider Meter Display */}
            <div className="space-y-1.5" style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <div className="w-full h-3.5 rounded-full p-0.5 overflow-hidden" style={{ width: '100%', height: '14px', borderRadius: '7px', padding: '2px', backgroundColor: 'var(--bg3)' }}>
                <div 
                  className="h-full rounded-full flex items-center justify-end pr-1 transition-all duration-300"
                  style={{ 
                    height: '100%',
                    borderRadius: '5px',
                    width: `${targetProgress}%`,
                    background: 'linear-gradient(to right, var(--gold), var(--gold-lt), var(--green-tx))',
                    display: 'flex',
                    justifyContent: 'flex-end',
                    paddingRight: '6px'
                  }}
                >
                  <span className="text-[8px] font-black font-mono" style={{ color: 'var(--dark)' }}>
                    {targetProgress.toFixed(0)}%
                  </span>
                </div>
              </div>
              <div className="flex justify-between text-[9px] font-mono" style={{ display: 'flex', justifyContent: 'space-between', fontSize: '9px', color: 'var(--text-3)' }}>
                <span>₹0</span>
                <span>50%</span>
                <span>Target: {fNum(monthlyTarget)}</span>
              </div>
            </div>

            <div className="p-3 text-xs space-y-1 text-left" style={{ background: 'var(--bg)', border: '0.5px solid var(--border)', padding: '12px', borderRadius: '8px', color: 'var(--text-2)' }}>
              <div className="font-semibold flex items-center gap-1" style={{ color: 'var(--text)', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <i className="ti ti-sparkles" style={{ color: 'var(--gold)', fontSize: '13px' }}></i>
                Target Analysis
              </div>
              {securedRevenue >= monthlyTarget ? (
                <p style={{ marginTop: '4px' }}>🏆 Incredible! Emirates Expedition has crossed the monthly target milestone. Profit margin index is healthy this month!</p>
              ) : (
                <p style={{ marginTop: '4px' }}>📈 Needs <strong style={{ color: 'var(--text)' }}>{fNum(monthlyTarget - securedRevenue)}</strong> more in secured bookings to touch this goal. Try converting the hot lead inquiries from MG College or Govt Poly Palakkad.</p>
              )}
            </div>
          </div>
        </div>

        {/* High Priority Alerts and Active Events notifications */}
        <div style={{ background: 'var(--bg2)', border: '0.5px solid var(--border)', borderRadius: '10px', padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', textAlign: 'left' }}>
          <div>
            <div className="flex items-center justify-between mb-4" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <div className="flex items-center gap-2" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <i className="ti ti-clock" style={{ color: 'var(--gold)', fontSize: '18px' }}></i>
                <h3 className="text-sm font-semibold tracking-wide font-display" style={{ color: 'var(--text)' }}>
                  Operational Queue &amp; Reminders
                </h3>
              </div>
              <span className="badge b-red">
                Action Required
              </span>
            </div>

            {/* Quick reminders of system states */}
            <div className="space-y-2.5" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div className="flex gap-2.5 items-start text-xs text-left" style={{ background: 'var(--bg)', borderLeft: '3px solid var(--red-tx)', padding: '10px', borderRadius: '8px', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <i className="ti ti-alert-triangle" style={{ color: 'var(--red-tx)', fontSize: '16px', marginTop: '2px' }}></i>
                <div>
                  <div className="font-semibold text-gray-200" style={{ fontWeight: 'bold', color: 'var(--text)' }}>11 Unresolved WhatsApp Queries</div>
                  <p className="text-[10px]" style={{ fontSize: '10px', color: 'var(--text-3)', marginTop: '2px' }}>Longest query untouched is 12h+ from Sreekanth Felix (St. Francis School).</p>
                </div>
              </div>

              <div className="flex gap-2.5 items-start text-xs text-left" style={{ background: 'var(--bg)', borderLeft: '3px solid var(--gold)', padding: '10px', borderRadius: '8px', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <i className="ti ti-clock" style={{ color: 'var(--gold)', fontSize: '16px', marginTop: '2px' }}></i>
                <div>
                  <div className="font-semibold text-gray-200" style={{ fontWeight: 'bold', color: 'var(--text)' }}>Departing schedule in 24 hours</div>
                  <p className="text-[10px]" style={{ fontSize: '10px', color: 'var(--text-3)', marginTop: '2px' }}>GHSS Thonnakkal (Munnar 3-Day Trip) starts departure. Confirm Bus driver list loaded.</p>
                </div>
              </div>

              <div className="flex gap-2.5 items-start text-xs text-left" style={{ background: 'var(--bg)', borderLeft: '3px solid var(--green-tx)', padding: '10px', borderRadius: '8px', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <i className="ti ti-checkbox" style={{ color: 'var(--green-tx)', fontSize: '16px', marginTop: '2px' }}></i>
                <div>
                  <div className="font-semibold text-gray-200" style={{ fontWeight: 'bold', color: 'var(--text)' }}>All Bus Partners Active</div>
                  <p className="text-[10px]" style={{ fontSize: '10px', color: 'var(--text-3)', marginTop: '2px' }}>Anora Travels and Royal Crown coaches have verified GPS trackers running.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 text-right" style={{ borderTop: '0.5px solid var(--border)', marginTop: '16px', paddingTop: '12px', textAlign: 'right' }}>
            <button 
              onClick={() => onNavigate('bookings')}
              className="btn-s"
            >
              Go to Booking Pipeline <i className="ti ti-arrow-right" style={{ fontSize: '11px', marginLeft: '4px' }}></i>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
