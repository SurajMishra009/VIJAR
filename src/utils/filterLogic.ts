import { Destination, FilterState, TravelCategory, Season, BudgetTier } from '../types/destination';

export const CATEGORY_LABELS: Record<TravelCategory, string> = {
  mountain: 'Mountain Escapes',
  beach: 'Beach Holidays',
  adventure: 'Adventure Trips',
  heritage: 'Heritage & Culture',
  nature: 'Nature & Wildlife',
  romantic: 'Romantic Getaways',
  weekend: 'Weekend Trips',
  spiritual: 'Spiritual Journeys',
};

export const SEASON_LABELS: Record<Season, string> = {
  summer: 'Summer',
  monsoon: 'Monsoon',
  autumn: 'Autumn',
  winter: 'Winter',
};

export const BUDGET_TIER_LABELS: Record<BudgetTier, { label: string; range: string }> = {
  budget: { label: 'Budget-friendly', range: 'Under ₹15,000 (~$180)' },
  moderate: { label: 'Moderate', range: '₹15,000 - ₹35,000 (~$180 - $420)' },
  premium: { label: 'Premium', range: 'Above ₹35,000 (~$420+)' },
};

/**
 * Filter destinations by search query, category, season, and budget tier.
 * Search queries check name, state, country, description, and category names.
 */
export function filterDestinations(destinations: Destination[], filters: FilterState): Destination[] {
  const query = filters.searchQuery.trim().toLowerCase();

  return destinations.filter((dest) => {
    // 1. Text Search query
    if (query.length > 0) {
      const matchName = dest.name.toLowerCase().includes(query);
      const matchState = dest.state.toLowerCase().includes(query);
      const matchCountry = dest.country.toLowerCase().includes(query);
      const matchDescription = dest.description.toLowerCase().includes(query);
      const matchTagline = dest.tagline.toLowerCase().includes(query);
      const matchCategory = dest.categories.some((cat) => {
        const catName = CATEGORY_LABELS[cat]?.toLowerCase() || '';
        return cat.toLowerCase().includes(query) || catName.includes(query);
      });
      const matchAttraction = dest.attractions.some(
        (attr) => attr.name.toLowerCase().includes(query) || attr.tag.toLowerCase().includes(query)
      );

      if (!matchName && !matchState && !matchCountry && !matchDescription && !matchTagline && !matchCategory && !matchAttraction) {
        return false;
      }
    }

    // 2. Category filter
    if (filters.category && filters.category !== 'all') {
      if (!dest.categories.includes(filters.category as TravelCategory)) {
        return false;
      }
    }

    // 3. Season filter
    if (filters.season && filters.season !== 'all') {
      if (!dest.recommendedSeasons.includes(filters.season as Season)) {
        return false;
      }
    }

    // 4. Budget Tier filter
    if (filters.budgetTier && filters.budgetTier !== 'all') {
      if (dest.estimatedBudget.tier !== filters.budgetTier) {
        return false;
      }
    }

    return true;
  });
}

/**
 * Sort destinations by selected criteria
 */
export function sortDestinations(
  destinations: Destination[],
  sortBy: FilterState['sortBy']
): Destination[] {
  const list = [...destinations];

  switch (sortBy) {
    case 'budget-asc':
      return list.sort((a, b) => a.estimatedBudget.min - b.estimatedBudget.min);
    case 'budget-desc':
      return list.sort((a, b) => b.estimatedBudget.max - a.estimatedBudget.max);
    case 'name-asc':
      return list.sort((a, b) => a.name.localeCompare(b.name));
    case 'name-desc':
      return list.sort((a, b) => b.name.localeCompare(a.name));
    case 'featured':
    default:
      // Sort featured items first, then by popularity rank
      return list.sort((a, b) => {
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
        return a.popularityRank - b.popularityRank;
      });
  }
}

/**
 * Format currency with Indian formatting convention for INR
 */
export function formatCurrency(amount: number, currency = '₹'): string {
  return `${currency}${amount.toLocaleString('en-IN')}`;
}

/**
 * Calculate total min and max budget across a list of saved destinations
 */
export function calculateSavedTripTotals(destinations: Destination[]): {
  totalMin: number;
  totalMax: number;
  averageDays: number;
} {
  if (destinations.length === 0) {
    return { totalMin: 0, totalMax: 0, averageDays: 0 };
  }

  const totalMin = destinations.reduce((sum, d) => sum + d.estimatedBudget.min, 0);
  const totalMax = destinations.reduce((sum, d) => sum + d.estimatedBudget.max, 0);

  return {
    totalMin,
    totalMax,
    averageDays: destinations.length * 4,
  };
}

