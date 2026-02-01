
import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { HeroCards } from './components/HeroCards';
import { ProductCard } from './components/ProductCard';
import { GameZone } from './components/GameZone';
import { AdviceCTA } from './components/AdviceCTA';
import { Footer } from './components/Footer';
import { FloatingCart } from './components/FloatingCart';
import { CartDrawer } from './components/CartDrawer';
import { ShoppingHub } from './components/ShoppingHub';
import { SellWizard } from './components/SellWizard';
import { PhotovoltaicPage } from './components/PhotovoltaicPage';
import { PRODUCTS } from './constants';
import { Product, CartItem, UserProfile } from './types';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [currentView, setCurrentView] = useState<'home' | 'shopping-hub' | 'sell-wizard' | 'photovoltaic'>('home');
  const [userProducts, setUserProducts] = useState<Product[]>([]);
  
  const [user, setUser] = useState<UserProfile>({
    email: '',
    phone: '',
    score: 0,
    isLoggedIn: false,
    isStudent: false
  });

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }

    const savedCart = localStorage.getItem('cart');
    if (savedCart) setCartItems(JSON.parse(savedCart));

    const savedUserProducts = localStorage.getItem('userProducts');
    if (savedUserProducts) setUserProducts(JSON.parse(savedUserProducts));

    const savedUser = localStorage.getItem('userProfile');
    if (savedUser) setUser(JSON.parse(savedUser));
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem('userProducts', JSON.stringify(userProducts));
  }, [userProducts]);

  useEffect(() => {
    localStorage.setItem('userProfile', JSON.stringify(user));
  }, [user]);

  const toggleTheme = () => {
    const nextMode = !isDarkMode;
    setIsDarkMode(nextMode);
    if (nextMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const addToCart = (product: Product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id: string, delta: number) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const handleLogin = (email: string, phone: string, isStudent: boolean) => {
    setUser(prev => ({ ...prev, email, phone, isLoggedIn: true, isStudent }));
    if (isStudent) {
      alert(`Mode Étudiant activé ! Profitez de -15% sur vos projets de fin d'études.`);
    } else {
      alert(`Bienvenue à Sfax, ${email.split('@')[0]}!`);
    }
  };

  const handleLogout = () => {
    setUser(prev => ({ ...prev, isLoggedIn: false, isStudent: false }));
  };

  const handleCheckout = () => {
    // We still use values for points calculation internally, but hide them in the prompt.
    let subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const studentDiscountAmount = user.isStudent ? (subtotal * 0.15) : 0;
    const finalTotal = subtotal - studentDiscountAmount;
    const pointsEarned = Math.floor(finalTotal);
    
    setUser(prev => {
      const newScore = prev.score + pointsEarned;
      if (newScore >= 500 && prev.score < 500) {
        alert("Félicitations ! Vous avez atteint 500 points. Vous recevrez une promotion de 10% cumulable sur votre prochain achat !");
      }
      return { ...prev, score: newScore };
    });

    alert(`Commande validée ! Prix total : -- TND. Merci pour votre confiance.`);
    
    setCartItems([]);
    setIsCartOpen(false);
  };

  const handlePublishSell = (p: Omit<Product, 'id'>) => {
    const newProduct: Product = {
      ...p,
      id: `user-${Date.now()}`
    };
    setUserProducts(prev => [newProduct, ...prev]);
    setCurrentView('shopping-hub');
    alert('Votre annonce a été publiée avec succès !');
  };

  const totalItemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  // Student theme visuals
  const themeClass = user.isStudent ? "student-theme bg-indigo-50/30 dark:bg-slate-950" : "";

  return (
    <div className={`flex flex-col min-h-screen transition-colors duration-700 ${themeClass}`}>
      <Header 
        isDarkMode={isDarkMode} 
        toggleTheme={toggleTheme} 
        user={user}
        onLogin={handleLogin}
        onLogout={handleLogout}
        onNavigate={(view) => {
          setCurrentView(view);
          window.scrollTo(0, 0);
        }}
      />
      
      {currentView === 'home' && (
        <main className="container mx-auto px-4 py-8 lg:py-12 flex flex-col lg:flex-row gap-10">
          <Sidebar />
          
          <div className="flex-1 space-y-16">
            {user.isStudent && (
              <div className="bg-indigo-600 rounded-[2.5rem] p-8 text-white shadow-2xl animate-in fade-in slide-in-from-top-4 duration-500 flex flex-col md:flex-row items-center gap-8 border-4 border-indigo-400">
                <div className="bg-white/20 p-6 rounded-full flex-shrink-0">
                  <span className="material-icons-round text-6xl">school</span>
                </div>
                <div>
                  <h2 className="text-3xl font-black uppercase tracking-tight mb-2">Offre Spéciale Étudiant</h2>
                  <p className="text-indigo-100 font-bold text-lg mb-4">Parce que vos projets méritent le meilleur matériel. Bénéficiez de -15% sur tous nos packs projets de fin d'études (PFE).</p>
                  <button 
                    onClick={() => setCurrentView('shopping-hub')}
                    className="bg-white text-indigo-600 px-8 py-3 rounded-2xl font-black uppercase text-sm hover:scale-105 transition-transform"
                  >
                    Explorer les projets
                  </button>
                </div>
              </div>
            )}

            <HeroCards 
              onBuyClick={() => setCurrentView('shopping-hub')} 
              onSellClick={() => setCurrentView('sell-wizard')}
            />

            {user.isLoggedIn && !user.isStudent && (
              <div className="bg-gradient-to-r from-amber-400 to-amber-600 rounded-3xl p-8 text-slate-900 shadow-xl relative overflow-hidden">
                <div className="relative z-10 flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-black uppercase mb-2">Programme Fidélité Feyez</h3>
                    <p className="font-bold">Votre score actuel : <span className="text-3xl">{user.score}</span> points</p>
                    <div className="mt-4 w-64 h-2 bg-black/10 rounded-full overflow-hidden">
                      <div className="h-full bg-slate-900 transition-all duration-1000" style={{ width: `${Math.min(100, (user.score / 500) * 100)}%` }}></div>
                    </div>
                    <p className="text-[10px] mt-2 font-black uppercase tracking-widest">{user.score >= 500 ? 'RÉCOMPENSE DÉBLOQUÉE!' : `Plus que ${Math.max(0, 500 - user.score)} points pour votre promotion`}</p>
                  </div>
                  <span className="material-icons-round text-7xl opacity-30">loyalty</span>
                </div>
              </div>
            )}

            <section className="space-y-8">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-3">
                  <span className={`${user.isStudent ? 'bg-indigo-100 dark:bg-indigo-900' : 'bg-slate-100 dark:bg-slate-800'} p-2 rounded-xl transition-colors`}>
                    <span className={`material-icons-round ${user.isStudent ? 'text-indigo-600' : 'text-primary'}`}>{user.isStudent ? 'auto_stories' : 'star'}</span>
                  </span>
                  {user.isStudent ? 'Sélection Projets Étudiants' : 'Nos Nouveautés à Sfax'}
                </h2>
                <button 
                  onClick={() => setCurrentView('shopping-hub')}
                  className={`${user.isStudent ? 'text-indigo-600' : 'text-primary'} font-bold text-sm hover:underline flex items-center gap-1 group transition-colors`}
                >
                  Voir tout <span className="material-icons-round text-lg group-hover:translate-x-1 transition-transform">chevron_right</span>
                </button>
              </div>

              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
                {PRODUCTS.slice(0, 6).map((product) => (
                  <ProductCard 
                    key={product.id} 
                    product={product} 
                    onAddToCart={addToCart}
                  />
                ))}
              </div>
            </section>

            <GameZone />
            <AdviceCTA />
          </div>
        </main>
      )}

      {currentView === 'shopping-hub' && (
        <ShoppingHub 
          onBack={() => setCurrentView('home')} 
          onAddToCart={addToCart}
          userProducts={userProducts}
        />
      )}

      {currentView === 'sell-wizard' && (
        <SellWizard 
          onBack={() => setCurrentView('home')} 
          onPublish={handlePublishSell}
        />
      )}

      {currentView === 'photovoltaic' && (
        <PhotovoltaicPage />
      )}

      <Footer />

      <FloatingCart 
        itemCount={totalItemCount} 
        onClick={() => setIsCartOpen(true)} 
      />
      
      <CartDrawer 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onRemove={removeFromCart}
        onUpdateQuantity={updateQuantity}
        onCheckout={handleCheckout}
        isStudent={user.isStudent}
      />
    </div>
  );
};

export default App;
