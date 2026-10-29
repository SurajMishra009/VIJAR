import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Compass, DollarSign, Sparkles, ArrowRight } from 'lucide-react';
import { TravelCategory, BudgetTier } from '../../types/destination';
import { CATEGORY_LABELS, BUDGET_TIER_LABELS } from '../../utils/filterLogic';

export const HeroSection: React.FC = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<string>('all');
  const [budgetTier, setBudgetTier] = useState<string>('all');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (query.trim()) params.set('q', query.trim());
    if (category !== 'all') params.set('category', category);
    if (budgetTier !== 'all') params.set('budget', budgetTier);

    const qs = params.toString();
    navigate(qs ? `/explore?${qs}` : '/explore');
  };

  const handleQuickTagClick = (tag: string) => {
    navigate(`/explore?q=${encodeURIComponent(tag)}`);
  };

  return (
    <section className="relative min-h-[580px] lg:min-h-[640px] flex items-center justify-center text-white overflow-hidden">
      {/* Background Hero Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=2400&q=85"
          alt="Serene turquoise alpine lake with wooden canoe surrounded by misty pine forests and mountain peaks"
          className="w-full h-full object-cover object-center scale-105 animate-in fade-in duration-700"
        />
        {/* Gradients for text readability and vibrant teal tone */}
        <div className="absolute inset-0 bg-stone-950/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0e2c24]/95 via-[#133E33]/50 to-black/35" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        {/* Curated Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs font-semibold text-emerald-200 mb-6 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-emerald-300" />
          <span>Curated Tour Guidance & Transparent Budgets</span>
        </div>

        {/* Main Headline */}
        <h1 className="font-serif-title text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 max-w-4xl mx-auto leading-[1.15] drop-shadow-md">
          Your Next Adventure Starts Here.
        </h1>

        {/* Supporting Text */}
        <p className="text-base sm:text-lg lg:text-xl text-stone-200 max-w-2xl mx-auto mb-10 font-normal leading-relaxed drop-shadow-sm">
          Discover extraordinary destinations, find experiences that fit your budget, and plan journeys worth remembering.
        </p>

        {/* Search & Filter Interface */}
        <div className="max-w-4xl mx-auto bg-white/95 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-3 sm:p-4 text-stone-800 shadow-2xl border border-white/30">
          <form onSubmit={handleSearch} className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
            {/* Search Input */}
            <div className="sm:col-span-5 relative text-left">
              <label htmlFor="hero-search" className="block text-[11px] font-bold uppercase tracking-wider text-stone-500 mb-1 ml-1">
                Where to?
              </label>
              <div className="relative flex items-center">
                <Search className="w-4 h-4 text-stone-400 absolute left-3 pointer-events-none" />
                <input
                  id="hero-search"
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="e.g. Manali, Goa, Rajasthan..."
                  className="w-full pl-9 pr-3 py-2.5 bg-stone-50 hover:bg-stone-100/80 focus:bg-white text-stone-900 text-sm font-medium rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[#133E33] focus:border-transparent transition-all"
                />
              </div>
            </div>

            {/* Travel Category Selector */}
            <div className="sm:col-span-3 text-left">
              <label htmlFor="hero-category" className="block text-[11px] font-bold uppercase tracking-wider text-stone-500 mb-1 ml-1">
                Travel Style
              </label>
              <div className="relative flex items-center">
                <Compass className="w-4 h-4 text-stone-400 absolute left-3 pointer-events-none" />
                <select
                  id="hero-category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full pl-9 pr-8 py-2.5 bg-stone-50 hover:bg-stone-100/80 focus:bg-white text-stone-900 text-sm font-medium rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[#133E33] focus:border-transparent transition-all appearance-none cursor-pointer"
                >
                  <option value="all">All Travel Styles</option>
                  {(Object.keys(CATEGORY_LABELS) as TravelCategory[]).map((catKey) => (
                    <option key={catKey} value={catKey}>
                      {CATEGORY_LABELS[catKey]}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute right-3 text-stone-400 text-xs">▼</div>
              </div>
            </div>

            {/* Budget Selector */}
            <div className="sm:col-span-2 text-left">
              <label htmlFor="hero-budget" className="block text-[11px] font-bold uppercase tracking-wider text-stone-500 mb-1 ml-1">
                Budget
              </label>
              <div className="relative flex items-center">
                <DollarSign className="w-4 h-4 text-stone-400 absolute left-3 pointer-events-none" />
                <select
                  id="hero-budget"
                  value={budgetTier}
                  onChange={(e) => setBudgetTier(e.target.value)}
                  className="w-full pl-8 pr-7 py-2.5 bg-stone-50 hover:bg-stone-100/80 focus:bg-white text-stone-900 text-sm font-medium rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[#133E33] focus:border-transparent transition-all appearance-none cursor-pointer"
                >
                  <option value="all">Any Range</option>
                  {(Object.keys(BUDGET_TIER_LABELS) as BudgetTier[]).map((tierKey) => (
                    <option key={tierKey} value={tierKey}>
                      {BUDGET_TIER_LABELS[tierKey].label}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute right-2 text-stone-400 text-xs">▼</div>
              </div>
            </div>

            {/* Search Submit Button */}
            <div className="sm:col-span-2 pt-5 sm:pt-4">
              <button
                type="submit"
                className="w-full py-2.5 px-4 bg-[#133E33] hover:bg-[#0c2720] text-white font-semibold text-sm rounded-xl transition-all shadow-md active:scale-98 flex items-center justify-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#133E33]"
              >
                <span>Search</span>
                <ArrowRight className="w-4 h-4 text-emerald-300" />
              </button>
            </div>
          </form>
        </div>

        {/* Quick Suggestions / Trending */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-xs text-stone-200">
          <span className="font-medium text-stone-300">Popular:</span>
          {['Manali', 'Goa', 'Jaipur', 'Kashmir', 'Kerala', 'Ladakh'].map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => handleQuickTagClick(item)}
              className="px-2.5 py-1 rounded-full bg-white/10 hover:bg-white/20 text-stone-200 hover:text-white border border-white/20 transition-colors cursor-pointer"
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
