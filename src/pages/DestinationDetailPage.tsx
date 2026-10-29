import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  Heart,
  MapPin,
  Calendar,
  Clock,
  Compass,
  Wallet,
  Plane,
  Train,
  Car,
  Lightbulb,
  CheckCircle,
  Share2,
  Info,
} from 'lucide-react';
import { DESTINATIONS } from '../data/destinations';
import { Destination } from '../types/destination';
import { formatCurrency, CATEGORY_LABELS, BUDGET_TIER_LABELS } from '../utils/filterLogic';
import { useFavorites } from '../context/FavoritesContext';
import { DestinationCard } from '../components/destination/DestinationCard';

export const DestinationDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { isFavorite, toggleFavorite } = useFavorites();

  const destination = DESTINATIONS.find((d) => d.slug === slug);

  // Scroll to top when slug changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  if (!destination) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center bg-[#FBFBF9] px-4">
        <div className="text-center max-w-md bg-white p-8 rounded-2xl border border-stone-200 shadow-sm">
          <Compass className="w-12 h-12 text-stone-400 mx-auto mb-4" />
          <h1 className="font-serif-title text-2xl font-bold text-stone-900 mb-2">
            Destination Not Found
          </h1>
          <p className="text-stone-600 text-sm mb-6">
            We couldn’t locate a guide matching &ldquo;{slug}&rdquo;. Explore our full directory instead.
          </p>
          <Link
            to="/explore"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#133E33] text-white text-xs font-semibold rounded-xl"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Explore</span>
          </Link>
        </div>
      </div>
    );
  }

  const favorited = isFavorite(destination.slug);

  // Find related destinations (same category or nearby)
  const relatedDestinations = DESTINATIONS.filter(
    (d) =>
      d.slug !== destination.slug &&
      d.categories.some((c) => destination.categories.includes(c))
  ).slice(0, 3);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert('Link copied to clipboard!');
  };

  return (
    <article className="min-h-screen bg-[#FBFBF9] pb-24">
      {/* 1. Hero Image & Header Banner */}
      <div className="relative h-[480px] lg:h-[560px] w-full overflow-hidden bg-stone-900">
        <img
          src={destination.heroImage}
          alt={`Panoramic photo of ${destination.name}`}
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/25" />

        {/* Top Floating Navigation Bar */}
        <div className="absolute top-6 left-0 right-0 z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-black/40 hover:bg-black/60 text-white backdrop-blur-md text-xs font-medium border border-white/20 transition-all"
            aria-label="Go back to previous page"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back</span>
          </button>

          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={handleCopyLink}
              className="p-2.5 rounded-xl bg-black/40 hover:bg-black/60 text-white backdrop-blur-md border border-white/20 transition-all"
              aria-label="Share destination"
              title="Copy link"
            >
              <Share2 className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={() => toggleFavorite(destination.slug)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl backdrop-blur-md text-xs font-semibold transition-all ${
                favorited
                  ? 'bg-rose-500 text-white shadow-md'
                  : 'bg-black/40 hover:bg-black/60 text-white border border-white/20'
              }`}
              aria-label={favorited ? 'Remove from saved' : 'Save destination'}
            >
              <Heart
                className={`w-4 h-4 ${favorited ? 'fill-white text-white' : 'text-white'}`}
              />
              <span>{favorited ? 'Saved' : 'Save to Wishlist'}</span>
            </button>
          </div>
        </div>

        {/* Hero Title Container */}
        <div className="absolute bottom-8 left-0 right-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="inline-flex items-center gap-1 text-xs font-medium bg-emerald-600/90 text-white px-3 py-1 rounded-full backdrop-blur-xs">
              <MapPin className="w-3.5 h-3.5" />
              <span>{destination.state}, {destination.country}</span>
            </span>
            <span className="text-xs font-medium bg-white/20 text-stone-100 px-3 py-1 rounded-full backdrop-blur-xs">
              Ideal Duration: {destination.idealDuration}
            </span>
          </div>

          <h1 className="font-serif-title text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-3">
            {destination.name}
          </h1>

          <p className="text-stone-200 text-sm sm:text-lg max-w-3xl leading-relaxed">
            {destination.tagline}
          </p>
        </div>
      </div>

      {/* 2. Main Content Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column (Overview, Highlights, Tips, Transit) */}
          <div className="lg:col-span-8 space-y-12">
            {/* Overview Section */}
            <section className="bg-white rounded-2xl p-7 border border-stone-200/80 shadow-2xs">
              <h2 className="font-serif-title text-2xl font-bold text-stone-900 mb-4">
                About {destination.name}
              </h2>
              <p className="text-stone-700 leading-relaxed text-sm sm:text-base mb-6">
                {destination.description}
              </p>

              {/* Climate & Season Quick Bar */}
              <div className="bg-stone-50 rounded-xl p-4 border border-stone-200/60 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-stone-500 mb-1">
                    <Calendar className="w-4 h-4 text-[#133E33]" />
                    <span>Best Time to Visit</span>
                  </div>
                  <p className="text-sm font-semibold text-stone-900">
                    {destination.bestMonths}
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-stone-500 mb-1">
                    <Clock className="w-4 h-4 text-[#133E33]" />
                    <span>Climate Summary</span>
                  </div>
                  <p className="text-xs text-stone-700 leading-snug">
                    {destination.climateSummary}
                  </p>
                </div>
              </div>
            </section>

            {/* Attractions Section */}
            <section className="bg-white rounded-2xl p-7 border border-stone-200/80 shadow-2xs">
              <div className="flex items-center gap-2 mb-6">
                <Compass className="w-5 h-5 text-[#133E33]" />
                <h2 className="font-serif-title text-2xl font-bold text-stone-900">
                  Key Attractions & Experiences
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {destination.attractions.map((attraction, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl border border-stone-200/70 bg-stone-50/50 hover:bg-stone-50 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-md">
                        {attraction.tag}
                      </span>
                    </div>
                    <h3 className="font-semibold text-stone-900 text-sm mb-1.5">
                      {attraction.name}
                    </h3>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      {attraction.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Practical Travel Tips */}
            <section className="bg-white rounded-2xl p-7 border border-stone-200/80 shadow-2xs">
              <div className="flex items-center gap-2 mb-6">
                <Lightbulb className="w-5 h-5 text-[#133E33]" />
                <h2 className="font-serif-title text-2xl font-bold text-stone-900">
                  Essential Field & Practical Tips
                </h2>
              </div>

              <div className="space-y-4">
                {destination.travelTips.map((tip, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl border border-stone-200/70 bg-amber-50/30 flex items-start gap-3"
                  >
                    <CheckCircle className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-sm font-bold text-stone-900 mb-1">
                        {tip.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                        {tip.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* How to Reach / Transit */}
            <section className="bg-white rounded-2xl p-7 border border-stone-200/80 shadow-2xs">
              <h2 className="font-serif-title text-2xl font-bold text-stone-900 mb-6">
                How to Reach {destination.name}
              </h2>

              <div className="space-y-4">
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-stone-50 border border-stone-200/60">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-[#133E33] flex items-center justify-center shrink-0">
                    <Plane className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-stone-500 block mb-0.5">
                      By Air
                    </span>
                    <p className="text-xs sm:text-sm text-stone-800 leading-relaxed">
                      {destination.howToReach.air}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-stone-50 border border-stone-200/60">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-[#133E33] flex items-center justify-center shrink-0">
                    <Train className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-stone-500 block mb-0.5">
                      By Rail
                    </span>
                    <p className="text-xs sm:text-sm text-stone-800 leading-relaxed">
                      {destination.howToReach.rail}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-stone-50 border border-stone-200/60">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-[#133E33] flex items-center justify-center shrink-0">
                    <Car className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-stone-500 block mb-0.5">
                      By Road
                    </span>
                    <p className="text-xs sm:text-sm text-stone-800 leading-relaxed">
                      {destination.howToReach.road}
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column: Sticky Budget Breakdown Card & Wishlist Widget */}
          <div className="lg:col-span-4 space-y-6">
            <div className="sticky top-24 space-y-6">
              {/* Estimated Budget Card */}
              <div className="bg-white rounded-2xl p-6 border border-stone-200/90 shadow-sm">
                <div className="flex items-center justify-between pb-4 border-b border-stone-100 mb-5">
                  <div className="flex items-center gap-2">
                    <Wallet className="w-5 h-5 text-[#133E33]" />
                    <h3 className="font-serif-title text-lg font-bold text-stone-900">
                      Estimated Trip Budget
                    </h3>
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-stone-100 text-stone-700">
                    {BUDGET_TIER_LABELS[destination.estimatedBudget.tier].label}
                  </span>
                </div>

                {/* Big Price Display */}
                <div className="mb-4">
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#133E33] tracking-tight">
                    {formatCurrency(destination.estimatedBudget.min)} — {formatCurrency(destination.estimatedBudget.max)}
                  </div>
                  <p className="text-xs text-stone-500 mt-1">
                    {destination.estimatedBudget.periodDescription}
                  </p>
                </div>

                {/* Itemized Cost Breakdown */}
                <div className="space-y-3 pt-4 border-t border-stone-100 mb-6">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-stone-400 block">
                    Grounded Cost Breakdown
                  </span>

                  <div className="text-xs space-y-2.5">
                    <div className="flex flex-col">
                      <span className="font-semibold text-stone-800">Accommodation:</span>
                      <span className="text-stone-600">{destination.estimatedBudget.breakdown.accommodation}</span>
                    </div>

                    <div className="flex flex-col">
                      <span className="font-semibold text-stone-800">Food & Dining:</span>
                      <span className="text-stone-600">{destination.estimatedBudget.breakdown.food}</span>
                    </div>

                    <div className="flex flex-col">
                      <span className="font-semibold text-stone-800">Key Sightseeing & Activities:</span>
                      <span className="text-stone-600">{destination.estimatedBudget.breakdown.activities}</span>
                    </div>

                    <div className="flex flex-col">
                      <span className="font-semibold text-stone-800">Local Transit:</span>
                      <span className="text-stone-600">{destination.estimatedBudget.breakdown.localTransport}</span>
                    </div>
                  </div>
                </div>

                {/* Save to Wishlist Button */}
                <button
                  type="button"
                  onClick={() => toggleFavorite(destination.slug)}
                  className={`w-full py-3 px-4 rounded-xl font-semibold text-xs transition-all flex items-center justify-center gap-2 ${
                    favorited
                      ? 'bg-rose-50 text-rose-600 border border-rose-200 hover:bg-rose-100'
                      : 'bg-[#133E33] text-white hover:bg-[#0c2720] shadow-sm'
                  }`}
                >
                  <Heart className={`w-4 h-4 ${favorited ? 'fill-rose-500' : ''}`} />
                  <span>{favorited ? 'In Your Saved Wishlist' : 'Add to Saved Wishlist'}</span>
                </button>

                {/* Disclaimer */}
                <div className="mt-4 flex items-start gap-2 text-[11px] text-stone-400 leading-snug">
                  <Info className="w-3.5 h-3.5 shrink-0 mt-0.5 text-stone-400" />
                  <span>
                    Independent research estimate based on standard traveler norms. Does not include long-haul airfare.
                  </span>
                </div>
              </div>

              {/* Travel Style Tags Widget */}
              <div className="bg-white rounded-2xl p-5 border border-stone-200/90 shadow-2xs">
                <span className="text-xs font-bold uppercase tracking-wider text-stone-500 block mb-3">
                  Classified Travel Styles
                </span>
                <div className="flex flex-wrap gap-2">
                  {destination.categories.map((cat) => (
                    <Link
                      key={cat}
                      to={`/explore?category=${cat}`}
                      className="px-3 py-1 bg-stone-100 hover:bg-[#133E33] hover:text-white text-stone-700 text-xs font-medium rounded-lg transition-colors"
                    >
                      {CATEGORY_LABELS[cat] || cat}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Related Destinations */}
        {relatedDestinations.length > 0 && (
          <section className="mt-20 pt-12 border-t border-stone-200/70">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-serif-title text-2xl sm:text-3xl font-bold text-stone-900">
                You Might Also Like
              </h2>
              <Link
                to="/explore"
                className="text-xs sm:text-sm font-semibold text-[#133E33] hover:underline"
              >
                View all destinations
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedDestinations.map((rel) => (
                <DestinationCard key={rel.id} destination={rel} />
              ))}
            </div>
          </section>
        )}
      </div>
    </article>
  );
};
