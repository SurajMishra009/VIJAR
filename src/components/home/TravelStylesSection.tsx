import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowUpRight, Compass } from 'lucide-react';
import { TRAVEL_STYLES } from '../../data/destinations';

export const TravelStylesSection: React.FC = () => {
  const navigate = useNavigate();

  const handleSelectStyle = (categoryKey: string) => {
    navigate(`/explore?category=${categoryKey}`);
  };

  return (
    <section id="travel-styles" className="py-20 bg-[#FBFBF9] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#133E33] mb-2">
              <Compass className="w-3.5 h-3.5 text-emerald-600" />
              <span>Curated Travel Styles</span>
            </div>
            <h2 className="font-serif-title text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
              Explore by Travel Style
            </h2>
          </div>
          <p className="text-stone-600 text-sm sm:text-base max-w-md">
            Whether you crave high-altitude summits, sunlit coastal waves, ancient temples, or quiet forest retreats.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRAVEL_STYLES.map((style) => (
            <div
              key={style.key}
              onClick={() => handleSelectStyle(style.key)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleSelectStyle(style.key);
                }
              }}
              role="button"
              tabIndex={0}
              aria-label={`Explore ${style.title}: ${style.count}`}
              className="group relative rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-[3/4] cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 focus:outline-none focus-visible:ring-3 focus-visible:ring-[#133E33]"
            >
              {/* Background Photo */}
              <img
                src={style.image}
                alt={style.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 ease-out"
              />

              {/* Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/35 to-black/10 group-hover:from-stone-950/90 transition-colors" />

              {/* Text info */}
              <div className="absolute inset-0 p-5 flex flex-col justify-end text-white">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-emerald-300 mb-1">
                  {style.count}
                </span>
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-serif-title text-xl font-bold tracking-tight text-white group-hover:text-emerald-200 transition-colors">
                    {style.title}
                  </h3>
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white group-hover:bg-[#133E33] group-hover:text-emerald-300 transition-all shrink-0">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
                <p className="text-xs text-stone-300 line-clamp-2 mt-1.5 opacity-90 leading-relaxed">
                  {style.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