export interface SearchSuggestion {
  id: string;
  type: 'destination' | 'category' | 'state';
  title: string;
  subtitle: string;
  slug?: string;
  categoryKey?: string;
  image?: string;
  budget?: string;
  state?: string;
}

/**
 * Generate autocomplete/live search suggestions from destinations dataset.
 */
export function getSearchSuggestions(
  query: string,
  destinations: Destination[],
  limit = 6
): SearchSuggestion[] {
  const clean = query.trim().toLowerCase();

  // If query is empty, return popular / featured destinations as suggestions
  if (!clean) {
    return destinations
      .filter((d) => d.featured)
      .slice(0, 4)
      .map((d) => ({
        id: `dest-${d.slug}`,
        type: 'destination',
        title: d.name,
        subtitle: `${d.state} • ${formatCurrency(d.estimatedBudget.min)} - ${formatCurrency(d.estimatedBudget.max)}`,
        slug: d.slug,
        image: d.heroImage,
        budget: `${formatCurrency(d.estimatedBudget.min)}+`,
        state: d.state,
      }));
  }

  const results: SearchSuggestion[] = [];

  // 1. Direct name match destinations
  const nameMatches = destinations.filter((d) => d.name.toLowerCase().includes(clean));
  nameMatches.forEach((d) => {
    results.push({
      id: `dest-${d.slug}`,
      type: 'destination',
      title: d.name,
      subtitle: `${d.state} • ${CATEGORY_LABELS[d.categories[0]] || ''} • ${formatCurrency(d.estimatedBudget.min)} - ${formatCurrency(d.estimatedBudget.max)}`,
      slug: d.slug,
      image: d.heroImage,
      budget: `${formatCurrency(d.estimatedBudget.min)}+`,
      state: d.state,
    });
  });

  // 2. Travel Style Category matches
  (Object.keys(CATEGORY_LABELS) as TravelCategory[]).forEach((catKey) => {
    const label = CATEGORY_LABELS[catKey];
    if (label.toLowerCase().includes(clean) || catKey.toLowerCase().includes(clean)) {
      const matchCount = destinations.filter((d) => d.categories.includes(catKey)).length;
      results.push({
        id: `cat-${catKey}`,
        type: 'category',
        title: label,
        subtitle: `Travel Style • ${matchCount} destinations`,
        categoryKey: catKey,
      });

      // Also include top destinations belonging to this matched category
      destinations
        .filter((d) => d.categories.includes(catKey))
        .slice(0, 3)
        .forEach((d) => {
          if (!results.some((r) => r.id === `dest-${d.slug}`)) {
            results.push({
              id: `dest-${d.slug}`,
              type: 'destination',
              title: d.name,
              subtitle: `${d.state} • ${label} • ${formatCurrency(d.estimatedBudget.min)}+`,
              slug: d.slug,
              image: d.heroImage,
              budget: `${formatCurrency(d.estimatedBudget.min)}+`,
              state: d.state,
            });
          }
        });
    }
  });

  // 3. State / Region matches (excluding destinations already added)
  destinations.forEach((d) => {
    if (
      d.state.toLowerCase().includes(clean) &&
      !results.some((r) => r.id === `dest-${d.slug}`)
    ) {
      results.push({
        id: `dest-${d.slug}`,
        type: 'destination',
        title: d.name,
        subtitle: `${d.state} • ${d.tagline.slice(0, 45)}...`,
        slug: d.slug,
        image: d.heroImage,
        state: d.state,
      });
    }
  });

  // 4. Attractions match
  destinations.forEach((d) => {
    if (results.some((r) => r.id === `dest-${d.slug}`)) return;
    const matchedAttr = d.attractions.find((a) =>
      a.name.toLowerCase().includes(clean) || a.tag.toLowerCase().includes(clean)
    );
    if (matchedAttr) {
      results.push({
        id: `dest-${d.slug}`,
        type: 'destination',
        title: `${d.name} (${matchedAttr.name})`,
        subtitle: `${matchedAttr.tag} in ${d.state}`,
        slug: d.slug,
        image: d.heroImage,
        state: d.state,
      });
    }
  });

  return results.slice(0, limit);
}

