import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Clock, ArrowRight } from 'lucide-react';
import { EDITORIAL_STORIES } from '../../data/destinations';

export const TravelInspirationSection: React.FC = () => {
  return (
    <section className="py-20 bg-stone-100/60 border-t border-stone-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#133E33] mb-2">
              <BookOpen className="w-3.5 h-3.5 text-emerald-600" />
              <span>Editorial Journal</span>
            </div>
            <h2 className="font-serif-title text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
              Travel Inspiration & Itinerary Ideas
            </h2>
          </div>
          <p className="text-stone-600 text-sm sm:text-base max-w-md">
            Thoughtful essays, practical pacing recommendations, and first-hand field notes for independent explorers.
          </p>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {EDITORIAL_STORIES.map((story) => (
            <article
              key={story.id}
              className="bg-white rounded-2xl overflow-hidden border border-stone-200/80 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col group"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
                <img
                  src={story.image}
                  alt={story.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider bg-stone-900/80 text-white px-2.5 py-1 rounded-full backdrop-blur-xs">
                  {story.category}
                </span>
              </div>

              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-xs text-stone-400 mb-2.5">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{story.readTime}</span>
                  </div>
                  <h3 className="font-serif-title text-xl font-bold text-stone-900 mb-2 leading-snug group-hover:text-[#133E33] transition-colors">
                    {story.title}
                  </h3>
                  <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mb-4">
                    {story.content}
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                  <Link
                    to={`/destinations/${story.destinationSlug}`}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#133E33] hover:text-emerald-700 transition-colors"
                  >
                    <span>Explore destination guide</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
