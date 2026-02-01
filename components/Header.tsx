
import React, { useState, useRef, useEffect } from 'react';
import { Calculator } from './Calculator';
import { UserProfile } from '../types';

interface HeaderProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
  onNavigate?: (view: 'home' | 'shopping-hub' | 'sell-wizard' | 'photovoltaic') => void;
  user: UserProfile;
  onLogin: (email: string, phone: string, isStudent: boolean) => void;
  onLogout: () => void;
}

export const Header: React.FC<HeaderProps> = ({ isDarkMode, toggleTheme, onNavigate, user, onLogin, onLogout }) => {
  const [showCalc, setShowCalc] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [isStudent, setIsStudent] = useState(false);
  
  const calcRef = useRef<HTMLDivElement>(null);
  const loginRef = useRef<HTMLDivElement>(null);

  const brandColor = user.isStudent ? 'text-indigo-600' : 'text-primary';
  const bgColor = user.isStudent ? 'bg-indigo-600' : 'bg-primary';

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (calcRef.current && !calcRef.current.contains(event.target as Node)) {
        setShowCalc(false);
      }
      if (loginRef.current && !loginRef.current.contains(event.target as Node)) {
        setShowLogin(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(email, phone, isStudent);
    setShowLogin(false);
  };

  return (
    <header className={`sticky top-0 z-50 w-full border-b transition-colors duration-500 ${user.isStudent ? 'border-indigo-100 dark:border-indigo-900 bg-indigo-50/80 dark:bg-slate-950/80' : 'border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-background-dark/80'} backdrop-blur-md`}>
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <button onClick={() => onNavigate?.('home')} className="flex items-center gap-2 outline-none">
            <div className={`${bgColor} p-2 rounded-lg text-white transition-colors duration-500`}>
              <span className="material-icons-round">construction</span>
            </div>
            <span className="text-xl font-bold tracking-tight uppercase">Quincaillerie <span className={`${brandColor} font-black transition-colors duration-500`}>Feyez</span></span>
          </button>
          
          <nav className="hidden lg:flex items-center gap-6">
            <button onClick={() => onNavigate?.('home')} className="text-sm font-medium hover:text-primary transition-colors">Accueil</button>
            <button 
              onClick={() => onNavigate?.('photovoltaic')}
              className="flex items-center gap-1 text-sm font-black text-amber-500 hover:text-amber-600 transition-colors"
            >
              <span className="material-icons-round text-lg">wb_sunny</span> Solaire Sfax
            </button>
            <a href="#games" className="flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors">
              <span className="material-icons-round text-lg">videogame_asset</span> Gaming
            </a>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          {user.isLoggedIn && (
            <div className={`hidden md:flex items-center gap-2 px-4 py-2 rounded-full border ${user.isStudent ? 'bg-indigo-100 dark:bg-indigo-900/40 border-indigo-200' : 'bg-slate-100 dark:bg-slate-800 border-slate-200'}`}>
              <span className="material-icons-round text-amber-500 text-sm">{user.isStudent ? 'school' : 'workspace_premium'}</span>
              <span className="text-xs font-black uppercase tracking-tighter">{user.isStudent ? 'Étudiant' : 'Score'}: {user.score} pts</span>
            </div>
          )}

          <div className="relative" ref={calcRef}>
            <button 
              onClick={() => setShowCalc(!showCalc)}
              className={`p-2 rounded-full transition-colors ${showCalc ? `${bgColor} text-white` : 'hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400'}`}
              title="Mini Calculator"
            >
              <span className="material-icons-round">calculate</span>
            </button>
            {showCalc && (
              <div className="absolute right-0 top-12">
                <Calculator />
              </div>
            )}
          </div>
          
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-400"
          >
            <span className="material-icons-round">
              {isDarkMode ? 'light_mode' : 'dark_mode'}
            </span>
          </button>

          <div className="h-6 w-[1px] bg-slate-200 dark:bg-slate-800 mx-1 hidden sm:block"></div>

          <div className="relative" ref={loginRef}>
            {user.isLoggedIn ? (
              <button 
                onClick={onLogout}
                className="bg-slate-800 text-white px-5 py-2 rounded-full font-bold transition-all flex items-center gap-2 shadow-lg text-xs uppercase"
              >
                <span className="material-icons-round text-base">logout</span> {user.email.split('@')[0]}
              </button>
            ) : (
              <button 
                onClick={() => setShowLogin(!showLogin)}
                className="bg-primary hover:bg-primary/90 text-white px-5 py-2 rounded-full font-bold transition-all flex items-center gap-2 shadow-lg shadow-primary/20 text-xs uppercase"
              >
                <span className="material-icons-round text-base">person</span> Connexion
              </button>
            )}

            {showLogin && (
              <div className="absolute right-0 top-12 w-80 bg-white dark:bg-slate-900 shadow-2xl rounded-[2rem] border border-slate-200 dark:border-slate-800 p-6 animate-in slide-in-from-top-2">
                <h3 className="text-lg font-black mb-4 uppercase tracking-tight">Espace Client Sfax</h3>
                <form onSubmit={handleLoginSubmit} className="space-y-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase text-slate-400">Email</label>
                    <input 
                      required 
                      type="email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-xl text-sm" 
                      placeholder="votre@email.com"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase text-slate-400">Mot de passe</label>
                    <input 
                      required 
                      type="password" 
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-xl text-sm" 
                      placeholder="••••••••"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase text-slate-400">Téléphone (Optionnel)</label>
                    <input 
                      type="tel" 
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-xl text-sm" 
                      placeholder="+216 12 345 678"
                    />
                  </div>
                  <div className="flex items-center gap-2 py-2">
                    <input 
                      type="checkbox" 
                      id="isStudent" 
                      checked={isStudent}
                      onChange={(e) => setIsStudent(e.target.checked)}
                      className="rounded text-primary focus:ring-primary"
                    />
                    <label htmlFor="isStudent" className="text-xs font-bold text-slate-600 dark:text-slate-300">Je suis étudiant (Offre Projets)</label>
                  </div>
                  <button type="submit" className="w-full bg-primary text-white py-3 rounded-xl font-black text-sm uppercase shadow-lg shadow-primary/20">Se Connecter</button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
