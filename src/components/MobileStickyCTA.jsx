import React from 'react';
import { Phone, Ticket, ShieldAlert } from 'lucide-react';

export default function MobileStickyCTA() {
  const scrollToForm = (e) => {
    e.preventDefault();
    const formEl = document.getElementById('dispatch-form');
    if (formEl) {
      formEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-steel-950/95 backdrop-blur-md border-t border-slate-700/80 px-3 py-2.5 shadow-2xl pb-[max(0.75rem,env(safe-area-inset-bottom))]">
      <div className="max-w-md mx-auto flex items-center gap-2">
        
        {/* Primary Lifeline Button: 1-Tap Call */}
        <a
          href="tel:8158211185"
          className="flex-1 bg-gradient-to-r from-flame-700 via-flame-600 to-flame-700 active:from-flame-800 text-white font-black py-3 px-3 rounded-xl flex items-center justify-center gap-2 text-sm shadow-lg btn-emergency-glow"
          aria-label="Call Rockford Pipes Emergency Plumbers"
        >
          <Phone className="w-4 h-4 fill-white animate-bounce-subtle" />
          <span className="truncate">CALL (815) 821-1185</span>
        </a>

        {/* Secondary Voucher / Book Button */}
        <button
          type="button"
          onClick={scrollToForm}
          className="bg-steel-800 hover:bg-steel-700 active:bg-steel-900 text-copper-300 font-bold py-3 px-3.5 rounded-xl flex items-center justify-center gap-1.5 text-xs border border-copper-400/30 shrink-0 shadow-md"
          aria-label="Claim $50 Voucher"
        >
          <Ticket className="w-3.5 h-3.5 text-copper-400" />
          <span>$50 OFF</span>
        </button>

      </div>
    </div>
  );
}
