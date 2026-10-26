import React, { useState } from 'react';
import { Phone, Clock, ShieldCheck, MapPin, Menu, X, ChevronRight, ChevronDown, Award, Droplets, Flame, Wrench, Home, Sparkles, MessageSquare } from 'lucide-react';

export default function Header({ onOpenCallModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const serviceDropdownItems = [
    { name: 'Emergency Pipe Leak & Burst Repair', tag: 'Under 60 Min', icon: Droplets, href: '#services' },
    { name: 'Water Heater Replacement & Repair', tag: 'Tank & Tankless', icon: Flame, href: '#services' },
    { name: 'Tub-to-Shower Conversions & Remodel', tag: 'Custom Bath', icon: Award, href: '#services' },
    { name: 'Drain Cleaning & Hydro Jetting', tag: 'Free Camera Inspection', icon: Wrench, href: '#services' },
    { name: '24/7 HVAC Furnace & AC Repair', tag: 'Climate Pros', icon: Sparkles, href: '#services' },
    { name: 'Mobile Home Plumbing & Heat Tape', tag: 'Specialist Certified', icon: Home, href: '#services' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm transition-all">
      {/* Top Trust & Emergency Dispatch Announcement Bar */}
      <div className="bg-steel-950 text-slate-300 text-xs py-1.5 px-4 font-medium border-b border-steel-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 text-flame-400 font-semibold tracking-wide whitespace-nowrap">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-flame-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-flame-500"></span>
              </span>
              24/7 ON-CALL PLUMBERS &amp; HVAC DISPATCH • ROCKFORD, IL
            </span>
            <span className="hidden md:inline text-steel-700">|</span>
            <span className="hidden md:inline-flex items-center gap-1 text-slate-300 whitespace-nowrap">
              <MapPin className="w-3.5 h-3.5 text-copper-400 shrink-0" />
              Rockford, Loves Park, Belvidere, Roscoe &amp; Chicagoland
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px] sm:text-xs">
            <span className="hidden lg:inline-flex items-center gap-1 text-pipe-300 whitespace-nowrap">
              <Award className="w-3.5 h-3.5 text-copper-400 shrink-0" />
              Best Price Guaranteed • Mobile Home Specialists
            </span>
            <span className="flex items-center gap-1 text-slate-300 whitespace-nowrap">
              <Clock className="w-3 h-3 text-slate-400 shrink-0" />
              Same-Day Service: Call or Text
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Authentic Trinity / Rockford Pipes Logo & Brand Name */}
        <a href="#" className="flex items-center gap-3 group focus:outline-none shrink-0" aria-label="Trinity Plumbing & Rockford Pipes Home">
          <img 
            src="/images/logo.png" 
            alt="Trinity Plumbing, HVAC & Remodeling - Rockford Pipes" 
            className="h-11 sm:h-13 w-auto object-contain transition-transform group-hover:scale-[1.02]"
          />
          <div className="flex flex-col">
            <span className="font-black text-base sm:text-lg tracking-tight text-steel-950 leading-tight whitespace-nowrap">
              TRINITY <span className="text-pipe-700">PLUMBING</span>
            </span>
            <span className="text-[10px] font-bold text-copper-600 tracking-wider uppercase flex items-center gap-1 whitespace-nowrap">
              <span>HVAC &amp; REMODELING</span>
              <span className="text-slate-400">•</span>
              <span className="text-steel-600">ROCKFORD, IL</span>
            </span>
          </div>
        </a>

        {/* Professional 5 Separated Tabs */}
        <nav className="hidden lg:flex items-center bg-slate-100/90 p-1.5 rounded-full border border-slate-200/90 shadow-inner shrink-0">
          
          {/* Tab 1: Services (with Clean Dropdown Menu) */}
          <div 
            className="relative"
            onMouseEnter={() => setServicesDropdownOpen(true)}
            onMouseLeave={() => setServicesDropdownOpen(false)}
          >
            <a 
              href="#services" 
              className={`px-4 py-1.5 rounded-full text-xs xl:text-sm font-bold transition-all duration-200 flex items-center gap-1 whitespace-nowrap ${
                servicesDropdownOpen 
                  ? 'bg-white text-pipe-700 shadow-sm' 
                  : 'text-slate-700 hover:text-pipe-800 hover:bg-white/80'
              }`}
            >
              <span>Services</span>
              <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180 text-pipe-700' : ''}`} />
            </a>

            {/* Dropdown Menu */}
            {servicesDropdownOpen && (
              <div className="absolute top-full left-0 pt-2 w-80 z-50 animate-in fade-in zoom-in-95 duration-150">
                <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 p-2 space-y-1">
                  <div className="px-3 py-1.5 text-[10px] font-black uppercase tracking-wider text-slate-400 border-b border-slate-100">
                    Master Trade Specialties
                  </div>
                  {serviceDropdownItems.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <a
                        key={idx}
                        href={item.href}
                        onClick={() => setServicesDropdownOpen(false)}
                        className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-pipe-50 transition-colors group/item"
                      >
                        <div className="w-8 h-8 rounded-lg bg-slate-100 group-hover/item:bg-pipe-100 flex items-center justify-center text-pipe-700 shrink-0">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-bold text-steel-950 group-hover/item:text-pipe-700 truncate">
                            {item.name}
                          </p>
                          <p className="text-[10px] text-slate-500 font-medium">
                            {item.tag}
                          </p>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          <span className="w-px h-4 bg-slate-300/80 mx-0.5"></span>

          {/* Tab 2: Pricing (Instant Calculator) */}
          <a 
            href="#calculator" 
            className="px-4 py-1.5 rounded-full text-xs xl:text-sm font-bold text-slate-700 hover:text-pipe-800 hover:bg-white hover:shadow-sm transition-all duration-200 flex items-center gap-1.5 whitespace-nowrap"
          >
            <span>Pricing</span>
            <span className="text-[9px] uppercase tracking-wider bg-pipe-100 text-pipe-700 px-1.5 py-0.5 rounded font-black">Live</span>
          </a>

          <span className="w-px h-4 bg-slate-300/80 mx-0.5"></span>

          {/* Tab 3: Real Work (Craftsmanship Gallery) */}
          <a 
            href="#craftsmanship" 
            className="px-4 py-1.5 rounded-full text-xs xl:text-sm font-bold text-slate-700 hover:text-pipe-800 hover:bg-white hover:shadow-sm transition-all duration-200 whitespace-nowrap"
          >
            Real Work
          </a>

          <span className="w-px h-4 bg-slate-300/80 mx-0.5"></span>

          {/* Tab 4: About Us */}
          <a 
            href="#about" 
            className="px-4 py-1.5 rounded-full text-xs xl:text-sm font-bold text-slate-700 hover:text-pipe-800 hover:bg-white hover:shadow-sm transition-all duration-200 whitespace-nowrap"
          >
            About Us
          </a>

          <span className="w-px h-4 bg-slate-300/80 mx-0.5"></span>

          {/* Tab 5: Reviews */}
          <a 
            href="#reviews" 
            className="px-4 py-1.5 rounded-full text-xs xl:text-sm font-bold text-slate-700 hover:text-pipe-800 hover:bg-white hover:shadow-sm transition-all duration-200 whitespace-nowrap"
          >
            Reviews
          </a>

        </nav>

        {/* Header CTAs */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Dispatch Phone (Call or Text) */}
          <div className="hidden sm:flex flex-col items-end text-right whitespace-nowrap">
            <span className="text-[11px] font-bold uppercase tracking-wider text-flame-700 flex items-center gap-1 whitespace-nowrap">
              <span className="w-1.5 h-1.5 rounded-full bg-flame-500 animate-pulse"></span>
              24/7 Call or Text
            </span>
            <a 
              href="tel:8158211185"
              onClick={(e) => {
                if (window.innerWidth >= 1024) {
                  e.preventDefault();
                  onOpenCallModal();
                }
              }}
              className="text-lg font-black text-steel-950 hover:text-pipe-700 transition-colors tracking-tight flex items-center gap-1.5 whitespace-nowrap"
            >
              <Phone className="w-4 h-4 text-flame-600 shrink-0" />
              <span>(815) 821-1185</span>
            </a>
          </div>

          {/* Mobile Direct Tap Call Button */}
          <a
            href="tel:8158211185"
            className="sm:hidden flex items-center gap-1.5 bg-flame-600 text-white px-3.5 py-2 rounded-lg font-bold text-sm shadow-md btn-emergency-glow whitespace-nowrap"
            aria-label="Call Rockford Pipes Emergency Plumbers"
          >
            <Phone className="w-4 h-4 fill-white shrink-0" />
            <span>(815) 821-1185</span>
          </a>

          {/* Desktop "Book / Estimate" Button */}
          <button
            onClick={() => {
              const formEl = document.getElementById('dispatch-form');
              if (formEl) {
                formEl.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="hidden xl:flex items-center gap-2 bg-pipe-700 hover:bg-pipe-800 text-white px-5 py-2.5 rounded-xl font-bold text-sm shadow-md transition-all duration-200 hover:shadow-lg active:scale-95 whitespace-nowrap"
          >
            <span>Get Best Price</span>
            <ChevronRight className="w-4 h-4" />
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu with Separated Tab Buttons */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-xl animate-in slide-in-from-top duration-200">
          <div className="p-3 bg-flame-50 rounded-xl border border-flame-200 flex items-center justify-between">
            <div>
              <p className="text-xs font-bold text-flame-800">WATER LEAK OR FURNACE EMERGENCY?</p>
              <p className="text-sm font-black text-steel-950">Dispatch: (815) 821-1185</p>
            </div>
            <a
              href="tel:8158211185"
              className="px-3.5 py-1.5 bg-flame-600 text-white text-xs font-bold rounded-lg shadow-sm"
            >
              Call
            </a>
          </div>

          <div className="grid grid-cols-2 gap-2 text-sm font-semibold text-slate-700 pt-2">
            <a 
              href="#services" 
              onClick={() => setMobileMenuOpen(false)}
              className="p-3 rounded-xl bg-slate-50 border border-slate-200 hover:border-pipe-400 hover:bg-pipe-50 transition-colors flex items-center gap-2"
            >
              <Droplets className="w-4 h-4 text-pipe-600" />
              <span>Services</span>
            </a>
            <a 
              href="#calculator" 
              onClick={() => setMobileMenuOpen(false)}
              className="p-3 rounded-xl bg-slate-50 border border-slate-200 hover:border-pipe-400 hover:bg-pipe-50 transition-colors flex items-center justify-between"
            >
              <span>Price Guide</span>
              <span className="text-[10px] bg-pipe-100 text-pipe-700 px-1 rounded font-bold">Live</span>
            </a>
            <a 
              href="#craftsmanship" 
              onClick={() => setMobileMenuOpen(false)}
              className="p-3 rounded-xl bg-slate-50 border border-slate-200 hover:border-pipe-400 hover:bg-pipe-50 transition-colors flex items-center gap-2"
            >
              <Award className="w-4 h-4 text-copper-600" />
              <span>Real Work</span>
            </a>
            <a 
              href="#about" 
              onClick={() => setMobileMenuOpen(false)}
              className="p-3 rounded-xl bg-slate-50 border border-slate-200 hover:border-pipe-400 hover:bg-pipe-50 transition-colors flex items-center gap-2"
            >
              <Wrench className="w-4 h-4 text-pipe-600" />
              <span>About Us</span>
            </a>
            <a 
              href="#reviews" 
              onClick={() => setMobileMenuOpen(false)}
              className="p-3 rounded-xl bg-slate-50 border border-slate-200 hover:border-pipe-400 hover:bg-pipe-50 transition-colors flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-copper-500" />
              <span>Reviews</span>
            </a>
            <a 
              href="#dispatch-form" 
              onClick={() => setMobileMenuOpen(false)}
              className="p-3 rounded-xl bg-pipe-700 text-white font-bold hover:bg-pipe-800 transition-colors flex items-center justify-between"
            >
              <span>Claim $50 Off</span>
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
