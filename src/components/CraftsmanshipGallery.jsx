import React, { useState } from 'react';
import { Camera, ShieldCheck, Award, Eye, Wrench, CheckCircle, X } from 'lucide-react';

export default function CraftsmanshipGallery({ onOpenCallModal }) {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const galleryItems = [
    {
      image: '/images/badge2.png',
      title: 'Precision Soldered Copper Piping & Ball Valves',
      category: 'Master Pipe Soldering',
      caption: 'Clean, leak-free copper solder joints with heavy-duty quarter-turn brass ball valves for emergency water shutoff in Rockford.',
    },
    {
      image: '/images/bathroom_remodel.jpg',
      title: 'Complete Luxury Bathroom Remodel',
      category: 'Bathroom Transformation',
      caption: 'Full-scope remodel featuring custom porcelain tile, modern vanity installation, mirror lighting, and premium Moen plumbing fixtures.',
    },
    {
      image: '/images/walk_in_shower.jpg',
      title: 'Safe & Modern Walk-In Shower Conversion',
      category: 'Tub-to-Shower Conversion',
      caption: 'Replaced a cramped, slippery tub with a spacious zero-threshold walk-in shower with designer subway tile and matte black showerhead.',
    },
    {
      image: '/images/water_heater.jpg',
      title: 'Bradford White Water Heater Installation',
      category: 'Water Heater Replacement',
      caption: 'Code-compliant installation with thermal expansion tank, brass drain valve, and high-temp relief line completed the same day.',
    },
    {
      image: '/images/van.jpg',
      title: 'Stocked Mobile Emergency Service Fleet',
      category: 'Rockford Dispatch',
      caption: 'Our mobile trucks carry thousands of feet of PEX, copper fittings, valves, and water heaters for true single-visit solutions.',
    },
    {
      image: '/images/hero_mike.jpg',
      title: 'Mike — Master Technician On-Site Inspection',
      category: 'Licensed Master Plumber',
      caption: 'Every installation is triple-checked for pressure integrity, local code compliance, and clean aesthetics before we leave.',
    },
  ];

  return (
    <section id="craftsmanship" className="bg-steel-950 py-16 sm:py-24 text-white border-b border-steel-800 scroll-mt-20 relative overflow-hidden">
      {/* Background Subtle Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(#0284c7_1px,transparent_1px)] [background-size:32px_32px] opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-pipe-400 bg-steel-900/80 border border-pipe-500/40 px-3 py-1 rounded-full mb-3">
              <Camera className="w-3.5 h-3.5" />
              <span>Authentic Photographic Proof</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Craftsmanship In Action • Real Rockford Work
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-300 max-w-xl">
              Inspect our real installations across Winnebago &amp; Boone Counties. Every pipe, fitting, and tile is installed to master trade standards.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs text-slate-400 hidden sm:inline">100% Real Illinois Work</span>
            <a
              href="tel:8158211185"
              className="bg-flame-600 hover:bg-flame-500 text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-xl shadow-lg transition-all flex items-center gap-2"
            >
              <Wrench className="w-4 h-4" />
              <span>Request On-Site Estimate</span>
            </a>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, idx) => (
            <div 
              key={idx}
              onClick={() => setSelectedPhoto(item)}
              className="group cursor-pointer rounded-2xl overflow-hidden bg-steel-900 border border-steel-800 hover:border-pipe-500/60 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-2xl flex flex-col"
            >
              <div className="relative h-60 overflow-hidden bg-slate-900">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-steel-950 via-transparent to-black/10"></div>
                
                {/* Category Badge */}
                <span className="absolute top-3 left-3 bg-steel-950/80 backdrop-blur-md text-pipe-300 text-[11px] font-bold px-2.5 py-0.5 rounded-md border border-pipe-500/30">
                  {item.category}
                </span>

                {/* Hover zoom eye */}
                <div className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-steel-900/80 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Eye className="w-4 h-4" />
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-base text-white group-hover:text-pipe-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-300 mt-2 line-clamp-2">
                    {item.caption}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-steel-800/80 flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-1 text-copper-400 font-semibold">
                    <CheckCircle className="w-3.5 h-3.5" />
                    Verified Rockford Project
                  </span>
                  <span className="text-pipe-400 font-bold group-hover:underline">Inspect</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md p-4 flex items-center justify-center animate-in fade-in duration-200"
          onClick={() => setSelectedPhoto(null)}
        >
          <div 
            className="max-w-3xl w-full bg-steel-900 rounded-3xl overflow-hidden border border-slate-700 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-steel-950/80 text-white flex items-center justify-center hover:bg-flame-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="max-h-[60vh] overflow-hidden bg-black flex items-center justify-center">
              <img 
                src={selectedPhoto.image} 
                alt={selectedPhoto.title} 
                className="max-h-[60vh] w-auto object-contain"
              />
            </div>

            <div className="p-6 sm:p-8 space-y-3 bg-steel-900 text-white">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-pipe-400 bg-pipe-950/80 px-2.5 py-0.5 rounded border border-pipe-500/30">
                  {selectedPhoto.category}
                </span>
                <span className="text-xs text-slate-400">• Winnebago County, IL</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white">
                {selectedPhoto.title}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {selectedPhoto.caption}
              </p>
              
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <span className="text-xs text-slate-400">Have a similar project?</span>
                <a
                  href="tel:8158211185"
                  className="bg-flame-600 hover:bg-flame-500 text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl shadow transition-all"
                >
                  Call or Text (815) 821-1185
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
