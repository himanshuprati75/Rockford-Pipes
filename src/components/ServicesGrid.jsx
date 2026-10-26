import React, { useState } from 'react';
import { Droplets, Flame, Wrench, Award, ChevronDown, ChevronUp, ArrowRight, CheckCircle2, Home, Sparkles, ShieldCheck } from 'lucide-react';

export default function ServicesGrid({ onSelectService }) {
  const [activeTab, setActiveTab] = useState('all');

  const allServices = [
    {
      id: 'burst_pipe',
      category: 'plumbing',
      title: 'Emergency Pipe Leak & Burst Repair',
      tag: '60-Minute Fast Dispatch',
      image: '/images/service_plumbing.jpg',
      points: [
        'Rapid freeze-burst isolation & emergency shutoff',
        'Copper sweating, ProPress brass, & durable PEX-A lines',
        'Pinpoint drywall leak detection without destructive demo',
        'Main water shut-off ball valve replacements & upgrades',
      ],
      description: 'When water is spewing into your ceiling or basement, every second counts. Our master plumbers arrive fully equipped to stop the flood and permanently restore your supply lines.',
    },
    {
      id: 'water_heater',
      category: 'water_heater',
      title: 'Water Heater Replacement & Repair',
      tag: 'Best Price Guaranteed',
      image: '/images/water_heater.jpg',
      points: [
        'Standard gas & electric tank replacements (40, 50, 75 gal)',
        'High-efficiency endless hot water tankless conversions',
        'Code-compliant thermal expansion tanks & safety relief valves',
        'Guaranteed same-day installation with old tank haul-away',
      ],
      description: 'Waking up to cold water or a puddle under your heater? We stock top-rated Bradford White and Rheem systems at prices $200-$500 lower than corporate chains.',
    },
    {
      id: 'remodel',
      category: 'remodel',
      title: 'Tub-to-Shower Conversions & Remodeling',
      tag: 'Custom Craftsmanship',
      image: '/images/shower_conversion.jpg',
      points: [
        'Convert slippery, high-step tubs into modern walk-in showers',
        'Custom porcelain, subway tile, or durable seamless surrounds',
        'Premium Moen, Delta & Kohler anti-scald pressure valves',
        'Saves up to 40% vs high-pressure national bath franchises',
      ],
      description: 'Upgrade your bathroom with a luxurious, safe walk-in shower. From ADA-compliant safety bars to frameless glass doors, Mike and our team build baths that last a lifetime.',
    },
    {
      id: 'drain',
      category: 'plumbing',
      title: 'Drain Cleaning, Rooter & Hydro Jetting',
      tag: 'Free Camera Inspection',
      image: '/images/drain_cleaning.jpg',
      points: [
        'Heavy-duty industrial cable snaking for stubborn tree roots',
        'High-pressure hydro jetting to blast kitchen grease and sludge',
        'Bathroom vanities, kitchen sinks, shower traps, & toilets',
        'Main sewer line backup cleared with camera proof included',
      ],
      description: 'Gurgling drains or foul sewer water backing up into your basement? We clear blockages fast and provide video camera verification so you know the pipe is completely open.',
    },
    {
      id: 'hvac',
      category: 'hvac',
      title: '24/7 HVAC Heating & Cooling Solutions',
      tag: 'Year-Round Comfort',
      image: '/images/service_hvac.jpg',
      points: [
        'Furnace diagnostics, flame sensor cleaning, & safety checks',
        'Air conditioner tune-ups, coil scrubbing, & Freon balancing',
        'Ductless mini-split heat pumps for additions & older homes',
        'Zero overtime surcharge with our online coupon',
      ],
      description: 'Winter freezes and humid summer heatwaves are tough on Illinois HVAC systems. Trinity keeps your furnace and AC operating at maximum energy efficiency.',
    },
    {
      id: 'repiping',
      category: 'plumbing',
      title: 'Whole-Home Re-piping (Copper & PEX)',
      tag: 'Eliminate Rusty Water',
      image: '/images/badge2.png',
      points: [
        'Replace failing galvanized iron & brittle polybutylene pipes',
        'Restores maximum water pressure to all second-floor showers',
        'Eliminates metallic taste, yellow water, & recurring pinholes',
        'Minimal drywall disturbance with full patching service',
      ],
      description: 'Tired of temporary pipe patches that fail every few months? A full PEX repipe eliminates leaks forever and significantly increases your home’s resale value.',
    },
    {
      id: 'mobile_home',
      category: 'mobile_home',
      title: 'Mobile Home Plumbing & Freeze Protection',
      tag: 'Manufactured Home Pros',
      image: '/images/service_remodel.jpg',
      points: [
        'Specialized manufactured home underbelly plumbing repairs',
        'Heavy-duty self-regulating heat tape & pipe insulation wrap',
        'Mobile home tub conversions and specialized shallow-depth fixtures',
        'Plastic manifold rebuilding and low-profile drain setups',
      ],
      description: 'Most plumbers refuse to work on mobile homes due to tight underbellies and unique fittings. Trinity specializes in manufactured home plumbing across Winnebago County.',
    },
    {
      id: 'sump_pump',
      category: 'plumbing',
      title: 'Sump Pumps, Softeners & Water Filtration',
      tag: 'Basement Flood Defense',
      image: '/images/bathroom_remodel.jpg',
      points: [
        'Heavy-duty cast iron Zoeller primary & battery backup sump pumps',
        'High-capacity water softeners to eradicate Rockford mineral scale',
        'Whole-house sediment & chlorine taste/odor filtration systems',
        'Reverse osmosis drinking water purification at your kitchen tap',
      ],
      description: 'Keep your basement 100% dry during heavy Illinois spring thaws and protect your appliances from aggressive hard water mineral buildup.',
    },
  ];

  const categoryTabs = [
    { id: 'all', label: 'All Services (8)', icon: Sparkles },
    { id: 'plumbing', label: 'Emergency Leaks & Drains', icon: Droplets },
    { id: 'water_heater', label: 'Water Heaters', icon: Flame },
    { id: 'remodel', label: 'Tub-to-Shower', icon: Award },
    { id: 'hvac', label: 'Heating & AC', icon: Wrench },
    { id: 'mobile_home', label: 'Mobile Home', icon: Home },
  ];

  const displayedServices = activeTab === 'all' 
    ? allServices 
    : allServices.filter(s => s.category === activeTab);

  const handleSelect = (serviceId) => {
    onSelectService(serviceId);
    const target = document.getElementById('calculator');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="bg-slate-50 py-14 sm:py-20 border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <span className="text-xs uppercase tracking-widest font-bold text-pipe-700 bg-pipe-100/70 border border-pipe-300 px-3 py-1 rounded-full inline-block mb-3">
            Core Service Offerings
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-steel-950 tracking-tight">
            Rockford’s Complete Plumbing, HVAC &amp; Remodeling Team
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            From midnight pipe emergencies to luxury walk-in showers, our master technicians deliver exceptional craftsmanship at guaranteed fair prices.
          </p>
        </div>

        {/* Professional Separated Category Tabs */}
        <div className="flex items-center justify-center mb-10 overflow-x-auto pb-2 scrollbar-none">
          <div className="inline-flex items-center bg-white p-1.5 rounded-full border border-slate-200 shadow-sm gap-1">
            {categoryTabs.map((tab) => {
              const Icon = tab.icon;
              const isSelected = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 whitespace-nowrap flex items-center gap-1.5 ${
                    isSelected
                      ? 'bg-pipe-700 text-white shadow-md'
                      : 'text-slate-600 hover:text-steel-950 hover:bg-slate-100'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {displayedServices.map((service) => (
            <div 
              key={service.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group animate-in fade-in duration-200"
            >
              <div>
                {/* Image Header with Badge Overlay */}
                <div className="relative h-56 sm:h-64 overflow-hidden bg-slate-900">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-steel-950/80 via-transparent to-transparent"></div>
                  <span className="absolute top-4 left-4 bg-flame-700/90 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                    {service.tag}
                  </span>
                </div>

                {/* Body Content */}
                <div className="p-6 sm:p-8 space-y-4">
                  <h3 className="text-xl sm:text-2xl font-black text-steel-950 group-hover:text-pipe-700 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="pt-2 border-t border-slate-100">
                    <p className="text-xs uppercase font-bold text-slate-400 mb-2.5">
                      Included Workmanship Standards:
                    </p>
                    <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                      {service.points.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-pipe-600 shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Bottom Action Footer */}
              <div className="p-6 pt-0 mt-2">
                <button
                  type="button"
                  onClick={() => handleSelect(service.id)}
                  className="w-full flex items-center justify-center gap-2 bg-slate-100 hover:bg-pipe-700 text-slate-800 hover:text-white font-extrabold py-3.5 px-4 rounded-xl transition-all duration-200 group-hover:shadow-md"
                >
                  <span>Check Instant Price &amp; Schedule</span>
                  <ArrowRight className="w-4 h-4 text-copper-500 group-hover:text-white transition-colors" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
