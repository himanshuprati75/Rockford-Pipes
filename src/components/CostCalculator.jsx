import React, { useState, useEffect } from 'react';
import { Calculator, ArrowRight, ShieldCheck, DollarSign, Clock, Zap, CheckCircle2, AlertCircle, Sparkles, Droplets, Flame, Award, Wrench, Home } from 'lucide-react';

export default function CostCalculator({ selectedIssue, onSelectIssue, onApplyVoucher }) {
  const serviceOptions = [
    {
      id: 'burst_pipe',
      category: 'plumbing',
      name: 'Burst Pipe & Emergency Leak Repair',
      baseRange: '$149 - $329',
      dispatchTime: 'Immediate Rockford Dispatch (Under 60 Min)',
      typicalSavings: 'Prevents $5,000+ in Mold & Water Damage',
      description: 'Rapid leak isolation, copper pipe sweating, ProPress brass crimp, or PEX section replacement.',
    },
    {
      id: 'water_heater',
      category: 'water_heater',
      name: 'Water Heater Replacement (Tank & Tankless)',
      baseRange: '$799 - $1,750 Installed',
      dispatchTime: 'Same-Day Install Available',
      typicalSavings: 'Save $250 - $500 vs Big Box Franchises',
      description: 'Full code-compliant install, expansion tank, brass shut-off valve, old tank haul-away included.',
    },
    {
      id: 'drain',
      category: 'plumbing',
      name: 'Drain Cleaning & Main Line Rooter',
      baseRange: '$99 - $229',
      dispatchTime: 'Same-Day / Within 2 Hours',
      typicalSavings: 'Free Camera Inspection with Snaking',
      description: 'Heavy duty rooter machinery, grease removal, sewer lateral clearing, and toilet reset if required.',
    },
    {
      id: 'remodel',
      category: 'remodel',
      name: 'Tub-to-Shower Conversion & Bath Remodel',
      baseRange: '$3,800 - $7,900 Complete',
      dispatchTime: 'Free Same-Week Design Estimate',
      typicalSavings: 'Up to 40% Less Than High-Pressure Franchises',
      description: 'Convert old steel/cast tubs into modern walk-in showers with premium fixtures and sliding glass.',
    },
    {
      id: 'hvac',
      category: 'hvac',
      name: 'Furnace & AC Repair / Diagnostic',
      baseRange: '$89 Flat Diagnostic',
      dispatchTime: '24/7 Illinois Emergency Dispatch',
      typicalSavings: '$89 Diagnostic Waived with Approved Repair',
      description: 'Complete electrical, control board, burner, and refrigerant check. Upfront price before repair.',
    },
    {
      id: 'mobile_home',
      category: 'mobile_home',
      name: 'Mobile Home Plumbing & Heat Tape',
      baseRange: '$149 - $379',
      dispatchTime: 'Same-Day Specialists',
      typicalSavings: 'Prevents Catastrophic Winter Freeze-Ups',
      description: 'Specialized manufactured home fittings, underbelly pipe reinsulation, self-regulating heat tape.',
    },
  ];

  const [activeCategory, setActiveCategory] = useState('all');
  const [activeService, setActiveService] = useState(selectedIssue || 'burst_pipe');
  const [propertyType, setPropertyType] = useState('residential');
  const [urgency, setUrgency] = useState('immediate');

  const filterTabs = [
    { id: 'all', label: 'All Services (6)' },
    { id: 'plumbing', label: 'Leaks & Drains' },
    { id: 'water_heater', label: 'Water Heaters' },
    { id: 'remodel', label: 'Tub-to-Shower' },
    { id: 'hvac', label: 'Heating & AC' },
  ];

  useEffect(() => {
    if (selectedIssue) {
      setActiveService(selectedIssue);
    }
  }, [selectedIssue]);

  const currentService = serviceOptions.find(s => s.id === activeService) || serviceOptions[0];

  const filteredOptions = activeCategory === 'all'
    ? serviceOptions
    : serviceOptions.filter(s => s.category === activeCategory);

  const handleApplyToForm = () => {
    onSelectIssue(activeService);
    if (onApplyVoucher) {
      onApplyVoucher({
        service: currentService.name,
        serviceId: activeService,
        voucherApplied: true,
      });
    }
    const formElement = document.getElementById('dispatch-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="calculator" className="bg-slate-100/80 py-12 sm:py-16 border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-pipe-700 bg-pipe-100/70 border border-pipe-300 px-3 py-1 rounded-full mb-3">
            <Calculator className="w-3.5 h-3.5 text-pipe-600" />
            <span>Interactive Transparent Pricing Engine</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-steel-950 tracking-tight">
            Check Your Transparent Price Estimate Before Calling
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            No surprise dispatch fees. No corporate markups. We guarantee the best price in Rockford.
          </p>
        </div>

        {/* Main Calculator Box */}
        <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Options Column (7 cols) */}
            <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-slate-200 space-y-6">
              
              {/* Category Filter Tabs */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5">
                  Step 1: Filter &amp; Select Service
                </label>
                
                {/* 5 Separated Category Tabs */}
                <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none mb-3">
                  {filterTabs.map((tab) => {
                    const isSelected = activeCategory === tab.id;
                    return (
                      <button
                        key={tab.id}
                        type="button"
                        onClick={() => setActiveCategory(tab.id)}
                        className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all whitespace-nowrap ${
                          isSelected
                            ? 'bg-pipe-700 text-white shadow-sm'
                            : 'bg-slate-100 text-slate-600 hover:text-steel-950 hover:bg-slate-200'
                        }`}
                      >
                        {tab.label}
                      </button>
                    );
                  })}
                </div>

                {/* Service Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {filteredOptions.map((service) => {
                    const isSelected = activeService === service.id;
                    return (
                      <button
                        key={service.id}
                        type="button"
                        onClick={() => {
                          setActiveService(service.id);
                          onSelectIssue(service.id);
                        }}
                        className={`p-3 rounded-xl border text-left transition-all flex flex-col justify-between ${
                          isSelected 
                            ? 'bg-pipe-50 border-pipe-600 text-pipe-900 shadow-sm ring-1 ring-pipe-600' 
                            : 'border-slate-200 hover:border-slate-300 bg-white text-slate-800'
                        }`}
                      >
                        <div className="flex items-center justify-between w-full mb-1">
                          <span className="text-xs font-bold">{service.name}</span>
                          {isSelected && <CheckCircle2 className="w-4 h-4 text-pipe-600 shrink-0" />}
                        </div>
                        <span className="text-xs font-extrabold text-copper-600">{service.baseRange}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Property Type Selection */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  Step 2: Property Type
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'residential', label: 'Single Family Home' },
                    { id: 'mobile_home', label: 'Manufactured / Mobile Home' },
                    { id: 'commercial', label: 'Commercial / Rental' },
                  ].map((p) => (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => setPropertyType(p.id)}
                      className={`py-2 px-3 text-xs font-semibold rounded-lg border text-center transition-all ${
                        propertyType === p.id
                          ? 'bg-steel-900 text-white border-steel-900 shadow-sm'
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      {p.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Urgency Level */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  Step 3: Timeline &amp; Emergency Level
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'immediate', label: 'Active Emergency (Today)' },
                    { id: 'next_day', label: 'Next Day Service' },
                    { id: 'estimate', label: 'Planning / Estimate' },
                  ].map((u) => (
                    <button
                      key={u.id}
                      type="button"
                      onClick={() => setUrgency(u.id)}
                      className={`py-2 px-3 text-xs font-semibold rounded-lg border text-center transition-all ${
                        urgency === u.id
                          ? 'bg-flame-700 text-white border-flame-700 shadow-sm'
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      {u.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Guaranteed Policy Note */}
              <div className="p-3.5 bg-copper-50/70 rounded-xl border border-copper-200 text-xs text-copper-900 flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 text-copper-700 shrink-0 mt-0.5" />
                <p>
                  <strong>Best Price Guarantee:</strong> Bring us any licensed Illinois plumbing or HVAC contractor's written quote — we will match or beat it with premium materials!
                </p>
              </div>

            </div>

            {/* Right Value & Estimate Output Box (5 cols) */}
            <div className="lg:col-span-5 bg-gradient-to-br from-steel-950 via-steel-900 to-steel-950 text-white p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
              
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                    Instant Transparent Estimate
                  </span>
                  <span className="text-xs bg-flame-600/30 text-flame-400 border border-flame-500/30 px-2 py-0.5 rounded font-black uppercase">
                    Winnebago Co. Local
                  </span>
                </div>

                {/* Estimate Title */}
                <div className="mt-4">
                  <h3 className="text-lg font-black text-white leading-tight">
                    {currentService.name}
                  </h3>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                    {currentService.description}
                  </p>
                </div>

                {/* Big Price Display */}
                <div className="my-6 p-4 rounded-2xl bg-steel-900/90 border border-slate-700/80">
                  <span className="text-[11px] uppercase font-bold text-slate-400 block mb-1">
                    Estimated Price Range:
                  </span>
                  <div className="text-3xl sm:text-4xl font-black text-white tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-pipe-400 via-sky-300 to-copper-400">
                    {currentService.baseRange}
                  </div>
                  <div className="mt-2 text-xs text-pipe-300 flex items-center gap-1 font-semibold">
                    <Sparkles className="w-3.5 h-3.5 text-copper-400" />
                    <span>{currentService.typicalSavings}</span>
                  </div>
                </div>

                {/* Key Metrics */}
                <div className="space-y-2.5 text-xs">
                  <div className="flex items-center justify-between py-1.5 border-b border-slate-800">
                    <span className="text-slate-400 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-copper-400" />
                      Expected Dispatch:
                    </span>
                    <span className="font-bold text-white text-right">
                      {currentService.dispatchTime}
                    </span>
                  </div>

                  <div className="flex items-center justify-between py-1.5 border-b border-slate-800">
                    <span className="text-slate-400 flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-pipe-400" />
                      Warranty &amp; Craftsmanship:
                    </span>
                    <span className="font-bold text-white">
                      100% Satisfaction Guarantee
                    </span>
                  </div>

                  <div className="flex items-center justify-between py-1.5 border-b border-slate-800">
                    <span className="text-slate-400 flex items-center gap-1.5">
                      <Zap className="w-3.5 h-3.5 text-flame-400" />
                      Online Web Voucher:
                    </span>
                    <span className="font-bold text-flame-400 bg-flame-950/60 border border-flame-800/80 px-2 py-0.5 rounded">
                      -$50 Applied Below
                    </span>
                  </div>
                </div>
              </div>

              {/* Reciprocity Transition CTA */}
              <div className="pt-6">
                <button
                  type="button"
                  onClick={handleApplyToForm}
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-flame-700 via-flame-600 to-flame-700 hover:from-flame-600 hover:to-flame-500 text-white font-black py-4 px-6 rounded-xl shadow-lg transition-all transform hover:-translate-y-0.5 active:scale-95 btn-emergency-glow"
                >
                  <span>Apply Estimate &amp; Lock In $50 Voucher</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <p className="text-[11px] text-center text-slate-400 mt-2">
                  Locks in priority queue. No credit card required. Free quote review.
                </p>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
