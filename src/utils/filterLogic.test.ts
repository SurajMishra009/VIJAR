import test from 'node:test';
import assert from 'node:assert/strict';
import { filterDestinations, sortDestinations, formatCurrency, calculateSavedTripTotals, getSearchSuggestions } from './filterLogic';
import { DESTINATIONS } from '../data/destinations';
import { FilterState } from '../types/destination';

test('filterDestinations filters by text search matching name, state, and categories', () => {
  const defaultFilter: FilterState = {
    searchQuery: 'manali',
    category: 'all',
    season: 'all',
    budgetTier: 'all',
    sortBy: 'featured',
  };

  const results = filterDestinations(DESTINATIONS, defaultFilter);
  assert.equal(results.length, 1);
  assert.equal(results[0].name, 'Manali');

  // Search by state 'rajasthan'
  const rajasthanResults = filterDestinations(DESTINATIONS, {
    ...defaultFilter,
    searchQuery: 'rajasthan',
  });
  assert.ok(rajasthanResults.length >= 2);
  const names = rajasthanResults.map((d) => d.name);
  assert.ok(names.includes('Jaipur'));
  assert.ok(names.includes('Udaipur'));
});

test('filterDestinations handles multiple combined filters correctly', () => {
  const combinedFilter: FilterState = {
    searchQuery: '',
    category: 'mountain',
    season: 'winter',
    budgetTier: 'moderate',
    sortBy: 'featured',
  };

  const results = filterDestinations(DESTINATIONS, combinedFilter);
  // Must match category mountain, season winter, budgetTier moderate
  assert.ok(results.length > 0);
  results.forEach((dest) => {
    assert.ok(dest.categories.includes('mountain'));
    assert.ok(dest.recommendedSeasons.includes('winter'));
    assert.equal(dest.estimatedBudget.tier, 'moderate');
  });
});

test('sortDestinations orders properly by budget and name', () => {
  const sortedBudgetAsc = sortDestinations(DESTINATIONS, 'budget-asc');
  for (let i = 0; i < sortedBudgetAsc.length - 1; i++) {
    assert.ok(
      sortedBudgetAsc[i].estimatedBudget.min <= sortedBudgetAsc[i + 1].estimatedBudget.min,
      `Expected ${sortedBudgetAsc[i].name} min budget to be <= ${sortedBudgetAsc[i + 1].name}`
    );
  }

  const sortedNameAsc = sortDestinations(DESTINATIONS, 'name-asc');
  assert.equal(sortedNameAsc[0].name, 'Darjeeling');
});

test('formatCurrency outputs correct Indian currency string', () => {
  assert.equal(formatCurrency(14000), '₹14,000');
  assert.equal(formatCurrency(50000), '₹50,000');
});

test('calculateSavedTripTotals computes aggregated budgets', () => {
  const sample = [DESTINATIONS[0], DESTINATIONS[1]]; // Manali (min 14k, max 28k) and Goa (min 16k, max 38k)
  const totals = calculateSavedTripTotals(sample);
  assert.equal(totals.totalMin, 14000 + 16000);
  assert.equal(totals.totalMax, 28000 + 38000);
  assert.equal(totals.averageDays, 8);
});

test('getSearchSuggestions returns matching destinations and categories', () => {
  // Empty query returns featured suggestions
  const defaultSuggestions = getSearchSuggestions('', DESTINATIONS);
  assert.ok(defaultSuggestions.length > 0);
  assert.equal(defaultSuggestions[0].type, 'destination');

  // Query "Goa" returns Goa destination
  const goaSuggestions = getSearchSuggestions('goa', DESTINATIONS);
  assert.ok(goaSuggestions.some((s) => s.title === 'Goa' && s.slug === 'goa'));

  // Query "moun" returns "Mountain Escapes" category and destinations like Manali
  const mountainSuggestions = getSearchSuggestions('moun', DESTINATIONS);
  assert.ok(mountainSuggestions.some((s) => s.type === 'category' && s.categoryKey === 'mountain'));
  assert.ok(mountainSuggestions.some((s) => s.type === 'destination'));
});

