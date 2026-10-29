import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Wallet, CheckCircle2, ArrowRight, Sparkles, HelpCircle } from 'lucide-react';
import { BudgetTier } from '../../types/destination';
import { DESTINATIONS } from '../../data/destinations';
import { DestinationCard } from '../destination/DestinationCard';

interface BudgetTierMeta {
  key: BudgetTier;
  title: string;
  range: string;
  description: string;
  includes: string[];
  tag: string;
}

const BUDGET_TIERS: BudgetTierMeta[] = [
  {
    key: 'budget',
    title: 'Budget-Friendly',
    range: 'Under ₹15,000 (~$180)',
    description: 'Smart, authentic travel with atmospheric guesthouses, local dhabas, and public transit.',
    tag: 'Great Value',
    includes: [
      'Clean boutique hostels or character guesthouses (₹1,000 - ₹2,000/night)',
      'Authentic street delicacies & traditional thali joints',
      'Shared cabs, bicycles, and local buses',
      'Standard monument & national park entry fees',
    ],
  },
  {
    key: 'moderate',
    title: 'Moderate',
    range: '₹15,000 — ₹35,000 (~$180 - $420)',
    description: 'The sweet spot of comfort: heritage havelis, scenic riverside rooms, and private taxis.',
    tag: 'Most Popular',
    includes: [
      'Charming 3-4 star heritage boutique hotels or cottages',
      'Curated dining at atmospheric cafes & regional specialties',
      'Private dedicated cabs or self-drive scooter rentals',
      'Guided walks, boat cruises, and adventure activities',
    ],
  },
  {
    key: 'premium',
    title: 'Premium',
    range: 'Above ₹35,000 (~$420+)',
    description: 'Indulgent stays in royal palaces, high-altitude luxury chalets, and private glamping domes.',
    tag: 'Experiential Luxury',
    includes: [
      'Luxury heritage resorts, houseboats, or alpine retreats',
      'Chef-curated dinners and private lakeside or vineyard dining',
      'Private 4x4 SUV transportation throughout the journey',
      'Exclusive cable car passes, private guides, and bespoke safaris',
    ],
  },
];

export const BudgetDiscoverySection: React.FC = () => {
  const [selectedTier, setSelectedTier] = useState<BudgetTier>('moderate');

  const activeTierMeta = BUDGET_TIERS.find((t) => t.key === selectedTier) || BUDGET_TIERS[1];
  const matchingDestinations = DESTINATIONS.filter(
    (d) => d.estimatedBudget.tier === selectedTier
  ).slice(0, 3);

  return (
    <section className="py-20 bg-[#FBFBF9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#133E33] mb-2">
              <Wallet className="w-3.5 h-3.5 text-emerald-600" />
              <span>Transparent Trip Planning</span>
            </div>
            <h2 className="font-serif-title text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
              Discover by Estimated Budget
            </h2>
          </div>
          <div className="text-xs sm:text-sm text-stone-600 max-w-md bg-stone-100 p-3 rounded-xl border border-stone-200/80">
            <strong>Standardized Definition:</strong> All ranges reflect estimated <strong>4-5 day per-person</strong> ground costs (stay, food, local transport, key sights). Excludes long-distance airfare.
          </div>
        </div>

        {/* Tier Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {BUDGET_TIERS.map((tier) => {
            const isSelected = selectedTier === tier.key;
            return (
              <div
                key={tier.key}
                onClick={() => setSelectedTier(tier.key)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedTier(tier.key);
                  }
                }}
                role="button"
                tabIndex={0}
                aria-pressed={isSelected}
                className={`p-6 rounded-2xl cursor-pointer transition-all duration-200 border text-left relative focus:outline-none focus-visible:ring-2 focus-visible:ring-[#133E33] ${
                  isSelected
                    ? 'bg-[#133E33] text-white border-[#133E33] shadow-lg scale-[1.01]'
                    : 'bg-white text-stone-800 border-stone-200/90 hover:border-stone-300 shadow-2xs'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full ${
                      isSelected
                        ? 'bg-emerald-800 text-emerald-200'
                        : 'bg-stone-100 text-stone-600'
                    }`}
                  >
                    {tier.tag}
                  </span>
                  <div className={`text-base font-bold ${isSelected ? 'text-emerald-300' : 'text-[#133E33]'}`}>
                    {tier.range}
                  </div>
                </div>

                <h3 className={`font-serif-title text-xl font-bold mb-1.5 ${isSelected ? 'text-white' : 'text-stone-900'}`}>
                  {tier.title}
                </h3>
                <p className={`text-xs leading-relaxed mb-4 ${isSelected ? 'text-stone-200' : 'text-stone-600'}`}>
                  {tier.description}
                </p>

                <div className="space-y-1.5 pt-3 border-t border-dashed border-stone-200/30">
                  {tier.includes.slice(0, 2).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-1.5 text-xs">
                      <CheckCircle2
                        className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${
                          isSelected ? 'text-emerald-300' : 'text-emerald-600'
                        }`}
                      />
                      <span className={isSelected ? 'text-stone-200' : 'text-stone-600'}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Tier Banner & Matches */}
        <div className="mb-6 flex items-center justify-between">
          <p className="text-sm font-semibold text-stone-700">
            Destinations matching <span className="text-[#133E33] font-bold">{activeTierMeta.title}</span> ({activeTierMeta.range}):
          </p>
          <Link
            to={`/explore?budget=${selectedTier}`}
            className="text-xs font-semibold text-[#133E33] hover:underline flex items-center gap-1"
          >
            <span>View all in this range</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {matchingDestinations.map((dest) => (
            <DestinationCard key={dest.id} destination={dest} />
          ))}
        </div>
      </div>
    </section>
  );
};
