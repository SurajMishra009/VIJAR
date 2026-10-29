import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, ShieldCheck, HelpCircle, Mail, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#133E33] text-stone-200 pt-16 pb-12 border-t border-emerald-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-12">
          {/* Brand & Manifesto */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-emerald-800/80 flex items-center justify-center text-white border border-emerald-700/60">
                <Compass className="w-5 h-5 text-emerald-300" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif-title text-xl font-bold tracking-tight text-white leading-tight">
                  VIAJAR
                </span>
                <span className="text-[10px] uppercase tracking-wider text-emerald-300 font-medium">
                  Travel Freely
                </span>
              </div>
            </Link>
            <p className="text-stone-300 text-sm leading-relaxed max-w-sm">
              Discover extraordinary destinations across India, compare transparent per-person travel budgets, and plan memorable journeys without sponsored bias or inflated pricing.
            </p>
            <div className="flex items-center gap-2 text-xs text-emerald-200/90 bg-emerald-900/50 p-3 rounded-xl border border-emerald-700/40 max-w-sm">
              <ShieldCheck className="w-4 h-4 shrink-0 text-emerald-400" />
              <span>Independent editorial research. Real traveler cost breakdowns.</span>
            </div>
          </div>

          {/* Quick Explore */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-4">
              Explore Styles
            </h4>
            <ul className="space-y-2.5 text-sm text-stone-300">
              <li>
                <Link to="/explore?category=mountain" className="hover:text-white transition-colors">
                  Mountain Escapes
                </Link>
              </li>
              <li>
                <Link to="/explore?category=beach" className="hover:text-white transition-colors">
                  Beach Holidays
                </Link>
              </li>
              <li>
                <Link to="/explore?category=heritage" className="hover:text-white transition-colors">
                  Heritage & Forts
                </Link>
              </li>
              <li>
                <Link to="/explore?category=adventure" className="hover:text-white transition-colors">
                  Adventure Expeditions
                </Link>
              </li>
              <li>
                <Link to="/explore?category=spiritual" className="hover:text-white transition-colors">
                  Spiritual Retreats
                </Link>
              </li>
            </ul>
          </div>

          {/* Seasonal Travel */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-4">
              By Season
            </h4>
            <ul className="space-y-2.5 text-sm text-stone-300">
              <li>
                <Link to="/explore?season=winter" className="hover:text-white transition-colors">
                  Winter Wonders (Dec - Feb)
                </Link>
              </li>
              <li>
                <Link to="/explore?season=summer" className="hover:text-white transition-colors">
                  Summer Havens (Mar - Jun)
                </Link>
              </li>
              <li>
                <Link to="/explore?season=monsoon" className="hover:text-white transition-colors">
                  Monsoon Escapes (Jul - Sep)
                </Link>
              </li>
              <li>
                <Link to="/explore?season=autumn" className="hover:text-white transition-colors">
                  Autumn Trails (Oct - Nov)
                </Link>
              </li>
              <li>
                <Link to="/saved" className="hover:text-white transition-colors">
                  My Saved Wishlist
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Support */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-4">
              VIAJAR
            </h4>
            <ul className="space-y-2.5 text-sm text-stone-300">
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About the Platform
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact & Feedback
                </Link>
              </li>
              <li className="pt-2 text-xs text-stone-400 space-y-1">
                <a
                  href="mailto:officaillysuraj.9@gmail.com"
                  className="hover:text-emerald-300 transition-colors block text-emerald-200/90 truncate"
                >
                  officaillysuraj.9@gmail.com
                </a>
                <span className="block text-stone-400">Chandigarh, India</span>
              </li>
              <li className="pt-1">
                <Link to="/privacy" className="hover:text-white transition-colors text-xs text-stone-400">
                  Privacy Policy
                </Link>
                {' • '}
                <Link to="/terms" className="hover:text-white transition-colors text-xs text-stone-400">
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer note */}
        <div className="pt-8 pb-6 border-t border-emerald-900/80 text-xs text-stone-400 leading-relaxed">
          <p>
            <strong>Cost and Seasonal Guidance Notice:</strong> All estimated trip budgets are curated for illustrative planning purposes based on realistic independent traveler norms for standard accommodation, food, local transport, and monument entry. They do not constitute guaranteed commercial package prices or booked quotes. Seasonal weather and route suitability represent general historical patterns. Always check current regional advisories before departure.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-emerald-900/60 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-400 gap-4">
          <p>© {new Date().getFullYear()} VIAJAR Tour Guidance Platform. Designed with care for mindful travelers.</p>
          <div className="flex items-center gap-6">
            <Link to="/about" className="hover:text-stone-200 transition-colors">Methodology</Link>
            <Link to="/privacy" className="hover:text-stone-200 transition-colors">Privacy</Link>
            <Link to="/terms" className="hover:text-stone-200 transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
