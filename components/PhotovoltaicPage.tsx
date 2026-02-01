
import React, { useState } from 'react';

export const PhotovoltaicPage: React.FC = () => {
  const [roofArea, setRoofArea] = useState<number>(20);
  const estimatedPower = (roofArea * 0.15).toFixed(1);
  const estimatedSavings = (roofArea * 45).toFixed(0);

  const CONTACT_PHONE = "+21628387487";
  const CONTACT_FB = "https://www.facebook.com/joujou.amine.50";

  return (
    <div className="animate-in fade-in duration-500">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center overflow-hidden bg-slate-900">
        <img 
          src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2000&auto=format&fit=crop" 
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          alt="Solar panels"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/60 to-transparent"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl space-y-8">
            <div className="inline-flex items-center gap-2 bg-amber-500/20 backdrop-blur-md border border-amber-500/30 px-4 py-2 rounded-full">
              <span className="material-icons-round text-amber-500">wb_sunny</span>
              <span className="text-amber-500 font-black text-xs uppercase tracking-widest">Solaire Sfax Pro</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight">
              L'ÉNERGIE DU SOLEIL <br/> POUR VOTRE <span className="text-amber-500 underline decoration-wavy">MAISON</span>
            </h1>
            <p className="text-slate-300 text-xl leading-relaxed">
              Quincaillerie Feyez vous accompagne dans votre transition énergétique à Sfax. Installation certifiée, panneaux haute performance et économies garanties.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href={CONTACT_FB}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-500 hover:bg-amber-600 text-slate-900 px-10 py-5 rounded-2xl font-black text-lg transition-all hover:scale-105 shadow-xl shadow-amber-500/20 flex items-center gap-2"
              >
                DEMANDER UN DEVIS <span className="material-icons-round">facebook</span>
              </a>
              <a 
                href={`tel:${CONTACT_PHONE}`}
                className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 px-10 py-5 rounded-2xl font-black text-lg transition-all flex items-center gap-2"
              >
                APPELER EXPERT <span className="material-icons-round">call</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-24 container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-black text-slate-900 dark:text-white uppercase">Calculez votre potentiel</h2>
            <p className="text-slate-500 dark:text-slate-400 text-lg">
              Estimez rapidement la puissance installable et vos économies annuelles moyennes basées sur l'ensoleillement de la région de Sfax.
            </p>
            
            <div className="space-y-8 p-8 bg-slate-50 dark:bg-slate-900 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-inner">
              <div className="space-y-4">
                <div className="flex justify-between font-black text-sm uppercase text-slate-400">
                  <span>Surface de toit disponible</span>
                  <span className="text-amber-500">{roofArea} m²</span>
                </div>
                <input 
                  type="range" 
                  min="5" 
                  max="200" 
                  value={roofArea}
                  onChange={(e) => setRoofArea(parseInt(e.target.value))}
                  className="w-full h-3 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 bg-white dark:bg-slate-800 rounded-2xl border-2 border-amber-500/20">
                  <span className="block text-[10px] font-black text-slate-400 uppercase mb-1">Puissance Est.</span>
                  <span className="text-3xl font-black text-slate-900 dark:text-white">{estimatedPower} kWp</span>
                </div>
                <div className="p-6 bg-white dark:bg-slate-800 rounded-2xl border-2 border-amber-500/20">
                  <span className="block text-[10px] font-black text-slate-400 uppercase mb-1">Économies / an</span>
                  <span className="text-3xl font-black text-amber-500">{estimatedSavings} TND</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-amber-500 p-8 rounded-[3rem] text-slate-900 space-y-4 shadow-xl shadow-amber-500/20 rotate-1">
              <span className="material-icons-round text-5xl">savings</span>
              <h3 className="text-xl font-black uppercase">Rentabilité Rapide</h3>
              <p className="text-slate-900/70 font-bold text-sm">Amortissez votre investissement en moins de 6 ans grâce aux aides de l'État.</p>
            </div>
            <div className="bg-slate-900 p-8 rounded-[3rem] text-white space-y-4 shadow-xl shadow-slate-900/20 -rotate-1 mt-12">
              <span className="material-icons-round text-5xl text-amber-500">verified</span>
              <h3 className="text-xl font-black uppercase">Garantie 25 Ans</h3>
              <p className="text-slate-400 font-bold text-sm">Nous utilisons uniquement des panneaux certifiés Tier-1 avec suivi intelligent.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Specialist Card */}
      <section className="py-12 container mx-auto px-4">
        <div className="bg-white dark:bg-slate-900 border-4 border-amber-500 rounded-[3rem] p-10 flex flex-col md:flex-row items-center gap-8 shadow-2xl">
          <div className="w-24 h-24 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
             <span className="material-icons-round text-5xl text-amber-600">contact_phone</span>
          </div>
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl font-black uppercase text-slate-900 dark:text-white mb-2">Contact Direct Spécialiste</h3>
            <p className="text-slate-500 dark:text-slate-400 font-bold">Contactez Amine pour toute question technique ou installation immédiate.</p>
          </div>
          <div className="flex flex-col gap-3 w-full md:w-auto">
            <a href={`tel:${CONTACT_PHONE}`} className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-black flex items-center justify-center gap-3 hover:scale-105 transition-transform">
              <span className="material-icons-round">phone</span> {CONTACT_PHONE}
            </a>
            <a href={CONTACT_FB} target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-black flex items-center justify-center gap-3 hover:scale-105 transition-transform">
              <span className="material-icons-round">facebook</span> Amine Joujou
            </a>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="bg-slate-100 dark:bg-slate-800/50 py-16">
        <div className="container mx-auto px-4 text-center space-y-8">
          <span className="text-xs font-black text-slate-400 uppercase tracking-[0.3em]">Nos Partenaires Matériel</span>
          <div className="flex flex-wrap justify-center gap-12 grayscale opacity-50">
             <div className="text-2xl font-black text-slate-400">SOLAR EDGE</div>
             <div className="text-2xl font-black text-slate-400">HUAWEI</div>
             <div className="text-2xl font-black text-slate-400">JINKO SOLAR</div>
             <div className="text-2xl font-black text-slate-400">SMA</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 container mx-auto px-4">
        <div className="bg-gradient-to-br from-amber-400 to-amber-600 rounded-[4rem] p-12 md:p-20 text-center space-y-8 relative overflow-hidden">
           <div className="absolute -top-20 -left-20 w-64 h-64 bg-white/20 rounded-full blur-3xl"></div>
           <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-slate-900/10 rounded-full blur-3xl"></div>
           
           <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight max-w-3xl mx-auto">
             PRÊT À RÉDUIRE VOTRE FACTURE STEG ?
           </h2>
           <p className="text-slate-900/80 text-xl font-bold max-w-xl mx-auto">
             Prenez rendez-vous avec Amine pour une étude gratuite sur site à Sfax.
           </p>
           <a 
            href={`tel:${CONTACT_PHONE}`}
            className="inline-flex items-center gap-3 bg-slate-900 text-white px-16 py-6 rounded-3xl font-black text-xl hover:scale-105 transition-all shadow-2xl"
           >
             PRENDRE RENDEZ-VOUS <span className="material-icons-round">event_available</span>
           </a>
        </div>
      </section>
    </div>
  );
};
