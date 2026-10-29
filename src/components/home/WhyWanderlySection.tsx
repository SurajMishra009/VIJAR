import React from 'react';
import { Compass, Wallet, Calendar, ShieldCheck, MapPinned, SlidersHorizontal } from 'lucide-react';

export const WhyWanderlySection: React.FC = () => {
  const pillars = [
    {
      icon: MapPinned,
      title: 'Easy Destination Discovery',
      description: 'Search by region, keyword, travel style, or duration to find destinations tailored to your specific journey.',
    },
    {
      icon: Wallet,
      title: 'Transparent Budget Ranges',
      description: 'Compare grounded per-person cost estimates across accommodation, food, transit, and entry fees without hidden markups.',
    },
    {
      icon: SlidersHorizontal,
      title: 'Travel-Style Curation',
      description: 'Filter seamlessly between high-altitude mountain trails, coastal escapes, royal heritage, or spiritual sanctuaries.',
    },
    {
      icon: Calendar,
      title: 'Seasonal Climate Guidance',
      description: 'Plan trips during optimal months to avoid extreme monsoons, summer heatwaves, or unexpected road closures.',
    },
    {
      icon: ShieldCheck,
      title: 'Zero Sponsored Bias',
      description: 'Independent research designed solely for the traveler. No promoted listings, paid placements, or commission inflation.',
    },
    {
      icon: Compass,
      title: 'Practical Field Notes',
      description: 'Actionable travel tips on inner line permits, mountain sickness acclimatization, and efficient local transport options.',
    },
  ];

  return (
    <section className="py-20 bg-[#FBFBF9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#133E33] mb-2">
            <span>Our Approach</span>
          </div>
          <h2 className="font-serif-title text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight mb-4">
            Why Choose VIAJAR?
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Planning travel in diverse landscapes can feel overwhelming with conflicting commercial advice. VIAJAR provides an intuitive, reliable foundation for your explorations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-stone-200/80 shadow-xs hover:border-emerald-800/30 transition-all duration-200"
              >
                <div className="w-11 h-11 rounded-xl bg-emerald-50 text-[#133E33] flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-emerald-800" />
                </div>
                <h3 className="font-serif-title text-lg font-bold text-stone-900 mb-2">
                  {pillar.title}
                </h3>
                <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
