import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Compass, Heart, Menu, X, ArrowUpRight } from 'lucide-react';
import { useFavorites } from '../../context/FavoritesContext';
import { SearchAutocomplete } from '../search/SearchAutocomplete';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { favoritesCount } = useFavorites();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Explore', path: '/explore' },
    { label: 'Categories', path: '/#travel-styles' },
    { label: 'Seasonal', path: '/#seasonal' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path.startsWith('/#')) {
      return location.pathname === '/' && location.hash === path.substring(1);
    }
    return location.pathname === path;
  };

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-200 ${
        isScrolled
          ? 'bg-[#FBFBF9]/95 backdrop-blur-md shadow-sm border-b border-stone-200/60 py-3.5'
          : 'bg-[#FBFBF9] border-b border-stone-200/40 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <Link
            to="/"
            className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#133E33] rounded-lg p-1 shrink-0"
            aria-label="VIAJAR Home"
          >
            <div className="w-10 h-10 rounded-xl bg-[#133E33] flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform duration-200">
              <Compass className="w-5 h-5 text-emerald-300" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif-title text-xl font-bold tracking-tight text-stone-900 leading-tight">
                VIAJAR
              </span>
              <span className="text-[10px] uppercase tracking-wider text-stone-500 font-medium">
                Travel Freely
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  isActive(link.path)
                    ? 'text-[#133E33] bg-emerald-900/5 font-semibold'
                    : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Search Autocomplete in Navbar (Desktop) */}
          <div className="hidden sm:block flex-1 max-w-xs lg:max-w-sm">
            <SearchAutocomplete
              variant="navbar"
              placeholder="Quick search..."
              ariaLabel="Quick search destinations"
              onSubmit={(q) => navigate(`/explore?q=${encodeURIComponent(q.trim())}`)}
            />
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2.5 shrink-0">
            {/* Wishlist / Saved Trips */}
            <Link
              to="/saved"
              className="relative p-2.5 rounded-xl border border-stone-200 bg-white hover:bg-stone-50 hover:border-stone-300 text-stone-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#133E33]"
              aria-label={`Saved Trips: ${favoritesCount} destinations saved`}
              title="View your saved destinations"
            >
              <Heart
                className={`w-4 h-4 ${
                  favoritesCount > 0 ? 'text-rose-500 fill-rose-500' : 'text-stone-600'
                }`}
              />
              {favoritesCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 min-w-[18px] h-[18px] px-1 bg-[#133E33] text-white text-[10px] font-bold rounded-full flex items-center justify-center shadow-xs">
                  {favoritesCount}
                </span>
              )}
            </Link>

            {/* Explore Button */}
            <Link
              to="/explore"
              className="hidden md:inline-flex items-center gap-1.5 px-3.5 py-2.5 bg-[#133E33] text-white text-xs font-semibold rounded-xl hover:bg-[#0c2821] active:scale-98 transition-all shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#133E33] focus-visible:ring-offset-2"
            >
              <span>Explore</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-emerald-300" />
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl border border-stone-200 bg-white text-stone-700 hover:bg-stone-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#133E33]"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden pt-4 pb-3 border-t border-stone-200/80 mt-3 animate-in fade-in slide-in-from-top-2 duration-150 space-y-3">
            {/* Quick Search on Mobile */}
            <div className="px-1">
              <SearchAutocomplete
                variant="navbar"
                placeholder="Search destinations, styles..."
                ariaLabel="Search destinations in mobile menu"
                onSubmit={(q) => {
                  setMobileMenuOpen(false);
                  navigate(`/explore?q=${encodeURIComponent(q.trim())}`);
                }}
                onSelectDestination={(slug) => {
                  setMobileMenuOpen(false);
                  navigate(`/destinations/${slug}`);
                }}
              />
            </div>

            <div className="space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${
                    isActive(link.path)
                      ? 'text-[#133E33] bg-emerald-900/10 font-semibold'
                      : 'text-stone-700 hover:text-stone-900 hover:bg-stone-100'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-2">
                <Link
                  to="/explore"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-[#133E33] text-white font-medium rounded-xl text-sm"
                >
                  <span>Explore All Destinations</span>
                  <ArrowUpRight className="w-4 h-4 text-emerald-300" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
