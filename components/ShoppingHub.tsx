
import React, { useState, useMemo } from 'react';
import { PRODUCTS, CATEGORIES, PROJECT_BUNDLES } from '../constants';
import { ProductCard } from './ProductCard';
import { Product } from '../types';

interface ShoppingHubProps {
  onBack: () => void;
  onAddToCart: (p: Product) => void;
  userProducts: Product[];
}

export const ShoppingHub: React.FC<ShoppingHubProps> = ({ onBack, onAddToCart, userProducts }) => {
  const [activeTab, setActiveTab] = useState<'search' | 'projects'>('search');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortAZ, setSortAZ] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [conditionFilter, setConditionFilter] = useState<'all' | 'new' | 'used'>('all');

  const allAvailableProducts = useMemo(() => [...PRODUCTS, ...userProducts], [userProducts]);

  const filteredProducts = useMemo(() => {
    let result = [...allAvailableProducts];
    
    // Filter by Condition
    if (conditionFilter === 'new') {
      result = result.filter(p => !p.isUsed);
    } else if (conditionFilter === 'used') {
      result = result.filter(p => p.isUsed);
    }

    if (searchQuery) {
      result = result.filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()));
    }
    if (selectedCategory) {
      result = result.filter(p => 
        p.description.toLowerCase().includes(selectedCategory.toLowerCase()) || 
        p.name.toLowerCase().includes(selectedCategory.toLowerCase())
      );
    }
    if (sortAZ) {
      result.sort((a, b) => a.name.localeCompare(b.name));
    }
    return result;
  }, [allAvailableProducts, searchQuery, sortAZ, selectedCategory, conditionFilter]);

  return (
    <div className="fixed inset-0 z-[100] bg-white dark:bg-background-dark overflow-y-auto animate-in fade-in slide-in-from-bottom-4 duration-300">
      {/* Navigation Header */}
      <div className="sticky top-0 z-10 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 p-4">
        <div className="container mx-auto flex items-center justify-between">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 font-bold text-slate-500 hover:text-primary transition-colors"
          >
            <span className="material-icons-round">arrow_back</span> Retour
          </button>
          <div className="flex gap-2 bg-slate-100 dark:bg-slate-800 p-1 rounded-2xl">
            <button 
              onClick={() => setActiveTab('search')}
              className={`px-6 py-2 rounded-xl text-sm font-black transition-all ${activeTab === 'search' ? 'bg-white dark:bg-slate-700 text-primary shadow-sm' : 'text-slate-500'}`}
            >
              BOUTIQUE & OCCASION
            </button>
            <button 
              onClick={() => setActiveTab('projects')}
              className={`px-6 py-2 rounded-xl text-sm font-black transition-all ${activeTab === 'projects' ? 'bg-white dark:bg-slate-700 text-primary shadow-sm' : 'text-slate-500'}`}
            >
              PROJETS FEYEZ
            </button>
          </div>
          <div className="w-20 hidden md:block"></div>
        </div>
      </div>

      <div className="bg-primary/5 dark:bg-primary/10 py-3 px-4 border-b border-primary/10">
        <div className="container mx-auto flex items-center justify-center gap-3 text-[10px] font-black uppercase text-primary tracking-widest">
           <span className="material-icons-round text-sm">local_shipping</span>
           Livraison disponible partout à Sfax • Votre commande chez vous rapidement
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {activeTab === 'search' ? (
          <div className="space-y-12">
            {/* Search Controls */}
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="relative">
                <span className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400">
                  <span className="material-icons-round text-3xl">search</span>
                </span>
                <input 
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Écrivez le nom de l'objet à trouver..."
                  className="w-full pl-16 pr-8 py-6 bg-slate-50 dark:bg-slate-800/50 border-2 border-slate-100 dark:border-slate-800 rounded-[2rem] text-xl focus:ring-4 focus:ring-primary/20 focus:border-primary transition-all shadow-inner"
                />
              </div>

              <div className="flex flex-wrap gap-6 items-center justify-between">
                {/* Condition Toggles */}
                <div className="flex items-center gap-3">
                  <span className="text-xs font-black text-slate-400 uppercase tracking-widest">État:</span>
                  <div className="flex gap-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-full">
                    {(['all', 'new', 'used'] as const).map(c => (
                      <button
                        key={c}
                        onClick={() => setConditionFilter(c)}
                        className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase transition-all ${conditionFilter === c ? 'bg-white dark:bg-slate-600 text-primary shadow-sm' : 'text-slate-400'}`}
                      >
                        {c === 'all' ? 'Tous' : c === 'new' ? 'Neuf' : 'Occasion'}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs font-black text-slate-400 uppercase tracking-widest">Trier par:</span>
                  <button 
                    onClick={() => setSortAZ(!sortAZ)}
                    className={`px-4 py-2 rounded-full border-2 text-[10px] font-black transition-all flex items-center gap-2 ${sortAZ ? 'bg-primary text-white border-primary' : 'border-slate-200 dark:border-slate-800 hover:border-primary text-slate-600'}`}
                  >
                    <span className="material-icons-round text-sm">sort_by_alpha</span>
                    A à Z
                  </button>
                </div>

                <div className="flex flex-wrap gap-2">
                  {CATEGORIES.slice(0, 4).map(cat => (
                    <button 
                      key={cat.name}
                      onClick={() => setSelectedCategory(selectedCategory === cat.name ? null : cat.name)}
                      className={`px-3 py-1.5 rounded-full border-2 text-[10px] font-black transition-all ${selectedCategory === cat.name ? 'bg-secondary text-white border-secondary' : 'border-slate-200 dark:border-slate-800 hover:border-secondary text-slate-600'}`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
              {filteredProducts.map(p => (
                <ProductCard key={p.id} product={p} onAddToCart={onAddToCart} />
              ))}
              {filteredProducts.length === 0 && (
                <div className="col-span-full py-20 text-center text-slate-400">
                  <span className="material-icons-round text-6xl mb-4">search_off</span>
                  <p className="text-xl font-bold">Aucun produit trouvé pour "{searchQuery}"</p>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-4">
              <h1 className="text-4xl font-black text-slate-900 dark:text-white uppercase">Solutions de Projets</h1>
              <p className="text-slate-500 text-lg">Choisissez une thématique et nous regroupons tout ce qu'il vous faut pour réussir vos travaux.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {PROJECT_BUNDLES.map(bundle => (
                <div key={bundle.id} className="group relative bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 rounded-[3rem] overflow-hidden flex flex-col md:flex-row shadow-xl hover:shadow-2xl transition-all">
                  <div className="md:w-1/3 relative h-48 md:h-auto overflow-hidden">
                    <img src={bundle.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={bundle.title} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                      <div className="bg-white/20 backdrop-blur-md p-2 rounded-xl">
                        <span className="material-icons-round text-white text-3xl">{bundle.icon}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 p-8 space-y-6">
                    <div>
                      <h3 className="text-2xl font-black text-slate-800 dark:text-white mb-2">{bundle.title}</h3>
                      <p className="text-slate-500 text-sm leading-relaxed">{bundle.description}</p>
                    </div>

                    <div className="space-y-2">
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Inclus dans le pack :</span>
                      <div className="grid grid-cols-2 gap-2">
                        {bundle.items.map(item => (
                          <div key={item} className="flex items-center gap-2 text-xs font-bold text-slate-600 dark:text-slate-400">
                            <span className="material-icons-round text-primary text-[10px]">check_circle</span>
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
                      <div>
                        <span className="block text-2xl font-black text-primary">--</span>
                        <span className="text-[10px] font-black text-primary uppercase">Tunisian Dinar</span>
                      </div>
                      <button 
                        className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-2xl font-black text-sm shadow-lg shadow-primary/20 transition-all hover:scale-105"
                        onClick={() => alert('Ajout du pack complet au panier...')}
                      >
                        ACHETER TOUT
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-blue-600 text-white p-12 rounded-[3rem] relative overflow-hidden flex flex-col items-center text-center gap-6">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <span className="material-icons-round text-[200px]">construction</span>
              </div>
              <h2 className="text-4xl font-black">Besoin d'un Projet sur Mesure ?</h2>
              <p className="text-blue-100 text-lg max-w-xl">Nos techniciens à Sfax peuvent créer un kit personnalisé selon les mesures de vos portes ou de votre jardin.</p>
              <button className="bg-white text-blue-600 px-12 py-4 rounded-2xl font-black text-lg hover:scale-105 transition-transform shadow-2xl">DEMANDER UN DEVIS GRATUIT</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
