
import React from 'react';

interface FloatingCartProps {
  itemCount: number;
  onClick: () => void;
}

export const FloatingCart: React.FC<FloatingCartProps> = ({ itemCount, onClick }) => {
  return (
    <button 
      onClick={onClick}
      className="fixed bottom-8 right-8 z-50 group transition-all transform hover:scale-110 active:scale-95"
    >
      <div className="relative bg-primary p-5 rounded-full shadow-[0_0_40px_rgba(211,47,47,0.4)] border-4 border-white dark:border-slate-800">
        <span className="material-icons-round text-white text-3xl">shopping_cart</span>
        {itemCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-white dark:bg-slate-900 text-primary text-xs font-black w-6 h-6 rounded-full flex items-center justify-center shadow-md border-2 border-primary">
            {itemCount}
          </span>
        )}
      </div>
      {/* Decorative pulse effect */}
      <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping -z-10"></div>
    </button>
  );
};
