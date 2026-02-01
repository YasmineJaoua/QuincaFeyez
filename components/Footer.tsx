
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 mt-12 py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-primary p-2 rounded-lg text-white">
                <span className="material-icons-round">construction</span>
              </div>
              <span className="text-2xl font-bold tracking-tight uppercase">Quincaillerie <span className="text-primary">Feyez</span></span>
            </div>
            <div className="space-y-4">
              <p className="text-slate-500 dark:text-slate-400 max-w-md leading-relaxed font-medium">
                The leading hardware store marketplace in Sfax. Quality tools, expert advice, and reliable service since 1998.
              </p>
              <div className="flex items-start gap-3 text-slate-600 dark:text-slate-300">
                <span className="material-icons-round text-primary">location_on</span>
                <div>
                  <p className="font-bold text-sm">NOTRE SIÈGE :</p>
                  <p className="text-xs">Sfax Saltniya Klm 5, Cité Simar, Tunisie</p>
                </div>
              </div>
              <div className="flex items-start gap-3 text-slate-600 dark:text-slate-300">
                <span className="material-icons-round text-secondary">local_shipping</span>
                <div>
                  <p className="font-bold text-sm">LIVRAISON :</p>
                  <p className="text-xs">Nous prenons en charge vos commandes partout à Sfax.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-black text-xs uppercase tracking-widest mb-6 text-slate-400">Navigation</h4>
            <ul className="space-y-3 text-slate-500 dark:text-slate-400 text-sm font-bold">
              <li><a href="#" className="hover:text-primary transition-colors flex items-center gap-2">À Propos</a></li>
              <li><a href="#" className="hover:text-primary transition-colors flex items-center gap-2">Nos Services Sfax</a></li>
              <li><a href="#" className="hover:text-primary transition-colors flex items-center gap-2">Catalogue Complet</a></li>
              <li><a href="#" className="hover:text-primary transition-colors flex items-center gap-2">Mentions Légales</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-black text-xs uppercase tracking-widest mb-6 text-slate-400">Connect With Us</h4>
            <div className="flex gap-4">
              {[
                { icon: 'facebook', label: 'Facebook', url: 'https://www.facebook.com/profile.php?id=61587270874912&locale=fr_FR' },
                { icon: 'alternate_email', label: 'Email', url: 'mailto:contact@feyez-sfax.tn' },
                { icon: 'share', label: 'Share', url: '#' }
              ].map((social) => (
                <a 
                  key={social.icon}
                  href={social.url} 
                  target={social.url.startsWith('http') ? "_blank" : undefined}
                  rel={social.url.startsWith('http') ? "noopener noreferrer" : undefined}
                  aria-label={social.label}
                  className="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-2xl flex items-center justify-center hover:bg-primary hover:text-white hover:scale-110 transition-all text-slate-600 dark:text-slate-400"
                >
                  <span className="material-icons-round">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-slate-100 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-wider">
          <p>© 2026 Quincaillerie Feyez. Tous droits réservés. Klm 5 Cité Simar.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary">Confidentialité</a>
            <a href="#" className="hover:text-primary">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
