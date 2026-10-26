import React from 'react';
import { DollarSign, ShieldCheck, Home, Clock, CheckCircle, PhoneCall, Award } from 'lucide-react';

export default function TrustShield() {
  const credentials = [
    {
      icon: DollarSign,
      badge: 'Transparent Pricing',
      title: 'Best Price Guaranteed',
      description: 'We beat any licensed competitor’s written quote on water heaters, repiping, and HVAC installations. Zero corporate franchise markups.',
      color: 'copper',
    },
    {
      icon: ShieldCheck,
      badge: 'State Certified',
      title: 'Licensed • Bonded • Insured',
      description: 'Fully credentialed master plumbing and HVAC contractor in Illinois. Comprehensive liability coverage for total homeowner peace of mind.',
      color: 'pipe',
    },
    {
      icon: Home,
      badge: 'Rare Specialization',
      title: 'Mobile Home Specialists',
      description: 'Northern Illinois experts in manufactured & mobile home plumbing, belly repairs, freeze protection heat tape, and custom tub conversions.',
      color: 'flame',
    },
    {
      icon: Clock,
      badge: 'Rapid Response',
      title: 'Same-Day Dispatch (Call/Text)',
      description: 'True 24/7 emergency availability across Rockford, Loves Park, and Belvidere. Text or call (815) 821-1185 for immediate scheduling.',
      color: 'steel',
    },
  ];

  return (
    <section className="bg-white border-b border-slate-200 py-10 sm:py-14 relative z-20 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading & Subtext */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs uppercase tracking-widest font-bold text-pipe-700 bg-pipe-50 border border-pipe-200 px-3 py-1 rounded-full inline-block mb-2">
            The Rockford Pipes Difference
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-steel-950 tracking-tight">
            Why Winnebago &amp; Boone County Homeowners Trust Trinity
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Fair pricing, skilled craftsmanship, and rapid emergency response replace inflated franchise commissions.
          </p>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {credentials.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="bg-slate-50 hover:bg-pipe-50/40 rounded-2xl p-6 border border-slate-200 hover:border-pipe-300 transition-all duration-300 hover:shadow-md flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-white shadow-sm border border-slate-200 group-hover:border-pipe-400 flex items-center justify-center text-pipe-700 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-pipe-700" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 bg-white px-2 py-0.5 rounded-md border border-slate-200">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-steel-950 mb-2 group-hover:text-pipe-800 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-200/70 flex items-center gap-1.5 text-xs font-semibold text-pipe-700">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Guaranteed Policy</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Prompt Arrival Banner Quote */}
        <div className="mt-8 bg-gradient-to-r from-steel-950 via-steel-900 to-steel-950 rounded-2xl p-4 sm:p-6 text-white flex flex-col md:flex-row items-center justify-between gap-4 shadow-lg border border-slate-700">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-flame-500/20 border border-flame-400 flex items-center justify-center shrink-0">
              <Clock className="w-6 h-6 text-flame-400" />
            </div>
            <div>
              <p className="text-sm sm:text-base font-bold text-white">
                "Our master technicians arrive on time with fully stocked trucks. You always approve the price before any work begins."
              </p>
              <p className="text-xs text-slate-300 mt-0.5">
                — Trinity Plumbing, HVAC, &amp; Remodeling Guarantee • Rockford, IL
              </p>
            </div>
          </div>

          <a 
            href="tel:8158211185"
            className="shrink-0 flex items-center gap-2 bg-flame-600 hover:bg-flame-500 text-white px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold shadow transition-all"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Call or Text (815) 821-1185</span>
          </a>
        </div>

      </div>
    </section>
  );
}
