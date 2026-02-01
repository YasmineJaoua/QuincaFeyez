
import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all group relative">
      <div className="h-56 bg-slate-100 dark:bg-slate-800 relative overflow-hidden">
        <img 
          alt={product.name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
          src={product.imageUrl} 
        />
        
        {/* Source Logo Badge */}
        <div className={`absolute top-4 left-4 p-2 rounded-xl backdrop-blur-md border shadow-lg ${product.source === 'store' ? 'bg-primary/90 text-white border-white/20' : 'bg-blue-600/90 text-white border-white/20'}`}>
          <span className="material-icons-round text-lg">
            {product.source === 'store' ? 'verified' : 'person_pin'}
          </span>
        </div>

        {product.isNew && (
          <div className="absolute top-4 right-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-black text-primary tracking-wider uppercase">NOUVEAU</div>
        )}
        {product.isUsed && (
          <div className="absolute top-4 right-4 bg-amber-500 text-white px-3 py-1 rounded-full text-[10px] font-black tracking-wider uppercase">OCCASION</div>
        )}
        {product.discount && (
          <div className="absolute top-4 right-4 bg-secondary text-white px-3 py-1 rounded-full text-[10px] font-black tracking-wider uppercase">-{product.discount}%</div>
        )}
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="font-bold text-lg text-slate-800 dark:text-slate-100">{product.name}</h3>
            {product.source === 'user' && (
              <span className="text-[10px] font-bold text-blue-500 uppercase tracking-tighter">Vendu par: {product.sellerName}</span>
            )}
            {product.source === 'store' && (
              <span className="text-[10px] font-bold text-primary uppercase tracking-tighter">Feyez Sfax Store</span>
            )}
          </div>
          <div className="flex flex-col items-end">
            <span className={`font-bold text-lg ${product.source === 'user' ? 'text-blue-600' : 'text-primary'}`}>--</span>
            <span className={`text-[10px] font-bold -mt-1 ${product.source === 'user' ? 'text-blue-600' : 'text-primary'}`}>TND</span>
          </div>
        </div>
        <p className="text-slate-500 dark:text-slate-400 text-sm mb-6 line-clamp-2 h-10">{product.description}</p>
        <div className="flex gap-2">
          <button 
            onClick={() => onAddToCart?.(product)}
            className={`flex-1 text-white py-3 rounded-xl font-bold text-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-lg ${product.source === 'user' ? 'bg-blue-600 shadow-blue-500/20' : 'bg-slate-900 dark:bg-white dark:text-slate-900'}`}
          >
            <span className="material-icons-round text-lg">add_shopping_cart</span>
            Ajouter
          </button>
          <button className="p-3 border border-slate-200 dark:border-slate-700 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-slate-400 hover:text-primary">
            <span className="material-icons-round text-xl">favorite_border</span>
          </button>
        </div>
      </div>
    </div>
  );
};
