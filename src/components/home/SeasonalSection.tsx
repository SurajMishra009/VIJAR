import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sun, CloudRain, Wind, Snowflake, Info, ArrowRight } from 'lucide-react';
import { Season } from '../../types/destination';
import { DESTINATIONS } from '../../data/destinations';
import { DestinationCard } from '../destination/DestinationCard';

interface SeasonMeta {
  key: Season;
  label: string;
  months: string;
  icon: React.ComponentType<{ className?: string }>;
  tagline: string;
  advice: string;
}

const SEASONS: SeasonMeta[] = [
  {
    key: 'summer',
    label: 'Summer',
    months: 'March — June',
    icon: Sun,
    tagline: 'High-altitude Himalayan escapes and cool pine ridges',
    advice: 'Ideal for escaping the plains into Himachal, Kashmir, and Ladakh. Pack light layers and high-SPF sun protection.',
  },
  {
    key: 'monsoon',
    label: 'Monsoon',
    months: 'July — September',
    icon: CloudRain,
    tagline: 'Lush emerald landscapes, misty waterfalls, and quiet coastlines',
    advice: 'Witness Meghalaya waterfalls in full roar, tranquil backwaters in Kerala, and emerald hills in Goa without tourist crowds.',
  },
  {
    key: 'autumn',
    label: 'Autumn',
    months: 'October — November',
    icon: Wind,
    tagline: 'Golden chinars, crisp mountain horizons, and pleasant heritage walks',
    advice: 'Perhaps the most versatile season across India. Crystal clear mountain views in Darjeeling and pleasant breezes in Rajasthan.',
  },
  {
    key: 'winter',
    label: 'Winter',
    months: 'December — February',
    icon: Snowflake,
    tagline: 'Regal Rajasthan forts, sunny Arabian beaches, and snow wonderlands',
    advice: 'Warm, breezy beach weather in Goa; magical royal fort tours in Jaipur & Udaipur; heavy snowfall for skiers in Manali & Gulmarg.',
  },
];

export const SeasonalSection: React.FC = () => {
  const [activeSeason, setActiveSeason] = useState<Season>('winter');

  const currentSeasonMeta = SEASONS.find((s) => s.key === activeSeason) || SEASONS[0];
  const matchingDestinations = DESTINATIONS.filter((d) =>
    d.recommendedSeasons.includes(activeSeason)
  ).slice(0, 4);

  return (
    <section id="seasonal" className="py-20 bg-stone-100/70 border-y border-stone-200/60 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#133E33] mb-2">
            <span>Seasonal Travel Calendar</span>
          </div>
          <h2 className="font-serif-title text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight mb-3">
            Where to Travel by Season
          </h2>
          <p className="text-stone-600 text-sm sm:text-base">
            India’s microclimates mean there is always a magical destination in season. Pick a season to explore curated journeys.
          </p>
        </div>

        {/* Season Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8">
          {SEASONS.map((season) => {
            const Icon = season.icon;
            const isSelected = activeSeason === season.key;
            return (
              <button
                key={season.key}
                type="button"
                onClick={() => setActiveSeason(season.key)}
                className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-sm font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#133E33] ${
                  isSelected
                    ? 'bg-[#133E33] text-white shadow-md scale-102'
                    : 'bg-white text-stone-700 hover:bg-stone-50 border border-stone-200/80 shadow-2xs'
                }`}
                aria-pressed={isSelected}
              >
                <Icon className={`w-4 h-4 ${isSelected ? 'text-emerald-300' : 'text-stone-500'}`} />
                <span>{season.label}</span>
                <span className={`text-[11px] font-normal ${isSelected ? 'text-emerald-200' : 'text-stone-400'}`}>
                  ({season.months})
                </span>
              </button>
            );
          })}
        </div>

        {/* Current Season Guidance Banner */}
        <div className="bg-white rounded-2xl p-5 border border-stone-200/80 mb-10 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="font-serif-title font-bold text-stone-900 text-lg">
                {currentSeasonMeta.tagline}
              </span>
            </div>
            <p className="text-stone-600 text-xs sm:text-sm">
              {currentSeasonMeta.advice}
            </p>
          </div>
          <Link
            to={`/explore?season=${activeSeason}`}
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-stone-900 hover:bg-[#133E33] text-white text-xs font-semibold rounded-xl transition-colors shrink-0"
          >
            <span>See all {currentSeasonMeta.label} Trips</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Destination Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {matchingDestinations.map((destination) => (
            <DestinationCard key={destination.id} destination={destination} />
          ))}
        </div>

        {/* Advisory footnote */}
        <div className="mt-8 flex items-center justify-center gap-2 text-xs text-stone-500 text-center">
          <Info className="w-4 h-4 text-stone-400 shrink-0" />
          <span>
            Seasonal recommendations are general historical climate guidance. Always verify local weather forecasts before departure.
          </span>
        </div>
      </div>
    </section>
  );
};
