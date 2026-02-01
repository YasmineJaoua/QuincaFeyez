
import React, { useState } from 'react';
import { Product } from '../types';

interface SellWizardProps {
  onBack: () => void;
  onPublish: (p: Omit<Product, 'id'>) => void;
}

export const SellWizard: React.FC<SellWizardProps> = ({ onBack, onPublish }) => {
  const [formData, setFormData] = useState({
    name: '',
    sellerName: '',
    sellerPhone: '',
    price: '',
    description: '',
    photos: [] as string[],
  });

  const [step, setStep] = useState(1);

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      // For demo, we just use a generic local image URL since we can't truly upload
      // In a real app, we'd use FileReader to get base64 or a real upload URL
      const newPhotos = Array.from(e.target.files).map(f => URL.createObjectURL(f));
      setFormData(prev => ({ ...prev, photos: [...prev.photos, ...newPhotos] }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onPublish({
      name: formData.name,
      price: parseFloat(formData.price) || 0,
      description: formData.description,
      imageUrl: formData.photos[0] || 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop',
      source: 'user',
      sellerName: formData.sellerName,
      sellerPhone: formData.sellerPhone,
      isUsed: true
    });
  };

  return (
    <div className="fixed inset-0 z-[110] bg-slate-50 dark:bg-background-dark overflow-y-auto animate-in fade-in zoom-in duration-300">
      <div className="max-w-2xl mx-auto px-4 py-12">
        <button 
          onClick={onBack}
          className="mb-8 flex items-center gap-2 font-black text-slate-400 hover:text-primary transition-colors"
        >
          <span className="material-icons-round">close</span> FERMER
        </button>

        <div className="bg-white dark:bg-slate-900 rounded-[3rem] shadow-2xl border border-slate-100 dark:border-slate-800 overflow-hidden">
          <div className="bg-secondary p-8 text-white">
            <h1 className="text-3xl font-black uppercase tracking-tight">Vendre mon matériel</h1>
            <p className="text-white/80 font-medium">Postez votre annonce en quelques secondes à Sfax.</p>
          </div>

          <form onSubmit={handleSubmit} className="p-8 space-y-8">
            {step === 1 && (
              <div className="space-y-6 animate-in slide-in-from-right-4 duration-300">
                <div className="space-y-1">
                  <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Quel objet vendez-vous ?</label>
                  <input 
                    required
                    type="text" 
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                    placeholder="Ex: Perceuse Makita occasion..."
                    className="w-full p-4 bg-slate-50 dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-800 rounded-2xl focus:ring-4 focus:ring-secondary/20 focus:border-secondary transition-all"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Description</label>
                  <textarea 
                    rows={3}
                    value={formData.description}
                    onChange={e => setFormData({...formData, description: e.target.value})}
                    placeholder="Détails sur l'état, l'ancienneté..."
                    className="w-full p-4 bg-slate-50 dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-800 rounded-2xl focus:ring-4 focus:ring-secondary/20 focus:border-secondary transition-all"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Prix (TND)</label>
                  <input 
                    required
                    type="number" 
                    value={formData.price}
                    onChange={e => setFormData({...formData, price: e.target.value})}
                    placeholder="0.000"
                    className="w-full p-4 bg-slate-50 dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-800 rounded-2xl focus:ring-4 focus:ring-secondary/20 focus:border-secondary transition-all"
                  />
                </div>

                <button 
                  type="button" 
                  onClick={() => setStep(2)}
                  className="w-full bg-slate-900 text-white py-4 rounded-2xl font-black text-lg hover:scale-[1.02] active:scale-95 transition-all shadow-xl"
                >
                  CONTINUER
                </button>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6 animate-in slide-in-from-right-4 duration-300">
                <div className="grid grid-cols-2 gap-4">
                   <div className="space-y-1">
                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Votre Nom</label>
                    <input 
                      required
                      type="text" 
                      value={formData.sellerName}
                      onChange={e => setFormData({...formData, sellerName: e.target.value})}
                      placeholder="Nom complet"
                      className="w-full p-4 bg-slate-50 dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-800 rounded-2xl focus:ring-4 focus:ring-secondary/20 focus:border-secondary transition-all"
                    />
                  </div>
                   <div className="space-y-1">
                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Téléphone</label>
                    <input 
                      required
                      type="tel" 
                      value={formData.sellerPhone}
                      onChange={e => setFormData({...formData, sellerPhone: e.target.value})}
                      placeholder="+216 ..."
                      className="w-full p-4 bg-slate-50 dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-800 rounded-2xl focus:ring-4 focus:ring-secondary/20 focus:border-secondary transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Photos de l'objet</label>
                  <div className="grid grid-cols-3 gap-2">
                    {formData.photos.map((src, idx) => (
                      <div key={idx} className="aspect-square bg-slate-100 dark:bg-slate-800 rounded-xl overflow-hidden border-2 border-slate-200 dark:border-slate-700">
                        <img src={src} className="w-full h-full object-cover" />
                      </div>
                    ))}
                    <label className="aspect-square border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-xl flex flex-col items-center justify-center cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                      <span className="material-icons-round text-slate-400">add_a_photo</span>
                      <span className="text-[10px] font-black text-slate-400 mt-2 uppercase tracking-tighter">Ajouter</span>
                      <input type="file" multiple accept="image/*" className="hidden" onChange={handlePhotoUpload} />
                    </label>
                  </div>
                </div>

                <div className="flex gap-4">
                  <button 
                    type="button" 
                    onClick={() => setStep(1)}
                    className="flex-1 border-2 border-slate-200 dark:border-slate-800 py-4 rounded-2xl font-black text-slate-500 hover:bg-slate-50 transition-all"
                  >
                    RETOUR
                  </button>
                  <button 
                    type="submit" 
                    className="flex-[2] bg-secondary text-white py-4 rounded-2xl font-black text-lg hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-secondary/20"
                  >
                    PUBLIER L'ANNONCE
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};
