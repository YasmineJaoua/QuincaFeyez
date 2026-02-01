
import React from 'react';

interface HeroCardsProps {
  onBuyClick?: () => void;
  onSellClick?: () => void;
}

export const HeroCards: React.FC<HeroCardsProps> = ({ onBuyClick, onSellClick }) => {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <button 
        onClick={onBuyClick}
        className="group relative overflow-hidden bg-primary text-white p-8 rounded-[2.5rem] text-right transition-transform hover:scale-[1.02] active:scale-[0.98] shadow-xl shadow-primary/20"
      >
        <div className="absolute left-6 top-1/2 -translate-y-1/2 opacity-20 group-hover:scale-110 transition-transform">
          <span className="material-icons-round text-8xl">shopping_cart</span>
        </div>
        <div className="relative z-10 flex flex-col items-end">
          <h3 className="arabic-text text-5xl font-bold mb-2">نحب نشري</h3>
          <p className="text-white/80 font-medium">I want to buy products</p>
          <div className="mt-6 inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 px-6 py-2.5 rounded-full text-sm font-semibold transition-colors">
            Browse Catalog <span className="material-icons-round text-sm">arrow_forward</span>
          </div>
        </div>
      </button>

      <button 
        onClick={onSellClick}
        className="group relative overflow-hidden bg-secondary text-white p-8 rounded-[2.5rem] text-right transition-transform hover:scale-[1.02] active:scale-[0.98] shadow-xl shadow-secondary/20"
      >
        <div className="absolute left-6 top-1/2 -translate-y-1/2 opacity-20 group-hover:scale-110 transition-transform">
          <span className="material-icons-round text-8xl">sell</span>
        </div>
        <div className="relative z-10 flex flex-col items-end">
          <h3 className="arabic-text text-5xl font-bold mb-2">نحب نبيع</h3>
          <p className="text-white/80 font-medium">I want to sell my equipment</p>
          <div className="mt-6 inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 px-6 py-2.5 rounded-full text-sm font-semibold transition-colors">
            List Your Items <span className="material-icons-round text-sm">arrow_forward</span>
          </div>
        </div>
      </button>
    </div>
  );
};
