import React, { useState, useRef, useEffect, useId } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, MapPin, Compass, ArrowRight, X, Sparkles } from 'lucide-react';
import { DESTINATIONS } from '../../data/destinations';
import { getSearchSuggestions, SearchSuggestion } from '../../utils/filterLogic';

interface SearchAutocompleteProps {
  value?: string;
  onChange?: (val: string) => void;
  onSelectDestination?: (slug: string) => void;
  onSelectCategory?: (categoryKey: string) => void;
  onSubmit?: (query: string) => void;
  placeholder?: string;
  variant?: 'navbar' | 'explore' | 'hero';
  inputClassName?: string;
  containerClassName?: string;
  ariaLabel?: string;
}

export const SearchAutocomplete: React.FC<SearchAutocompleteProps> = ({
  value = '',
  onChange,
  onSelectDestination,
  onSelectCategory,
  onSubmit,
  placeholder = 'Search destinations, states, or travel styles...',
  variant = 'explore',
  inputClassName = '',
  containerClassName = '',
  ariaLabel = 'Search destinations',
}) => {
  const [internalQuery, setInternalQuery] = useState(value);
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState<number>(-1);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const listboxId = useId();

  // Keep internal query synchronized with external value
  useEffect(() => {
    setInternalQuery(value);
  }, [value]);

  const suggestions: SearchSuggestion[] = getSearchSuggestions(internalQuery, DESTINATIONS, 6);

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
        setHighlightedIndex(-1);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setInternalQuery(val);
    setIsOpen(true);
    setHighlightedIndex(-1);
    if (onChange) {
      onChange(val);
    }
  };

  const handleSelectSuggestion = (suggestion: SearchSuggestion) => {
    setIsOpen(false);
    setHighlightedIndex(-1);

    if (suggestion.type === 'destination' && suggestion.slug) {
      if (onSelectDestination) {
        onSelectDestination(suggestion.slug);
      } else {
        navigate(`/destinations/${suggestion.slug}`);
      }
    } else if (suggestion.type === 'category' && suggestion.categoryKey) {
      if (onSelectCategory) {
        onSelectCategory(suggestion.categoryKey);
      } else {
        navigate(`/explore?category=${suggestion.categoryKey}`);
      }
    } else {
      const q = suggestion.title;
      setInternalQuery(q);
      if (onChange) onChange(q);
      if (onSubmit) onSubmit(q);
      else navigate(`/explore?q=${encodeURIComponent(q)}`);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!isOpen && (e.key === 'ArrowDown' || e.key === 'ArrowUp')) {
      setIsOpen(true);
      return;
    }

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setHighlightedIndex((prev) => (prev < suggestions.length - 1 ? prev + 1 : 0));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setHighlightedIndex((prev) => (prev > 0 ? prev - 1 : suggestions.length - 1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (highlightedIndex >= 0 && highlightedIndex < suggestions.length) {
        handleSelectSuggestion(suggestions[highlightedIndex]);
      } else if (onSubmit) {
        setIsOpen(false);
        onSubmit(internalQuery);
      } else if (internalQuery.trim()) {
        setIsOpen(false);
        navigate(`/explore?q=${encodeURIComponent(internalQuery.trim())}`);
      }
    } else if (e.key === 'Escape') {
      setIsOpen(false);
      setHighlightedIndex(-1);
    }
  };

  const handleClear = () => {
    setInternalQuery('');
    if (onChange) onChange('');
    setIsOpen(true);
    inputRef.current?.focus();
  };

  const isNavbar = variant === 'navbar';

  return (
    <div ref={containerRef} className={`relative ${containerClassName}`}>
      {/* Input Field */}
      <div className="relative flex items-center">
        <Search
          className={`absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none ${
            isNavbar ? 'w-3.5 h-3.5 text-stone-400' : 'w-4 h-4 text-stone-400'
          }`}
        />
        <input
          ref={inputRef}
          type="text"
          value={internalQuery}
          onChange={handleInputChange}
          onFocus={() => setIsOpen(true)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          aria-label={ariaLabel}
          aria-autocomplete="list"
          aria-expanded={isOpen}
          aria-controls={listboxId}
          aria-activedescendant={
            highlightedIndex >= 0 ? `${listboxId}-option-${highlightedIndex}` : undefined
          }
          className={`w-full pl-9 pr-9 py-2.5 text-stone-900 rounded-xl transition-all focus:outline-none focus:ring-2 focus:ring-[#133E33] focus:border-transparent ${
            isNavbar
              ? 'text-xs bg-stone-100/80 hover:bg-stone-100 focus:bg-white border border-stone-200/80'
              : 'text-sm bg-white border border-stone-200/90 shadow-2xs'
          } ${inputClassName}`}
        />
        {internalQuery && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-stone-400 hover:text-stone-600 rounded-md focus:outline-none"
            aria-label="Clear search input"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      {/* Autocomplete Suggestions Dropdown */}
      {isOpen && (
        <div
          id={listboxId}
          role="listbox"
          className={`absolute left-0 right-0 top-full mt-2 bg-white rounded-2xl shadow-xl border border-stone-200/90 py-2 z-50 overflow-hidden animate-in fade-in-0 slide-in-from-top-1 duration-150 ${
            isNavbar ? 'min-w-[300px] sm:min-w-[340px]' : ''
          }`}
        >
          {/* Header label */}
          <div className="px-3.5 py-1.5 flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-stone-400 border-b border-stone-100 mb-1">
            <span>
              {internalQuery.trim() ? 'Matching Suggestions' : 'Popular Suggestions'}
            </span>
            <span className="text-[10px] lowercase font-normal text-stone-400">
              Use ↑↓ to navigate
            </span>
          </div>

          {/* Suggestions List */}
          {suggestions.length > 0 ? (
            <div className="max-h-[340px] overflow-y-auto divide-y divide-stone-50">
              {suggestions.map((item, index) => {
                const isHighlighted = highlightedIndex === index;
                return (
                  <div
                    key={item.id}
                    id={`${listboxId}-option-${index}`}
                    role="option"
                    aria-selected={isHighlighted}
                    onMouseEnter={() => setHighlightedIndex(index)}
                    onClick={() => handleSelectSuggestion(item)}
                    className={`flex items-center gap-3 px-3.5 py-2.5 cursor-pointer transition-colors ${
                      isHighlighted
                        ? 'bg-emerald-50/70 text-[#133E33]'
                        : 'hover:bg-stone-50 text-stone-800'
                    }`}
                  >
                    {/* Thumbnail or Category Icon */}
                    {item.type === 'destination' && item.image ? (
                      <div className="w-10 h-10 rounded-lg overflow-hidden bg-stone-100 shrink-0 border border-stone-200/60">
                        <img
                          src={item.image}
                          alt=""
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    ) : item.type === 'category' ? (
                      <div className="w-10 h-10 rounded-lg bg-emerald-100 text-[#133E33] flex items-center justify-center shrink-0">
                        <Compass className="w-4 h-4 text-emerald-800" />
                      </div>
                    ) : (
                      <div className="w-10 h-10 rounded-lg bg-stone-100 text-stone-600 flex items-center justify-center shrink-0">
                        <MapPin className="w-4 h-4" />
                      </div>
                    )}

                    {/* Text Details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-xs sm:text-sm text-stone-900 truncate">
                          {item.title}
                        </span>
                        <span
                          className={`text-[9px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded ${
                            item.type === 'destination'
                              ? 'bg-stone-100 text-stone-600'
                              : 'bg-emerald-100 text-emerald-800'
                          }`}
                        >
                          {item.type}
                        </span>
                      </div>
                      <p className="text-[11px] text-stone-500 truncate leading-snug">
                        {item.subtitle}
                      </p>
                    </div>

                    <ArrowRight className="w-3.5 h-3.5 text-stone-400 shrink-0 opacity-70" />
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="px-4 py-6 text-center text-xs text-stone-500">
              No matching destinations found for &ldquo;{internalQuery}&rdquo;.
            </div>
          )}

          {/* Bottom view all search trigger if query present */}
          {internalQuery.trim() && (
            <div className="px-3.5 pt-2 pb-1 border-t border-stone-100 bg-stone-50/50">
              <button
                type="button"
                onClick={() => {
                  setIsOpen(false);
                  if (onSubmit) onSubmit(internalQuery);
                  else navigate(`/explore?q=${encodeURIComponent(internalQuery.trim())}`);
                }}
                className="w-full text-left flex items-center justify-between text-xs font-semibold text-[#133E33] hover:underline py-1"
              >
                <span>
                  Search all destinations for &ldquo;<strong>{internalQuery}</strong>&rdquo;
                </span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
