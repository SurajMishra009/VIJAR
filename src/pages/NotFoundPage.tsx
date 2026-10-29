import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, ArrowLeft, Home, Search } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[75vh] flex items-center justify-center bg-[#FBFBF9] px-4 py-16">
      <div className="text-center max-w-lg bg-white rounded-3xl p-8 sm:p-12 border border-stone-200/90 shadow-2xs">
        <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-[#133E33] flex items-center justify-center mx-auto mb-6">
          <Compass className="w-8 h-8 text-emerald-800" />
        </div>

        <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 block mb-2">
          404 Error
        </span>

        <h1 className="font-serif-title text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight mb-3">
          Off the Beaten Path
        </h1>

        <p className="text-stone-600 text-sm sm:text-base mb-8 leading-relaxed">
          The page or travel route you were searching for doesn’t seem to exist. It might have been relocated or mistyped.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#133E33] hover:bg-[#0c2720] text-white text-xs font-semibold rounded-xl transition-all shadow-sm"
          >
            <Home className="w-4 h-4 text-emerald-300" />
            <span>Return to Homepage</span>
          </Link>

          <Link
            to="/explore"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-semibold rounded-xl transition-colors"
          >
            <Search className="w-4 h-4 text-stone-500" />
            <span>Search Destinations</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
