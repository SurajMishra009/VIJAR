import React from 'react';
import { CheckCircle2, X } from 'lucide-react';
import { useFavorites } from '../../context/FavoritesContext';

export const Toast: React.FC = () => {
  const { toastMessage, clearToast } = useFavorites();

  if (!toastMessage) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-in fade-in slide-in-from-bottom-3 duration-200">
      <div className="flex items-center gap-2.5 px-4 py-3 bg-[#133E33] text-white text-xs sm:text-sm font-medium rounded-2xl shadow-xl border border-emerald-700/60 max-w-sm">
        <CheckCircle2 className="w-4 h-4 text-emerald-300 shrink-0" />
        <span className="flex-1">{toastMessage}</span>
        <button
          type="button"
          onClick={clearToast}
          className="text-stone-300 hover:text-white p-1 rounded-lg"
          aria-label="Close notification"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
