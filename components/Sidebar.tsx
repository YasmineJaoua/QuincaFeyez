
import React from 'react';
import { CATEGORIES } from '../constants';

export const Sidebar: React.FC = () => {
  return (
    <aside className="w-full lg:w-72 space-y-8">
      {/* Categories Card */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
        <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
          <span className="material-icons-round text-primary">category</span> Categories
        </h2>
        <ul className="space-y-1">
          {CATEGORIES.map((cat) => (
            <li key={cat.name}>
              <a href="#" className="flex items-center justify-between group p-2 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors">
                <span className="text-slate-600 dark:text-slate-400 group-hover:text-primary text-sm font-medium">{cat.name}</span>
                <span className="text-[10px] font-bold bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded text-slate-500">{cat.count}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Filters Card */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-6">
        <h2 className="text-lg font-bold flex items-center gap-2">
          <span className="material-icons-round text-primary">tune</span> Filters
        </h2>
        
        <div>
          <label className="text-sm font-semibold mb-3 block">Price Range (TND)</label>
          <input 
            type="range" 
            className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-primary"
          />
          <div className="flex justify-between text-xs mt-2 text-slate-500">
            <span>0 TND</span>
            <span>2k+ TND</span>
          </div>
        </div>

        <div>
          <label className="text-sm font-semibold mb-3 block">Primary Color</label>
          <div className="flex gap-2">
            {['#ef4444', '#22c55e', '#eab308', '#3b82f6', '#000000'].map((color) => (
              <button 
                key={color}
                className="w-6 h-6 rounded-full border-2 border-transparent hover:border-slate-400 dark:hover:border-slate-600 transition-all"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};
