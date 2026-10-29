import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Compass, Trash2, ArrowRight, Wallet, Calendar } from 'lucide-react';
import { useFavorites } from '../context/FavoritesContext';
import { DestinationCard } from '../components/destination/DestinationCard';
import { formatCurrency, calculateSavedTripTotals } from '../utils/filterLogic';

export const SavedTripsPage: React.FC = () => {
  const { favoriteDestinations, clearAllFavorites, favoritesCount } = useFavorites();

  const totals = calculateSavedTripTotals(favoriteDestinations);

  return (
    <div className="min-h-screen bg-[#FBFBF9] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4 pb-6 border-b border-stone-200/60">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#133E33] mb-2">
              <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
              <span>Personal Wishlist</span>
            </div>
            <h1 className="font-serif-title text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
              Saved Destinations ({favoritesCount})
            </h1>
            <p className="text-stone-600 text-sm mt-1">
              Your shortlisted journeys saved securely to your browser storage.
            </p>
          </div>

          {favoritesCount > 0 && (
            <button
              type="button"
              onClick={clearAllFavorites}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-stone-600 hover:text-rose-600 border border-stone-200 hover:border-rose-200 rounded-xl bg-white transition-colors"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Clear Wishlist</span>
            </button>
          )}
        </div>

        {/* Content */}
        {favoritesCount > 0 ? (
          <div className="space-y-8">
            {/* Aggregate Budget Summary Banner */}
            <div className="bg-white rounded-2xl p-6 border border-stone-200/90 shadow-2xs grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
              <div className="space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-stone-400">
                  Combined Shortlist
                </span>
                <h3 className="font-serif-title text-xl font-bold text-stone-900">
                  {favoritesCount} {favoritesCount === 1 ? 'Destination' : 'Destinations'} Saved
                </h3>
                <p className="text-xs text-stone-500">
                  Ready to compare or begin planning specific travel legs.
                </p>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-stone-50 border border-stone-100">
                <Wallet className="w-5 h-5 text-[#133E33] shrink-0" />
                <div>
                  <span className="text-[10px] uppercase font-bold text-stone-500 block">
                    Combined Estimated Budget
                  </span>
                  <span className="text-base font-bold text-[#133E33]">
                    {formatCurrency(totals.totalMin)} — {formatCurrency(totals.totalMax)}
                  </span>
                </div>
              </div>

              <div className="flex justify-start md:justify-end">
                <Link
                  to="/explore"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#133E33] hover:bg-[#0c2720] text-white text-xs font-semibold rounded-xl transition-all shadow-sm"
                >
                  <Compass className="w-4 h-4 text-emerald-300" />
                  <span>Discover More Places</span>
                </Link>
              </div>
            </div>

            {/* Grid of Saved Destination Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {favoriteDestinations.map((dest) => (
                <DestinationCard key={dest.id} destination={dest} />
              ))}
            </div>
          </div>
        ) : (
          /* Empty State */
          <div className="bg-white rounded-2xl p-12 text-center border border-stone-200/80 shadow-2xs max-w-lg mx-auto my-12">
            <div className="w-16 h-16 rounded-2xl bg-rose-50 text-rose-500 flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8" />
            </div>
            <h2 className="font-serif-title text-2xl font-bold text-stone-900 mb-2">
              No saved destinations yet
            </h2>
            <p className="text-stone-600 text-sm mb-6 leading-relaxed">
              When exploring destinations, tap the heart icon on any card to save it here for quick reference and budget comparison.
            </p>
            <Link
              to="/explore"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#133E33] hover:bg-[#0c2720] text-white text-xs font-semibold rounded-xl shadow-sm transition-all"
            >
              <Compass className="w-4 h-4 text-emerald-300" />
              <span>Explore Destinations Now</span>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
