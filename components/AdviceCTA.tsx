
import React from 'react';

export const AdviceCTA: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="bg-[#0A1120] text-white rounded-[3rem] p-8 md:p-14 flex flex-col md:flex-row items-center gap-10 overflow-hidden relative">
        <div className="absolute right-0 top-0 w-64 h-64 bg-primary/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
        <div className="flex-1 text-center md:text-left relative z-10">
          <div className="inline-flex items-center gap-2 bg-primary/20 text-primary-light px-4 py-2 rounded-full mb-6 border border-primary/30">
            <span className="material-icons-round text-primary text-sm">location_on</span>
            <span className="text-[10px] font-black uppercase tracking-widest text-white">Sfax Saltniya Klm 5 Cité Simar</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black mb-4 uppercase leading-tight">Besoin d'aide ou d'un service ?</h2>
          <p className="text-slate-400 text-lg max-w-lg">Nos experts à Sfax sont là pour vous. Nous nous occupons de tout, de la livraison à la maintenance technique de vos serrures et robinets.</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 relative z-10 w-full md:w-auto">
          <button className="bg-white text-slate-900 px-10 py-4 rounded-full font-black hover:bg-slate-100 transition-all hover:scale-105 active:scale-95 whitespace-nowrap uppercase text-sm">Nous Contacter</button>
          <a 
            href="https://www.google.com/maps/search/Sfax+Saltniya+Klm+5+Cit%C3%A9+Simar" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-primary px-10 py-4 rounded-full font-black hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 whitespace-nowrap shadow-lg shadow-primary/30 uppercase text-sm flex items-center justify-center gap-2"
          >
            Localisation GPS <span className="material-icons-round text-sm">map</span>
          </a>
        </div>
      </div>

      {/* Services Quick Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { icon: 'key', title: 'Clonage Clés', desc: 'Double de clés minute - Saltniya' },
          { icon: 'lock_open', title: 'Serrures', desc: 'Réparation cylindres Sfax' },
          { icon: 'plumbing', title: 'Robinetterie', desc: 'Fixation & Réparation robinets' },
          { icon: 'local_shipping', title: 'Livraison Sfax', desc: 'Nous prenons en charge votre commande' }
        ].map((service, i) => (
          <div key={i} className="bg-white dark:bg-slate-900 p-6 rounded-[2rem] border border-slate-100 dark:border-slate-800 text-center space-y-3 hover:border-primary transition-colors group">
            <div className="w-12 h-12 bg-slate-50 dark:bg-slate-800 rounded-2xl flex items-center justify-center mx-auto group-hover:bg-primary/10 transition-colors">
              <span className="material-icons-round text-slate-600 dark:text-slate-400 group-hover:text-primary">{service.icon}</span>
            </div>
            <h4 className="font-black text-sm uppercase text-slate-900 dark:text-white">{service.title}</h4>
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter leading-tight">{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
