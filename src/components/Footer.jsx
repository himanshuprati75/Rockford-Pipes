import React from 'react';
import { Phone, Mail, MapPin, Clock, ShieldCheck, Award, HeartHandshake, MessageSquare } from 'lucide-react';

export default function Footer({ onOpenCallModal }) {
  return (
    <footer className="bg-steel-950 text-slate-300 pt-16 pb-24 lg:pb-16 border-t border-steel-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Col 1: Brand & Identity */}
          <div className="space-y-4">
            <div className="bg-white/95 rounded-xl p-3 inline-block shadow-md">
              <img 
                src="/images/logo.png" 
                alt="Trinity Plumbing, HVAC & Remodeling - Rockford Pipes" 
                className="h-12 w-auto object-contain"
              />
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Rockford and Northern Illinois’ trusted master plumbing, HVAC, and bathroom remodeling contractor. Best price guaranteed, 24/7 emergency dispatch, and mobile home specialists.
            </p>
            <div className="flex items-center gap-2 text-xs text-pipe-400 font-semibold">
              <ShieldCheck className="w-4 h-4 text-copper-400" />
              <span>Licensed • Bonded • Insured in Illinois</span>
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4 border-b border-steel-800 pb-2">
              Our Services
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#services" className="hover:text-pipe-400 transition-colors">Emergency Burst Pipe &amp; Leak Repair</a></li>
              <li><a href="#services" className="hover:text-pipe-400 transition-colors">Water Heater Replacement (Tank &amp; Tankless)</a></li>
              <li><a href="#services" className="hover:text-pipe-400 transition-colors">Drain Cleaning &amp; Sewer Rooter Jetting</a></li>
              <li><a href="#services" className="hover:text-pipe-400 transition-colors">Tub-to-Shower Conversions &amp; Remodeling</a></li>
              <li><a href="#services" className="hover:text-pipe-400 transition-colors">24/7 Furnace &amp; Air Conditioning Repair</a></li>
              <li><a href="#services" className="hover:text-pipe-400 transition-colors">Whole-House Copper &amp; PEX Re-piping</a></li>
              <li><a href="#services" className="hover:text-pipe-400 transition-colors">Mobile Home Plumbing &amp; Freeze Protection</a></li>
            </ul>
          </div>

          {/* Col 3: Service Areas */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4 border-b border-steel-800 pb-2">
              Northern Illinois Coverage
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>Rockford, IL (Main Hub)</li>
              <li>Loves Park &amp; Machesney Park</li>
              <li>Belvidere &amp; Boone County</li>
              <li>Roscoe &amp; Rockton</li>
              <li>Cherry Valley &amp; Winnebago</li>
              <li>Freeport &amp; Stephenson County</li>
              <li>Greater Chicagoland Area</li>
            </ul>
          </div>

          {/* Col 4: NAP & Hours */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4 border-b border-steel-800 pb-2">
              Contact &amp; Dispatch
            </h4>
            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-pipe-400 shrink-0 mt-0.5" />
                <span>
                  Rockford, Illinois 61108<br />
                  Winnebago &amp; Boone Counties
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-flame-400 shrink-0" />
                <a href="tel:8158211185" className="font-bold text-white hover:text-pipe-400 transition-colors text-sm">
                  (815) 821-1185 <span className="text-[11px] text-slate-400 font-normal">(Call or Text)</span>
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-pipe-400 shrink-0" />
                <a href="mailto:Rockfordpipes@gmail.com" className="hover:text-pipe-400 transition-colors">
                  Rockfordpipes@gmail.com
                </a>
              </div>

              <div className="flex items-start gap-2.5 pt-2 border-t border-steel-800">
                <Clock className="w-4 h-4 text-copper-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block font-bold text-white">Emergency Hours:</span>
                  <span>Open 24 Hours / 7 Days A Week</span>
                  <span className="block text-flame-400 font-semibold mt-0.5">True Rapid Emergency Dispatch</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-steel-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} Trinity Plumbing, HVAC, &amp; Remodeling (Rockford Pipes). All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-slate-400">Illinois Licensed • Bonded • Insured</span>
            <span>•</span>
            <span className="text-copper-400">Best Price Guaranteed</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
