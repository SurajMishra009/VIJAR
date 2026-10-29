import React, { createContext, useContext, useState, useEffect } from 'react';
import { DESTINATIONS } from '../data/destinations';
import { Destination } from '../types/destination';

interface FavoritesContextType {
  favoriteSlugs: string[];
  favoritesCount: number;
  favoriteDestinations: Destination[];
  isFavorite: (slug: string) => boolean;
  toggleFavorite: (slug: string) => void;
  removeFavorite: (slug: string) => void;
  clearAllFavorites: () => void;
  toastMessage: string | null;
  clearToast: () => void;
}

const STORAGE_KEY = 'wanderly_saved_favorites_v1';

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export const FavoritesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [favoriteSlugs, setFavoriteSlugs] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) return parsed;
      }
    } catch {
      // ignore JSON errors
    }
    // Seed with a default favorite for immediate delight if empty
    return ['manali', 'goa'];
  });

  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(favoriteSlugs));
    } catch {
      // Storage unavailable or full
    }
  }, [favoriteSlugs]);

  const showNotification = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((prev) => (prev === msg ? null : prev));
    }, 3200);
  };

  const isFavorite = (slug: string) => favoriteSlugs.includes(slug);

  const toggleFavorite = (slug: string) => {
    const dest = DESTINATIONS.find((d) => d.slug === slug);
    const destName = dest ? dest.name : 'Destination';

    setFavoriteSlugs((prev) => {
      if (prev.includes(slug)) {
        showNotification(`Removed "${destName}" from saved trips`);
        return prev.filter((s) => s !== slug);
      } else {
        showNotification(`Saved "${destName}" to your wishlist`);
        return [...prev, slug];
      }
    });
  };

  const removeFavorite = (slug: string) => {
    const dest = DESTINATIONS.find((d) => d.slug === slug);
    setFavoriteSlugs((prev) => prev.filter((s) => s !== slug));
    showNotification(`Removed "${dest ? dest.name : slug}" from saved trips`);
  };

  const clearAllFavorites = () => {
    setFavoriteSlugs([]);
    showNotification('Cleared all saved trips');
  };

  const clearToast = () => setToastMessage(null);

  const favoriteDestinations = DESTINATIONS.filter((d) => favoriteSlugs.includes(d.slug));

  return (
    <FavoritesContext.Provider
      value={{
        favoriteSlugs,
        favoritesCount: favoriteSlugs.length,
        favoriteDestinations,
        isFavorite,
        toggleFavorite,
        removeFavorite,
        clearAllFavorites,
        toastMessage,
        clearToast,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = (): FavoritesContextType => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
};
