import React from 'react';
import { Phone, ArrowRight, ShieldCheck, Clock, Award, CheckCircle2, Flame, Droplets, Wrench, Sparkles, Home, DollarSign, MessageSquare } from 'lucide-react';

export default function Hero({ onSelectIssue, onOpenCallModal }) {
  const quickIssues = [
    { id: 'burst_pipe', label: 'Burst Pipe / Active Leak', icon: Droplets, tag: 'Urgent 60m Dispatch' },
    { id: 'water_heater', label: 'Water Heater No Hot Water', icon: Flame, tag: 'Tank & Tankless' },
    { id: 'drain', label: 'Clogged Drain / Sewer Backup', icon: Wrench, tag: 'Rooter & Jetting' },
    { id: 'hvac', label: 'Furnace / AC Repair', icon: Sparkles, tag: '24/7 Climate' },
    { id: 'remodel', label: 'Tub-to-Shower Conversion', icon: Award, tag: 'Custom Bath' },
    { id: 'mobile_home', label: 'Mobile Home Plumbing', icon: Home, tag: 'Specialist Certified' },
  ];

  const handleIssueClick = (issueId) => {
    onSelectIssue(issueId);
    const target = document.getElementById('calculator');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-steel-950 via-steel-900 to-steel-950 text-white pt-8 pb-16 lg:pt-14 lg:pb-24">
      {/* Background Subtle Tech & Water Line Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(#0284c7_1px,transparent_1px)] [background-size:28px_28px] opacity-10"></div>
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-pipe-700/25 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/3 -right-48 w-96 h-96 bg-flame-700/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Psychological Hook & Value Proposition (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Live Dispatch & County Status Badge */}
            <div className="inline-flex flex-wrap items-center gap-2 bg-steel-900/90 border border-flame-500/40 rounded-full px-3.5 py-1.5 text-xs sm:text-sm text-slate-200 shadow-inner">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-flame-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-flame-500"></span>
              </span>
              <span className="font-semibold text-flame-400">Winnebago & Boone County Dispatch:</span>
              <span>Rockford • Loves Park • Belvidere • Roscoe</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black tracking-tight leading-[1.12] text-white">
              Rockford's 24/7 Emergency <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pipe-400 via-sky-300 to-copper-400">
                Plumbers &amp; HVAC Pros.
              </span>{' '}
              Best Price Guaranteed.
            </h1>

            {/* Psychological Calming Copy */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal">
              When a copper pipe bursts, your water heater floods the basement, or your furnace dies in sub-zero Illinois weather, 
              don't get gouged by giant corporate chains. <strong className="text-white font-semibold">Trinity Plumbing, HVAC &amp; Remodeling (Rockford Pipes)</strong> delivers 
              honest, transparent pricing, fast same-day arrival, and master craftsmanship on every job.
            </p>

            {/* Interactive Issue Dispatch Quick-Selector */}
            <div className="pt-2">
              <p className="text-xs uppercase tracking-wider font-bold text-slate-400 mb-2.5 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-copper-400"></span>
                Select Your Emergency To Check Immediate Price &amp; Arrival:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {quickIssues.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleIssueClick(item.id)}
                      className="group flex flex-col items-start p-2.5 sm:p-3 rounded-xl bg-steel-900/80 hover:bg-pipe-900/60 border border-slate-700 hover:border-pipe-500 text-left transition-all hover:scale-[1.02] shadow-sm"
                    >
                      <div className="flex items-center justify-between w-full mb-1">
                        <Icon className="w-4 h-4 text-pipe-400 group-hover:text-copper-400 transition-colors" />
                        <span className="text-[10px] text-slate-400 group-hover:text-slate-200 font-medium">{item.tag}</span>
                      </div>
                      <span className="text-xs sm:text-sm font-semibold text-slate-100 group-hover:text-white">
                        {item.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-3">
              <a
                href="tel:8158211185"
                onClick={(e) => {
                  if (window.innerWidth >= 1024) {
                    e.preventDefault();
                    onOpenCallModal();
                  }
                }}
                className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-flame-700 via-flame-600 to-flame-700 hover:from-flame-600 hover:to-flame-500 text-white font-extrabold text-base sm:text-lg px-7 py-4 rounded-xl shadow-xl transition-all transform hover:-translate-y-0.5 btn-emergency-glow"
              >
                <Phone className="w-5 h-5 fill-white" />
                <span>Call (815) 821-1185 Now</span>
              </a>

              <button
                onClick={() => {
                  const el = document.getElementById('dispatch-form');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center gap-2 bg-steel-800/90 hover:bg-steel-700 border border-slate-600 hover:border-slate-500 text-slate-100 hover:text-white font-bold text-base px-6 py-4 rounded-xl shadow transition-all"
              >
                <span>Claim $50 Web Voucher</span>
                <ArrowRight className="w-4 h-4 text-copper-400" />
              </button>
            </div>

            {/* Trust Anchors Under Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-slate-300">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-pipe-400" />
                <span>Licensed, Bonded &amp; Insured</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-copper-400" />
                <span>Call or Text 24/7 Available</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-flame-400" />
                <span>Best Price Guarantee</span>
              </div>
            </div>

          </div>

          {/* Right Column: High-Impact Visual Proof & Emergency Badges (5 Cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Primary Image Card: Tech Mike in uniform with water heaters & copper pipes */}
              <div className="relative rounded-2xl overflow-hidden border-2 border-slate-700/80 shadow-2xl bg-steel-900 group">
                <img 
                  src="/images/hero_mike.jpg" 
                  alt="Mike Master Plumber at Trinity Plumbing Rockford" 
                  className="w-full h-80 sm:h-96 object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Image Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-steel-950 via-transparent to-transparent opacity-90"></div>

                {/* Bottom Card Info Overlay */}
                <div className="absolute bottom-4 left-4 right-4 p-3.5 bg-steel-950/85 backdrop-blur-md rounded-xl border border-slate-700/80 flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase font-bold text-copper-400 tracking-wider">Master Technician On Call</p>
                    <p className="text-sm font-black text-white">Mike • Master Plumber &amp; Remodeler</p>
                    <p className="text-[11px] text-slate-300">Fast 45-Min Winnebago County Response</p>
                  </div>
                  <div className="text-right">
                    <span className="inline-block bg-flame-600/30 text-flame-400 border border-flame-500/40 text-[10px] font-black uppercase px-2 py-0.5 rounded">
                      Available Now
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Emergency Badge 1: Real burst copper pipe photo */}
              <div className="absolute -top-6 -left-6 sm:-left-8 bg-steel-950/95 border-2 border-flame-500/80 rounded-2xl p-2.5 shadow-2xl backdrop-blur-md flex items-center gap-3 max-w-[240px] animate-bounce-subtle">
                <img 
                  src="/images/badge1.png" 
                  alt="Burst Copper Pipe Emergency" 
                  className="w-12 h-12 rounded-lg object-cover border border-flame-500/50 flex-shrink-0"
                />
                <div>
                  <p className="text-[10px] font-black uppercase text-flame-400 tracking-wide">ACTIVE WATER EMERGENCY?</p>
                  <p className="text-xs font-bold text-white leading-tight">Emergency Shutoff &amp; Rapid Pipe Freeze Fix</p>
                </div>
              </div>

              {/* Floating Trust Card 2: Bottom Right */}
              <div className="hidden sm:flex absolute -bottom-6 -right-6 bg-steel-900/95 border border-pipe-500/50 rounded-2xl p-3 shadow-2xl backdrop-blur-md items-center gap-3 max-w-[250px]">
                <div className="p-2 bg-pipe-700/30 text-pipe-400 rounded-xl border border-pipe-500/30">
                  <DollarSign className="w-5 h-5 text-copper-400" />
                </div>
                <div>
                  <p className="text-xs font-black text-white">Best Price Guarantee</p>
                  <p className="text-[11px] text-slate-300">We beat competitor written estimates on water heaters &amp; repiping!</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
