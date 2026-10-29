import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Search, Filter, X, RotateCcw, SlidersHorizontal, ArrowUpDown, Compass, Check } from 'lucide-react';
import { DESTINATIONS } from '../data/destinations';
import { Destination, FilterState, TravelCategory, Season, BudgetTier } from '../types/destination';
import {
  filterDestinations,
  sortDestinations,
  CATEGORY_LABELS,
  SEASON_LABELS,
  BUDGET_TIER_LABELS,
} from '../utils/filterLogic';
import { DestinationCard } from '../components/destination/DestinationCard';
import { SearchAutocomplete } from '../components/search/SearchAutocomplete';

export const ExplorePage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Initialize filter state from URL parameters
  const [searchQuery, setSearchQuery] = useState(searchParams.get('q') || '');
  const [category, setCategory] = useState(searchParams.get('category') || 'all');
  const [season, setSeason] = useState(searchParams.get('season') || 'all');
  const [budgetTier, setBudgetTier] = useState(searchParams.get('budget') || 'all');
  const [sortBy, setSortBy] = useState<FilterState['sortBy']>(
    (searchParams.get('sort') as FilterState['sortBy']) || 'featured'
  );

  // Sync state with URL params
  useEffect(() => {
    const q = searchParams.get('q') || '';
    const cat = searchParams.get('category') || 'all';
    const s = searchParams.get('season') || 'all';
    const b = searchParams.get('budget') || 'all';
    const srt = (searchParams.get('sort') as FilterState['sortBy']) || 'featured';

    setSearchQuery(q);
    setCategory(cat);
    setSeason(s);
    setBudgetTier(b);
    setSortBy(srt);
  }, [searchParams]);

  // Update URL params when filters change
  const updateParams = (newFilters: {
    q?: string;
    cat?: string;
    s?: string;
    b?: string;
    sort?: string;
  }) => {
    const nextParams = new URLSearchParams();
    const curQ = newFilters.q !== undefined ? newFilters.q : searchQuery;
    const curCat = newFilters.cat !== undefined ? newFilters.cat : category;
    const curS = newFilters.s !== undefined ? newFilters.s : season;
    const curB = newFilters.b !== undefined ? newFilters.b : budgetTier;
    const curSort = newFilters.sort !== undefined ? newFilters.sort : sortBy;

    if (curQ.trim()) nextParams.set('q', curQ.trim());
    if (curCat !== 'all') nextParams.set('category', curCat);
    if (curS !== 'all') nextParams.set('season', curS);
    if (curB !== 'all') nextParams.set('budget', curB);
    if (curSort !== 'featured') nextParams.set('sort', curSort);

    setSearchParams(nextParams);
  };

  const handleSearchChange = (val: string) => {
    setSearchQuery(val);
    updateParams({ q: val });
  };

  const handleCategoryChange = (val: string) => {
    setCategory(val);
    updateParams({ cat: val });
  };

  const handleSeasonChange = (val: string) => {
    setSeason(val);
    updateParams({ s: val });
  };

  const handleBudgetChange = (val: string) => {
    setBudgetTier(val);
    updateParams({ b: val });
  };

  const handleSortChange = (val: FilterState['sortBy']) => {
    setSortBy(val);
    updateParams({ sort: val });
  };

  const handleClearAll = () => {
    setSearchQuery('');
    setCategory('all');
    setSeason('all');
    setBudgetTier('all');
    setSortBy('featured');
    setSearchParams(new URLSearchParams());
  };

  // Compute filtered & sorted destinations
  const currentFilters: FilterState = useMemo(
    () => ({
      searchQuery,
      category,
      season,
      budgetTier,
      sortBy,
    }),
    [searchQuery, category, season, budgetTier, sortBy]
  );

  const filtered = useMemo(
    () => filterDestinations(DESTINATIONS, currentFilters),
    [currentFilters]
  );

  const displayedDestinations = useMemo(
    () => sortDestinations(filtered, sortBy),
    [filtered, sortBy]
  );

  const hasActiveFilters =
    searchQuery.trim().length > 0 ||
    category !== 'all' ||
    season !== 'all' ||
    budgetTier !== 'all';

  return (
    <div className="min-h-screen bg-[#FBFBF9] py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#133E33] mb-2">
            <Compass className="w-3.5 h-3.5 text-emerald-600" />
            <span>Destination Directory</span>
          </div>
          <h1 className="font-serif-title text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight mb-2">
            Explore Destinations
          </h1>
          <p className="text-stone-600 text-sm sm:text-base max-w-2xl">
            Filter by travel style, season, and realistic budget tiers to pinpoint your perfect journey.
          </p>
        </div>

        {/* Mobile Filter Toggle & Search Bar */}
        <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between mb-6">
          {/* Main Search Input with Live Autocomplete Dropdown */}
          <div className="flex-1">
            <SearchAutocomplete
              value={searchQuery}
              onChange={(val) => handleSearchChange(val)}
              onSubmit={(val) => handleSearchChange(val)}
              onSelectDestination={(slug) => navigate(`/destinations/${slug}`)}
              onSelectCategory={(catKey) => handleCategoryChange(catKey)}
              placeholder="Search by name, state, style, or attractions (e.g. Goa, snow, temple)..."
              ariaLabel="Search destinations"
              variant="explore"
            />
          </div>

          {/* Sort Selector & Mobile Filter Trigger */}
          <div className="flex items-center gap-2">
            {/* Sort Selector */}
            <div className="relative flex items-center flex-1 sm:flex-initial">
              <ArrowUpDown className="w-4 h-4 text-stone-400 absolute left-3 pointer-events-none" />
              <select
                value={sortBy}
                onChange={(e) => handleSortChange(e.target.value as FilterState['sortBy'])}
                aria-label="Sort destinations"
                className="w-full sm:w-auto pl-9 pr-8 py-3 bg-white text-stone-800 text-sm font-medium rounded-xl border border-stone-200/90 shadow-2xs focus:outline-none focus:ring-2 focus:ring-[#133E33] cursor-pointer appearance-none"
              >
                <option value="featured">Featured / Popular</option>
                <option value="budget-asc">Budget: Low to High</option>
                <option value="budget-desc">Budget: High to Low</option>
                <option value="name-asc">Name: A to Z</option>
                <option value="name-desc">Name: Z to A</option>
              </select>
              <div className="pointer-events-none absolute right-3 text-stone-400 text-xs">▼</div>
            </div>

            {/* Mobile Filter Button */}
            <button
              type="button"
              onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
              className="lg:hidden flex items-center gap-2 px-4 py-3 bg-white text-stone-700 text-sm font-semibold rounded-xl border border-stone-200/90 shadow-2xs hover:bg-stone-50"
              aria-expanded={mobileFilterOpen}
            >
              <SlidersHorizontal className="w-4 h-4 text-[#133E33]" />
              <span>Filters</span>
              {hasActiveFilters && (
                <span className="w-2 h-2 rounded-full bg-emerald-600" />
              )}
            </button>
          </div>
        </div>

        {/* Active Filter Chips */}
        {hasActiveFilters && (
          <div className="flex flex-wrap items-center gap-2 mb-6 p-3 bg-stone-100/70 rounded-xl border border-stone-200/60">
            <span className="text-xs font-semibold text-stone-500 mr-1">Active Filters:</span>

            {searchQuery.trim() && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white text-xs font-medium text-stone-800 rounded-lg border border-stone-200 shadow-2xs">
                <span>Search: &ldquo;{searchQuery}&rdquo;</span>
                <button
                  type="button"
                  onClick={() => handleSearchChange('')}
                  aria-label="Remove search filter"
                  className="hover:text-stone-900"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </span>
            )}

            {category !== 'all' && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white text-xs font-medium text-stone-800 rounded-lg border border-stone-200 shadow-2xs">
                <span>Style: {CATEGORY_LABELS[category as TravelCategory] || category}</span>
                <button
                  type="button"
                  onClick={() => handleCategoryChange('all')}
                  aria-label="Remove category filter"
                  className="hover:text-stone-900"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </span>
            )}

            {season !== 'all' && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white text-xs font-medium text-stone-800 rounded-lg border border-stone-200 shadow-2xs">
                <span>Season: {SEASON_LABELS[season as Season] || season}</span>
                <button
                  type="button"
                  onClick={() => handleSeasonChange('all')}
                  aria-label="Remove season filter"
                  className="hover:text-stone-900"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </span>
            )}

            {budgetTier !== 'all' && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white text-xs font-medium text-stone-800 rounded-lg border border-stone-200 shadow-2xs">
                <span>Budget: {BUDGET_TIER_LABELS[budgetTier as BudgetTier]?.label || budgetTier}</span>
                <button
                  type="button"
                  onClick={() => handleBudgetChange('all')}
                  aria-label="Remove budget filter"
                  className="hover:text-stone-900"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </span>
            )}

            <button
              type="button"
              onClick={handleClearAll}
              className="inline-flex items-center gap-1 text-xs font-semibold text-[#133E33] hover:underline ml-2"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Clear all</span>
            </button>
          </div>
        )}

        {/* Main Layout: Sidebar Filters + Destinations Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filter Sidebar (Desktop and Mobile Drawer) */}
          <aside
            className={`${
              mobileFilterOpen ? 'block' : 'hidden'
            } lg:block lg:col-span-1 space-y-6`}
          >
            <div className="bg-white rounded-2xl p-6 border border-stone-200/90 shadow-2xs sticky top-24">
              <div className="flex items-center justify-between pb-4 border-b border-stone-100 mb-6">
                <div className="flex items-center gap-2">
                  <Filter className="w-4 h-4 text-[#133E33]" />
                  <h2 className="font-serif-title text-lg font-bold text-stone-900">
                    Filter Options
                  </h2>
                </div>
                {hasActiveFilters && (
                  <button
                    type="button"
                    onClick={handleClearAll}
                    className="text-xs font-semibold text-stone-500 hover:text-stone-900"
                  >
                    Reset
                  </button>
                )}
              </div>

              {/* 1. Travel Style Category */}
              <div className="mb-6">
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-3">
                  Travel Style
                </label>
                <div className="space-y-1.5">
                  <button
                    type="button"
                    onClick={() => handleCategoryChange('all')}
                    className={`w-full flex items-center justify-between px-3 py-2 text-xs font-medium rounded-lg transition-colors ${
                      category === 'all'
                        ? 'bg-[#133E33] text-white'
                        : 'text-stone-700 hover:bg-stone-50'
                    }`}
                  >
                    <span>All Styles</span>
                    {category === 'all' && <Check className="w-3.5 h-3.5" />}
                  </button>
                  {(Object.keys(CATEGORY_LABELS) as TravelCategory[]).map((catKey) => {
                    const isSelected = category === catKey;
                    return (
                      <button
                        key={catKey}
                        type="button"
                        onClick={() => handleCategoryChange(catKey)}
                        className={`w-full flex items-center justify-between px-3 py-2 text-xs font-medium rounded-lg transition-colors ${
                          isSelected
                            ? 'bg-[#133E33] text-white font-semibold'
                            : 'text-stone-700 hover:bg-stone-50'
                        }`}
                      >
                        <span>{CATEGORY_LABELS[catKey]}</span>
                        {isSelected && <Check className="w-3.5 h-3.5" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 2. Season */}
              <div className="mb-6 pt-5 border-t border-stone-100">
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-3">
                  Ideal Season
                </label>
                <div className="grid grid-cols-2 gap-1.5">
                  <button
                    type="button"
                    onClick={() => handleSeasonChange('all')}
                    className={`px-3 py-2 text-xs font-medium rounded-lg text-center transition-colors ${
                      season === 'all'
                        ? 'bg-[#133E33] text-white font-semibold'
                        : 'bg-stone-50 text-stone-700 hover:bg-stone-100'
                    }`}
                  >
                    All Seasons
                  </button>
                  {(Object.keys(SEASON_LABELS) as Season[]).map((sKey) => {
                    const isSelected = season === sKey;
                    return (
                      <button
                        key={sKey}
                        type="button"
                        onClick={() => handleSeasonChange(sKey)}
                        className={`px-3 py-2 text-xs font-medium rounded-lg text-center transition-colors ${
                          isSelected
                            ? 'bg-[#133E33] text-white font-semibold'
                            : 'bg-stone-50 text-stone-700 hover:bg-stone-100'
                        }`}
                      >
                        {SEASON_LABELS[sKey]}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 3. Budget Tier */}
              <div className="pt-5 border-t border-stone-100">
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-3">
                  Trip Budget
                </label>
                <div className="space-y-2">
                  <label className="flex items-center gap-2.5 text-xs text-stone-700 cursor-pointer">
                    <input
                      type="radio"
                      name="budgetTierFilter"
                      checked={budgetTier === 'all'}
                      onChange={() => handleBudgetChange('all')}
                      className="text-[#133E33] focus:ring-[#133E33]"
                    />
                    <span>All Budgets</span>
                  </label>
                  {(Object.keys(BUDGET_TIER_LABELS) as BudgetTier[]).map((bKey) => {
                    const meta = BUDGET_TIER_LABELS[bKey];
                    return (
                      <label
                        key={bKey}
                        className="flex items-start gap-2.5 text-xs text-stone-700 cursor-pointer"
                      >
                        <input
                          type="radio"
                          name="budgetTierFilter"
                          checked={budgetTier === bKey}
                          onChange={() => handleBudgetChange(bKey)}
                          className="mt-0.5 text-[#133E33] focus:ring-[#133E33]"
                        />
                        <div>
                          <span className="font-semibold text-stone-900 block">{meta.label}</span>
                          <span className="text-[11px] text-stone-500">{meta.range}</span>
                        </div>
                      </label>
                    );
                  })}
                </div>
              </div>
            </div>
          </aside>

          {/* Destinations Grid & Count */}
          <main className="lg:col-span-3">
            {/* Results Status Header */}
            <div className="flex items-center justify-between mb-6 pb-2 border-b border-stone-200/60">
              <p className="text-sm text-stone-600">
                Showing{' '}
                <strong className="text-stone-900 font-bold">
                  {displayedDestinations.length}
                </strong>{' '}
                {displayedDestinations.length === 1 ? 'destination' : 'destinations'}
              </p>
            </div>

            {/* Results Grid or Empty State */}
            {displayedDestinations.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {displayedDestinations.map((destination) => (
                  <DestinationCard key={destination.id} destination={destination} />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-2xl p-12 text-center border border-stone-200/80 shadow-2xs max-w-lg mx-auto my-8">
                <div className="w-16 h-16 rounded-2xl bg-stone-100 flex items-center justify-center text-stone-400 mx-auto mb-4">
                  <Search className="w-7 h-7" />
                </div>
                <h3 className="font-serif-title text-xl font-bold text-stone-900 mb-2">
                  No destinations matched your criteria
                </h3>
                <p className="text-stone-600 text-sm mb-6 leading-relaxed">
                  Try broadening your search query or resetting filters like season and budget.
                </p>
                <button
                  type="button"
                  onClick={handleClearAll}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#133E33] hover:bg-[#0c2720] text-white text-xs font-semibold rounded-xl transition-all shadow-sm"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset all filters</span>
                </button>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};
