import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, MapPin, Calendar, ArrowRight, Tag } from 'lucide-react';
import { Destination } from '../../types/destination';
import { formatCurrency, CATEGORY_LABELS } from '../../utils/filterLogic';
import { useFavorites } from '../../context/FavoritesContext';

interface DestinationCardProps {
  destination: Destination;
}

export const DestinationCard: React.FC<DestinationCardProps> = ({ destination }) => {
  const { isFavorite, toggleFavorite } = useFavorites();
  const favorited = isFavorite(destination.slug);

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleFavorite(destination.slug);
  };

  const primaryCategory = destination.categories[0];
  const primaryCategoryLabel = CATEGORY_LABELS[primaryCategory] || primaryCategory;

  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-stone-200/90 hover:border-emerald-800/40 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col h-full">
      {/* Image Container */}
      <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
        <img
          src={destination.heroImage}
          alt={`Scenic view of ${destination.name}, ${destination.state}`}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

        {/* Favorite Button */}
        <button
          type="button"
          onClick={handleFavoriteClick}
          aria-label={favorited ? `Remove ${destination.name} from saved` : `Save ${destination.name} to wishlist`}
          className={`absolute top-3.5 right-3.5 p-2.5 rounded-full backdrop-blur-md transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 ${
            favorited
              ? 'bg-rose-50 text-rose-600 shadow-md scale-105'
              : 'bg-white/80 text-stone-700 hover:bg-white hover:text-stone-900 shadow-xs'
          }`}
        >
          <Heart
            className={`w-4 h-4 transition-transform ${
              favorited ? 'fill-rose-500 text-rose-500' : 'text-stone-700'
            }`}
          />
        </button>

        {/* Category & Season Badges */}
        <div className="absolute top-3.5 left-3.5 flex flex-wrap gap-1.5 max-w-[70%]">
          <span className="inline-flex items-center gap-1 text-[11px] font-semibold tracking-wide bg-stone-900/80 backdrop-blur-sm text-stone-100 px-2.5 py-1 rounded-full shadow-xs">
            <Tag className="w-3 h-3 text-emerald-400" />
            {primaryCategoryLabel}
          </span>
          {destination.featured && (
            <span className="text-[10px] font-bold uppercase tracking-wider bg-emerald-600/90 text-white px-2 py-1 rounded-full shadow-xs">
              Featured
            </span>
          )}
        </div>

        {/* Bottom overlay with location */}
        <div className="absolute bottom-3 left-3.5 right-3.5 text-white">
          <p className="flex items-center gap-1 text-xs text-stone-200 font-medium drop-shadow-sm">
            <MapPin className="w-3.5 h-3.5 text-emerald-300 shrink-0" />
            <span>{destination.state}, {destination.country}</span>
          </p>
        </div>
      </div>

      {/* Content Container */}
      <div className="p-5 flex flex-col flex-1 justify-between">
        <div>
          <div className="flex items-baseline justify-between gap-2 mb-2">
            <h3 className="font-serif-title text-xl font-bold text-stone-900 tracking-tight group-hover:text-[#133E33] transition-colors">
              <Link to={`/destinations/${destination.slug}`} className="focus:outline-none focus-visible:underline">
                {destination.name}
              </Link>
            </h3>
            <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-stone-100 text-stone-700 border border-stone-200/60">
              {destination.idealDuration}
            </span>
          </div>

          <p className="text-stone-600 text-xs sm:text-sm line-clamp-2 leading-relaxed mb-4">
            {destination.tagline}
          </p>

          <div className="flex items-center gap-2 text-xs text-stone-500 mb-4 pb-3 border-b border-stone-100">
            <Calendar className="w-3.5 h-3.5 text-stone-400 shrink-0" />
            <span>Best: <strong className="text-stone-700 font-medium">{destination.bestMonths}</strong></span>
          </div>
        </div>

        {/* Footer info: Budget & CTA */}
        <div className="pt-2 flex items-end justify-between gap-3">
          <div>
            <span className="text-[10px] uppercase tracking-wider text-stone-400 block font-medium">
              Est. Trip Budget
            </span>
            <div className="text-sm sm:text-base font-bold text-[#133E33] tracking-tight">
              {formatCurrency(destination.estimatedBudget.min)} - {formatCurrency(destination.estimatedBudget.max)}
            </div>
            <span className="text-[10px] text-stone-400 block">per person</span>
          </div>

          <Link
            to={`/destinations/${destination.slug}`}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-[#133E33] bg-emerald-50 hover:bg-[#133E33] hover:text-white rounded-xl transition-all duration-200 group/btn focus:outline-none focus-visible:ring-2 focus-visible:ring-[#133E33]"
            aria-label={`View details for ${destination.name}`}
          >
            <span>Details</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
};
