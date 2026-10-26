import React, { useState, useEffect } from 'react';
import { Phone, CheckCircle2, ShieldCheck, Clock, Ticket, AlertTriangle, Send, Sparkles, MessageSquare } from 'lucide-react';

export default function LeadCaptureForm({ selectedIssue, voucherData, onOpenCallModal }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: 'Rockford',
    service: 'burst_pipe',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');

  // Sync selected issue from Calculator or Hero
  useEffect(() => {
    if (selectedIssue) {
      setFormData(prev => ({ ...prev, service: selectedIssue }));
    }
  }, [selectedIssue]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    // Generate realistic dispatch ticket
    const randomTicket = 'RP-IL-' + Math.floor(1000 + Math.random() * 9000);
    setTicketId(randomTicket);
    setSubmitted(true);
  };

  return (
    <section id="dispatch-form" className="bg-white py-12 sm:py-16 border-b border-slate-200 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Reciprocity Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-pipe-800 bg-pipe-50 border border-pipe-300 px-3.5 py-1 rounded-full mb-3">
            <Sparkles className="w-3.5 h-3.5 text-pipe-600" />
            <span>Priority Online Dispatch + Instant $50 Voucher</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-steel-950 tracking-tight">
            Schedule Fast Local Service In Rockford &amp; Stateline
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Submit your details below to lock in your <strong className="text-pipe-700 font-bold">$50 Web Courtesy Discount</strong>, guaranteed best price, and rapid queue placement.
          </p>
        </div>

        {/* Voucher Banner */}
        <div className="bg-gradient-to-r from-pipe-800 via-pipe-700 to-steel-950 rounded-2xl p-4 sm:p-5 text-white mb-8 shadow-md flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 border border-white/20">
              <Ticket className="w-5 h-5 text-copper-300" />
            </div>
            <div>
              <span className="text-xs uppercase tracking-wider font-extrabold text-copper-300 block">
                Exclusive Web Courtesy
              </span>
              <p className="text-sm font-bold text-white">
                $50 OFF Any Plumbing or HVAC Repair + $0 Overtime Fee
              </p>
            </div>
          </div>
          <div className="text-center sm:text-right shrink-0">
            <span className="text-[11px] font-mono bg-steel-950/80 text-pipe-200 px-3 py-1 rounded-md border border-pipe-400/40 inline-block">
              CODE: TRINITY50-ROCKFORD
            </span>
            <span className="block text-[10px] text-slate-300 mt-0.5">Auto-applied upon dispatch</span>
          </div>
        </div>

        {/* Form Container */}
        <div className="bg-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl">
          
          {submitted ? (
            /* Instant Confirmation State */
            <div className="text-center py-6 space-y-5 animate-in fade-in duration-300">
              <div className="w-16 h-16 bg-pipe-100 text-pipe-700 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-pipe-700 bg-pipe-100 px-3 py-1 rounded-full">
                  Ticket #{ticketId} Active
                </span>
                <h3 className="text-2xl font-black text-steel-950 mt-2">
                  Dispatch Request Received!
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto mt-1">
                  Thank you, <strong className="text-steel-950">{formData.name}</strong>. A Trinity Plumbing &amp; HVAC dispatcher is reviewing your request for <strong className="text-steel-950">{formData.city}</strong>.
                </p>
              </div>

              {/* Status Board */}
              <div className="bg-white p-4 rounded-2xl border border-slate-200 max-w-md mx-auto text-left text-xs space-y-2">
                <div className="flex justify-between">
                  <span className="text-slate-500">Service Requested:</span>
                  <span className="font-bold text-steel-900 uppercase">{formData.service.replace('_', ' ')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Target Area:</span>
                  <span className="font-bold text-steel-900">{formData.city}, IL</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Web Voucher:</span>
                  <span className="font-bold text-flame-700">-$50.00 OFF Applied</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Callback Window:</span>
                  <span className="font-bold text-pipe-700">Within 15 Minutes</span>
                </div>
              </div>

              {/* Emergency Callout */}
              <div className="pt-2">
                <p className="text-xs text-flame-700 font-bold mb-2">
                  Have an active water leak or immediate emergency?
                </p>
                <a
                  href="tel:8158211185"
                  className="inline-flex items-center gap-2 bg-flame-600 hover:bg-flame-500 text-white font-extrabold px-6 py-3 rounded-xl shadow-lg transition-all btn-emergency-glow"
                >
                  <Phone className="w-4 h-4 fill-white" />
                  <span>Call or Text (815) 821-1185 for Instant Line</span>
                </a>
              </div>
            </div>
          ) : (
            /* Lead Capture Form */
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Your Full Name <span className="text-flame-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Robert Smith"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-pipe-600 focus:ring-2 focus:ring-pipe-200 outline-none text-sm transition-all"
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Phone (Call or Text) <span className="text-flame-600">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g. (815) 555-0192"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-pipe-600 focus:ring-2 focus:ring-pipe-200 outline-none text-sm transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* City Selection */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    City / Neighborhood
                  </label>
                  <select
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-pipe-600 focus:ring-2 focus:ring-pipe-200 outline-none text-sm bg-white transition-all font-medium"
                  >
                    <option value="Rockford">Rockford, IL</option>
                    <option value="Loves Park">Loves Park, IL</option>
                    <option value="Machesney Park">Machesney Park, IL</option>
                    <option value="Belvidere">Belvidere, IL</option>
                    <option value="Roscoe">Roscoe, IL</option>
                    <option value="Rockton">Rockton, IL</option>
                    <option value="Freeport">Freeport, IL</option>
                    <option value="Winnebago">Winnebago, IL</option>
                    <option value="Chicagoland">Chicagoland / Other Area</option>
                  </select>
                </div>

                {/* Primary Service Needed */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Primary Service Needed
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-pipe-600 focus:ring-2 focus:ring-pipe-200 outline-none text-sm bg-white transition-all font-medium"
                  >
                    <option value="burst_pipe">Burst Pipe / Water Leak Repair</option>
                    <option value="water_heater">Water Heater (Tank or Tankless)</option>
                    <option value="drain">Drain Cleaning &amp; Sewer Rooter</option>
                    <option value="remodel">Tub-to-Shower Conversion</option>
                    <option value="hvac">Furnace &amp; AC Repair / Tune-Up</option>
                    <option value="mobile_home">Mobile Home Plumbing &amp; Heat Tape</option>
                    <option value="repiping">Whole House PEX Re-piping</option>
                    <option value="sump_pump">Sump Pump &amp; Water Softener</option>
                  </select>
                </div>
              </div>

              {/* Issue Details / Notes */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Describe What Happened (Optional)
                </label>
                <textarea
                  name="notes"
                  rows="3"
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="e.g. Water dripping under sink, pipe frozen, water heater leaking at base, need quote on tub removal..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-pipe-600 focus:ring-2 focus:ring-pipe-200 outline-none text-sm transition-all"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-pipe-700 via-pipe-800 to-pipe-900 hover:from-pipe-600 hover:to-pipe-800 text-white font-black py-4 px-6 rounded-xl shadow-lg transition-all transform hover:-translate-y-0.5 active:scale-95 text-base"
                >
                  <Send className="w-5 h-5 text-copper-400" />
                  <span>Dispatch Plumber &amp; Lock In $50 Voucher</span>
                </button>
              </div>

              {/* Trust Badges */}
              <div className="pt-2 flex flex-wrap items-center justify-between text-xs text-slate-500 border-t border-slate-200 gap-2">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-pipe-600" />
                  No Spam Guarantee • Private &amp; Secure
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4 text-copper-600" />
                  Typical 15-Minute Response Time
                </span>
                <span className="flex items-center gap-1">
                  <Ticket className="w-4 h-4 text-flame-600" />
                  $50 Voucher Confirmed
                </span>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
}
