import React, { useState } from 'react';
import { Phone, Copy, Check, X, Clock, ShieldCheck, UserCheck, MessageSquare, AlertCircle } from 'lucide-react';

export default function CallModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);
  const [callbackRequested, setCallbackRequested] = useState(false);
  const [callbackPhone, setCallbackPhone] = useState('');

  if (!isOpen) return null;

  const phoneNumber = '(815) 821-1185';
  const rawNumber = 'tel:8158211185';
  const textNumber = 'sms:8158211185';

  const handleCopy = () => {
    navigator.clipboard.writeText('8158211185');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleCallbackSubmit = (e) => {
    e.preventDefault();
    if (!callbackPhone) return;
    setCallbackRequested(true);
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-slate-200 relative animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Ribbon */}
        <div className="bg-gradient-to-r from-steel-950 via-steel-900 to-pipe-900 text-white p-6 relative">
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 text-slate-400 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-all focus:outline-none"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-flame-400 bg-steel-950/80 px-2.5 py-0.5 rounded-full border border-flame-500/30 mb-2">
            <span className="w-2 h-2 rounded-full bg-flame-500 animate-pulse"></span>
            <span>Winnebago County 24/7 Dispatch Desk</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-black text-white">
            Connect With Trinity Plumbing &amp; HVAC
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            Zero automated call centers. Call or text directly to speak with Mike or an on-duty master technician.
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Main Clickable / Copyable Phone Box */}
          <div className="bg-slate-50 border-2 border-pipe-500/40 rounded-2xl p-5 text-center space-y-3 shadow-inner">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Direct Emergency Call &amp; Text Line
            </span>
            
            <a 
              href={rawNumber}
              className="text-2xl sm:text-3xl font-black text-steel-950 hover:text-pipe-700 tracking-tight block transition-colors"
            >
              {phoneNumber}
            </a>

            <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
              <a
                href={rawNumber}
                className="inline-flex items-center gap-1.5 bg-flame-600 hover:bg-flame-700 text-white font-bold text-xs px-4 py-2 rounded-lg shadow transition-all btn-emergency-glow"
              >
                <Phone className="w-3.5 h-3.5 fill-white" />
                <span>Call Now</span>
              </a>

              <a
                href={textNumber}
                className="inline-flex items-center gap-1.5 bg-pipe-700 hover:bg-pipe-800 text-white font-bold text-xs px-4 py-2 rounded-lg shadow transition-all"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Text Photos</span>
              </a>

              <button
                type="button"
                onClick={handleCopy}
                className="inline-flex items-center gap-1.5 bg-white hover:bg-slate-100 text-slate-700 font-bold text-xs px-4 py-2 rounded-lg border border-slate-300 transition-all shadow-sm"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-pipe-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>
          </div>

          {/* Quick Callback Section */}
          <div className="border-t border-slate-200 pt-5">
            <span className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              Prefer an Immediate Callback?
            </span>

            {callbackRequested ? (
              <div className="p-4 bg-pipe-50 border border-pipe-200 rounded-xl text-center text-xs text-pipe-900 space-y-1">
                <Check className="w-5 h-5 text-pipe-600 mx-auto" />
                <p className="font-bold">Callback Queued!</p>
                <p className="text-slate-600">Our dispatcher will call {callbackPhone} in approximately 5 to 10 minutes.</p>
              </div>
            ) : (
              <form onSubmit={handleCallbackSubmit} className="flex gap-2">
                <input
                  type="tel"
                  required
                  value={callbackPhone}
                  onChange={(e) => setCallbackPhone(e.target.value)}
                  placeholder="Enter your phone number..."
                  className="flex-1 px-3 py-2.5 rounded-xl border border-slate-300 focus:border-pipe-600 focus:ring-1 focus:ring-pipe-200 text-xs outline-none"
                />
                <button
                  type="submit"
                  className="bg-steel-900 hover:bg-steel-800 text-white font-bold text-xs px-4 py-2.5 rounded-xl shadow transition-all shrink-0"
                >
                  Request Callback
                </button>
              </form>
            )}
          </div>

          {/* Dispatch Credentials */}
          <div className="pt-2 border-t border-slate-200 grid grid-cols-2 gap-3 text-[11px] text-slate-500">
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-copper-500" />
              24/7 Illinois Dispatch
            </span>
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-pipe-600" />
              Licensed • Bonded • Insured
            </span>
          </div>

        </div>
      </div>
    </div>
  );
}
