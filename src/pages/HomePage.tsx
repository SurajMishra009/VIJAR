import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { HeroSection } from '../components/home/HeroSection';
import { TravelStylesSection } from '../components/home/TravelStylesSection';
import { SeasonalSection } from '../components/home/SeasonalSection';
import { BudgetDiscoverySection } from '../components/home/BudgetDiscoverySection';
import { TravelInspirationSection } from '../components/home/TravelInspirationSection';
import { WhyWanderlySection } from '../components/home/WhyWanderlySection';
import { DestinationCard } from '../components/destination/DestinationCard';
import { DESTINATIONS } from '../data/destinations';

export const HomePage: React.FC = () => {
  const featuredDestinations = DESTINATIONS.filter((d) => d.featured).slice(0, 8);

  return (
    <div className="min-h-screen">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Featured Destinations */}
      <section className="py-20 bg-[#FBFBF9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#133E33] mb-2">
                <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                <span>Handpicked Highlights</span>
              </div>
              <h2 className="font-serif-title text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
                Featured Destinations
              </h2>
            </div>
            <div className="flex items-center gap-4">
              <p className="text-stone-600 text-sm hidden sm:block">
                Top-rated experiences with verified cost estimates and seasonal suitability.
              </p>
              <Link
                to="/explore"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#133E33] hover:text-emerald-700 transition-colors shrink-0"
              >
                <span>View all ({DESTINATIONS.length})</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredDestinations.map((destination) => (
              <DestinationCard key={destination.id} destination={destination} />
            ))}
          </div>
        </div>
      </section>

      {/* 3. Explore by Travel Style */}
      <TravelStylesSection />

      {/* 4. Seasonal Travel Recommendations */}
      <SeasonalSection />

      {/* 5. Discover by Budget */}
      <BudgetDiscoverySection />

      {/* 6. Travel Inspiration Editorial */}
      <TravelInspirationSection />

      {/* 7. Why Choose Wanderly */}
      <WhyWanderlySection />
    </div>
  );
};
