export type TravelCategory = 
  | 'mountain' 
  | 'beach' 
  | 'adventure' 
  | 'heritage' 
  | 'nature' 
  | 'romantic' 
  | 'weekend' 
  | 'spiritual';

export type Season = 'summer' | 'monsoon' | 'autumn' | 'winter';

export type BudgetTier = 'budget' | 'moderate' | 'premium';

export interface DestinationAttraction {
  name: string;
  description: string;
  tag: string;
}

export interface TravelTip {
  title: string;
  content: string;
}

export interface BudgetBreakdown {
  accommodation: string;
  food: string;
  activities: string;
  localTransport: string;
}

export interface EstimatedBudget {
  min: number;
  max: number;
  currency: string;
  tier: BudgetTier;
  periodDescription: string; // e.g. "4-5 Days per person"
  breakdown: BudgetBreakdown;
}

export interface TransitInfo {
  air: string;
  rail: string;
  road: string;
}

export interface Destination {
  id: string;
  slug: string;
  name: string;
  state: string;
  country: string;
  tagline: string;
  description: string;
  heroImage: string;
  gallery: string[];
  categories: TravelCategory[];
  recommendedSeasons: Season[];
  bestMonths: string;
  estimatedBudget: EstimatedBudget;
  idealDuration: string;
  featured: boolean;
  popularityRank: number;
  attractions: DestinationAttraction[];
  travelTips: TravelTip[];
  climateSummary: string;
  howToReach: TransitInfo;
}

export interface FilterState {
  searchQuery: string;
  category: string; // 'all' or TravelCategory
  season: string;   // 'all' or Season
  budgetTier: string; // 'all' | 'budget' | 'moderate' | 'premium'
  sortBy: 'featured' | 'budget-asc' | 'budget-desc' | 'name-asc' | 'name-desc';
}
