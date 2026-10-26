import React from 'react';
import { Star, CheckCircle2, Quote, MapPin } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      name: 'Tony K.',
      location: 'Rockford, IL',
      project: 'Kitchen Sink Leaking Pipe & PEX Line Repair',
      text: 'Had a bad leak under my kitchen sink that ruined the floor board. Mike came out within an hour on a Saturday, diagnosed the fractured PVC trap and corroded copper feed, fixed it cleanly with PEX and brass fittings, and didn’t gouge me on weekend pricing. Trinity is the real deal!',
      rating: 5,
      verified: true,
      tag: 'Verified Homeowner',
    },
    {
      name: 'Bob S.',
      location: 'Loves Park, IL',
      project: 'Main Water Line Shut-off Valve Replacement',
      text: 'My main water shutoff valve broke and wouldn’t turn off. Called 4 plumbers in Rockford who said 3 days out. Rockford Pipes answered on the 2nd ring, had a tech at my door in 45 minutes, froze the line, installed a ball valve, and tested pressure. Super impressed.',
      rating: 5,
      verified: true,
      tag: 'Verified Homeowner',
    },
    {
      name: 'Tracy T.',
      location: 'Rockford, IL',
      project: 'Emergency Freeze Burst Pipe Isolation',
      text: 'Saved our basement from a burst pipe freeze during the January cold snap! Mike was professional, polite, and explained everything. Cleaned up every drop of water before leaving. Best plumber in Rockford hands down.',
      rating: 5,
      verified: true,
      tag: 'Emergency Rescue',
    },
    {
      name: 'Gary & Linda M.',
      location: 'Belvidere, IL',
      project: 'Tub-to-Shower Walk-In Conversion',
      text: 'We got two quotes from national bath remodelers that were over $14,000 for a simple tub-to-shower swap. Mike from Trinity came out, walked us through the real plumbing requirements, gave us a quote that was less than half the price, and completed the job in 2 days. Stunning tile work and safe low step-in.',
      rating: 5,
      verified: true,
      tag: 'Custom Remodel',
    },
  ];

  return (
    <section id="reviews" className="bg-slate-50 py-16 sm:py-24 border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-pipe-700 bg-pipe-100/80 border border-pipe-300 px-3.5 py-1 rounded-full mb-3">
            <Star className="w-3.5 h-3.5 fill-copper-500 text-copper-500" />
            <span>Documented Client Testimonials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-steel-950 tracking-tight">
            Trusted by Winnebago &amp; Boone County Homeowners
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Read direct feedback from local residents who called Trinity Plumbing, HVAC, &amp; Remodeling for emergency repairs, water heaters, and bath conversions.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((rev, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-3xl p-7 sm:p-8 border border-slate-200 shadow-md hover:shadow-xl transition-all flex flex-col justify-between relative group"
            >
              <div>
                {/* Top Meta: Stars, Project Tag */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-copper-400 text-copper-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-bold text-pipe-700 bg-pipe-50 border border-pipe-200 px-2.5 py-0.5 rounded-full">
                    {rev.tag}
                  </span>
                </div>

                {/* Project Subhead */}
                <span className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Project: {rev.project}
                </span>

                {/* Body Text */}
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed italic">
                  "{rev.text}"
                </p>
              </div>

              {/* Author Info */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-steel-950">
                    {rev.name}
                  </h4>
                  <p className="text-xs text-slate-500 flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3 text-copper-500" />
                    <span>{rev.location}</span>
                  </p>
                </div>

                <div className="flex items-center gap-1 text-xs font-semibold text-pipe-700">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified Client</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Overall Trust Badge Bar */}
        <div className="mt-12 p-6 bg-white rounded-2xl border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-copper-50 rounded-xl text-copper-600 font-black text-xl">
              5.0 ★
            </div>
            <div>
              <p className="text-sm font-black text-steel-950">Top-Rated Local Plumbing &amp; HVAC in Rockford</p>
              <p className="text-xs text-slate-500">Based on verified residential &amp; emergency service calls across Greater Rockford.</p>
            </div>
          </div>

          <a
            href="tel:8158211185"
            className="text-xs sm:text-sm font-bold text-flame-700 bg-flame-50 border border-flame-200 px-5 py-2.5 rounded-xl hover:bg-flame-100 transition-colors"
          >
            Call or Text (815) 821-1185
          </a>
        </div>

      </div>
    </section>
  );
}
