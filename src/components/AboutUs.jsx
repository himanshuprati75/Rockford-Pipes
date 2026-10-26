import React from 'react';
import { Award, ShieldCheck, HeartHandshake, CheckCircle2, Wrench, Users, PhoneCall } from 'lucide-react';

export default function AboutUs({ onOpenCallModal }) {
  return (
    <section id="about" className="bg-white py-16 sm:py-24 border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Story & Badges (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-3xl overflow-hidden border-2 border-slate-200 shadow-xl group">
              <img 
                src="/images/hero_mike.jpg" 
                alt="Mike Master Plumber at Trinity Plumbing Rockford" 
                className="w-full h-[420px] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-steel-950 via-steel-950/20 to-transparent"></div>

              {/* Master Plumber Badge */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-slate-200 text-slate-800">
                <div className="flex items-center gap-2 mb-1">
                  <Wrench className="w-4 h-4 text-pipe-700" />
                  <span className="text-xs font-black uppercase tracking-wider text-steel-950">
                    Master Plumber &amp; Technician Led
                  </span>
                </div>
                <p className="text-xs text-slate-600">
                  Direct hands-on oversight by Mike on every major plumbing repair, water heater replacement, and custom bathroom remodel.
                </p>
              </div>
            </div>

            {/* Mobile Home Specialist Badge */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 flex items-center gap-4">
              <img 
                src="/images/service_remodel.jpg" 
                alt="Mobile home plumbing specialists" 
                className="w-16 h-12 object-cover rounded-xl shrink-0 border border-slate-300"
              />
              <div className="text-xs text-slate-700">
                <strong className="block text-steel-950 font-bold text-sm mb-0.5">Mobile Home &amp; Residential Specialists</strong>
                One of Northern Illinois’ few qualified contractors equipped for manufactured home belly plumbing, heat tape, and custom shower swaps.
              </div>
            </div>
          </div>

          {/* Right Column: Founder Story & Unbiased Philosophy (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-pipe-700 bg-pipe-50 border border-pipe-300 px-3.5 py-1 rounded-full">
              <Award className="w-3.5 h-3.5 text-pipe-600" />
              <span>About Trinity Plumbing, HVAC, &amp; Remodeling</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-steel-950 tracking-tight leading-tight">
              Honest Craftsmanship &amp; Guaranteed Best Prices for Rockford Families
            </h2>

            <p className="text-base text-slate-700 leading-relaxed">
              Trinity Plumbing, HVAC, &amp; Remodeling (operating on RockfordPipes.com) was created to solve a massive problem in our community: oversized private-equity plumbing franchises charging $2,000+ for basic repairs while pushing commissioned sales on panicked homeowners.
            </p>

            <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
              <p>
                Led by <strong className="text-steel-950 font-bold">Mike</strong> and our skilled master team, we provide a true "trinity" of home mechanical solutions: precision plumbing repairs, dependable heating/cooling installations, and custom tub-to-shower bathroom transformations.
              </p>

              <p>
                Whether it's 2:00 AM on a freezing January night with a fractured copper pipe spraying water in your basement, or you are planning a modern walk-in tile shower to age safely in place, we treat your home with total respect. We give you clear, upfront pricing before turning a single wrench, and <strong className="text-steel-950">guarantee the best price in Winnebago County</strong>.
              </p>
            </div>

            {/* 3 Core Commitments */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                <ShieldCheck className="w-5 h-5 text-pipe-700 mb-1.5" />
                <h4 className="text-xs font-bold text-steel-950 uppercase">Licensed &amp; Insured</h4>
                <p className="text-[11px] text-slate-500 mt-1">Full state licensing and $2M liability protection.</p>
              </div>

              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                <HeartHandshake className="w-5 h-5 text-flame-600 mb-1.5" />
                <h4 className="text-xs font-bold text-steel-950 uppercase">Best Price Policy</h4>
                <p className="text-[11px] text-slate-500 mt-1">We beat written competitor estimates on water heaters &amp; repipes.</p>
              </div>

              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                <Users className="w-5 h-5 text-copper-600 mb-1.5" />
                <h4 className="text-xs font-bold text-steel-950 uppercase">Call or Text 24/7</h4>
                <p className="text-[11px] text-slate-500 mt-1">Reach Mike directly for emergency dispatch in minutes.</p>
              </div>
            </div>

            {/* Direct Contact Bar */}
            <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <a
                href="tel:8158211185"
                className="bg-pipe-700 hover:bg-pipe-800 text-white font-extrabold px-6 py-3.5 rounded-xl shadow-md transition-all flex items-center gap-2 text-sm"
              >
                <PhoneCall className="w-4 h-4 text-copper-400" />
                <span>Call or Text (815) 821-1185</span>
              </a>

              <span className="text-xs text-slate-500">
                Direct Email: <a href="mailto:Rockfordpipes@gmail.com" className="text-pipe-700 font-semibold underline">Rockfordpipes@gmail.com</a>
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
