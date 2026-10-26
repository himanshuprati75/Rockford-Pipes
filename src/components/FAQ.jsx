import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Phone, MessageSquare } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'What should I do immediately if a copper pipe bursts in my Rockford home?',
      a: 'Immediately locate and shut off your main water supply valve (typically near the water meter in your basement or utility room). Open the lowest cold water faucet in your home to drain standing pressure and minimize water damage. Next, call or text our emergency dispatch line at (815) 821-1185 immediately. Our on-call technicians carry rapid pipe freeze kits, ProPress brass fittings, and PEX coils to isolate and repair the rupture in under 60 minutes.',
    },
    {
      q: 'How does your "Best Price Guarantee" work?',
      a: 'It’s 100% transparent: if you receive a lower written estimate from any licensed, insured plumbing or HVAC contractor in Winnebago or Boone County for identical equipment and scope of work (such as a 40/50 gallon water heater replacement or whole-home PEX repipe), show us their estimate and we will match or beat it! Because we are an independent, master-led local company, we have zero franchise royalty fees or bloated marketing markups.',
    },
    {
      q: 'Can you convert an old tub into a walk-in shower without demoing the entire bathroom?',
      a: 'Yes! Our tub-to-shower conversions are designed for minimal disruption, maximum safety, and fair pricing. We remove the old cast iron or fiberglass tub, inspect and upgrade the subfloor drain plumbing to modern 2-inch code, and install custom acrylic or designer porcelain tile walk-in surrounds. Most conversions are completed in just 1 to 2 days at savings of up to 40% compared to high-pressure franchise bath companies.',
    },
    {
      q: 'Do you really service manufactured and mobile home plumbing in Northern Illinois?',
      a: 'Yes! Many traditional plumbers in Rockford decline mobile home jobs due to tight underbelly crawlspaces and specialized fittings. Trinity specializes in mobile home plumbing repairs, shallow-depth tub replacements, belly pan reinsulation, and self-regulating freeze protection heat tape installation across Winnebago County.',
    },
    {
      q: 'Should I repair my leaking water heater or replace it?',
      a: 'If water is leaking directly from the tank cylinder itself, the internal glass lining has breached and the unit must be replaced immediately to prevent major basement flooding. If the leak is from a top brass fitting, relief valve, or electric heating element gasket, we can usually complete an affordable same-day repair. Due to Rockford’s hard mineral content, tank water heaters typically last 8 to 12 years.',
    },
    {
      q: 'Do you offer true 24/7 service, and can I text your phone number?',
      a: 'Yes! You can call or text (815) 821-1185 at any hour. Texting us photos of your leaking pipe, broken water heater model plate, or furnace error codes allows Mike and our technicians to bring the exact OEM replacement parts directly on the first visit.',
    },
  ];

  return (
    <section id="faq" className="bg-slate-50 py-16 sm:py-24 border-b border-slate-200 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-pipe-700 bg-pipe-100/80 border border-pipe-300 px-3.5 py-1 rounded-full mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-pipe-600" />
            <span>Clear Answers from Master Technicians</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-steel-950 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Straightforward answers regarding emergency leak response, pricing guarantees, water heaters, and mobile home plumbing.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm transition-all"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="font-bold text-base sm:text-lg text-steel-950">
                    {faq.q}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0 text-slate-600">
                    {isOpen ? <ChevronUp className="w-5 h-5 text-pipe-700" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100 animate-in fade-in duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Contact Help */}
        <div className="mt-10 p-6 bg-pipe-50/70 rounded-2xl border border-pipe-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-sm font-bold text-steel-950">Have an urgent plumbing or HVAC question right now?</h4>
            <p className="text-xs text-slate-600 mt-0.5">Call or text our Rockford master technician directly for immediate advice.</p>
          </div>
          <a
            href="tel:8158211185"
            className="shrink-0 bg-flame-600 hover:bg-flame-700 text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl shadow transition-all flex items-center gap-2"
          >
            <Phone className="w-4 h-4" />
            <span>(815) 821-1185</span>
          </a>
        </div>

      </div>
    </section>
  );
}
