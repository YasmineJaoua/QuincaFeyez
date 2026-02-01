
import React from 'react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onRemove: (id: string) => void;
  onUpdateQuantity: (id: string, delta: number) => void;
  onCheckout?: () => void;
  isStudent?: boolean;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose, items, onRemove, onUpdateQuantity, onCheckout, isStudent }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex justify-end">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose}></div>
      
      {/* Drawer Content */}
      <div className={`relative w-full max-w-md bg-white dark:bg-slate-900 h-full shadow-2xl animate-in slide-in-from-right duration-300 flex flex-col border-l-4 ${isStudent ? 'border-indigo-500' : 'border-purple-500'}`}>
        <div className={`p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center ${isStudent ? 'bg-indigo-50 dark:bg-indigo-900/20' : 'bg-purple-50 dark:bg-purple-900/20'}`}>
          <h2 className={`text-2xl font-black flex items-center gap-2 ${isStudent ? 'text-indigo-600 dark:text-indigo-400' : 'text-purple-600 dark:text-purple-400'}`}>
            <span className="material-icons-round">{isStudent ? 'school' : 'shopping_basket'}</span>
            Votre Panier {isStudent && <span className="text-xs align-middle">(Étudiant)</span>}
          </h2>
          <button onClick={onClose} className="p-2 hover:bg-white dark:hover:bg-slate-800 rounded-full transition-colors">
            <span className="material-icons-round text-slate-400">close</span>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-slate-400">
              <span className="material-icons-round text-6xl mb-4">remove_shopping_cart</span>
              <p className="font-bold text-center">Votre panier est vide !<br/><span className="text-xs uppercase font-black">Trouvez vos outils chez feyez</span></p>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className={`border-2 rounded-2xl p-4 flex gap-4 bg-white dark:bg-slate-800 shadow-sm relative group ${isStudent ? 'border-indigo-300 dark:border-indigo-800' : 'border-purple-300 dark:border-purple-800'}`}>
                <div className="w-24 h-24 rounded-xl bg-slate-100 dark:bg-slate-700 overflow-hidden flex-shrink-0 border border-slate-200 dark:border-slate-600">
                  <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" />
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-slate-800 dark:text-slate-100 truncate">{item.name}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-sm font-black text-primary">-- TND</span>
                  </div>
                  
                  <div className="mt-3 flex items-center gap-3">
                    <div className="flex items-center border-2 border-blue-500 rounded-lg overflow-hidden bg-blue-50 dark:bg-blue-900/30">
                      <button 
                        onClick={() => onUpdateQuantity(item.id, -1)}
                        className="px-2 py-1 hover:bg-blue-200 dark:hover:bg-blue-800 text-blue-600 dark:text-blue-400 transition-colors"
                      >
                        <span className="material-icons-round text-sm">remove</span>
                      </button>
                      <span className="px-3 font-black text-blue-600 dark:text-blue-400 text-sm">{item.quantity}</span>
                      <button 
                        onClick={() => onUpdateQuantity(item.id, 1)}
                        className="px-2 py-1 hover:bg-blue-200 dark:hover:bg-blue-800 text-blue-600 dark:text-blue-400 transition-colors"
                      >
                        <span className="material-icons-round text-sm">add</span>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col justify-between items-end">
                  <button 
                    onClick={() => onRemove(item.id)}
                    className="p-2 bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 rounded-full hover:bg-red-100 hover:text-red-500 transition-all"
                  >
                    <span className="material-icons-round text-xl">delete_outline</span>
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="p-6 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
            <div className="space-y-3 mb-6">
              <div className="flex justify-between items-center text-xs font-bold text-slate-500 uppercase tracking-widest">
                <span>Sous-total</span>
                <span>-- TND</span>
              </div>
              
              {isStudent && (
                <div className="flex justify-between items-center text-xs font-black text-indigo-600 uppercase tracking-widest">
                  <span className="flex items-center gap-1"><span className="material-icons-round text-sm">school</span> Remise Étudiant (15%)</span>
                  <span>-- TND</span>
                </div>
              )}

              <div className="flex justify-between items-end pt-3 border-t border-slate-200 dark:border-slate-800">
                <span className="text-slate-900 dark:text-white font-black uppercase text-sm tracking-widest">Total à payer</span>
                <div className="text-right">
                  <span className="block text-3xl font-black text-slate-900 dark:text-white">
                    --
                  </span>
                  <span className="text-xs font-bold text-primary tracking-widest">TND</span>
                </div>
              </div>
            </div>

            <button 
              onClick={onCheckout}
              className={`w-full text-white py-4 rounded-2xl font-black text-lg shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 ${isStudent ? 'bg-indigo-600 shadow-indigo-500/30' : 'bg-primary shadow-primary/30'}`}
            >
              <span className="material-icons-round">shopping_cart_checkout</span>
              VALIDEZ LA COMMANDE
            </button>
            <p className="text-[10px] font-black text-slate-400 uppercase text-center mt-4">Gagnez des points Feyez Score à chaque achat !</p>
          </div>
        )}
      </div>
    </div>
  );
};
