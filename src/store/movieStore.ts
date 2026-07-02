import { create } from 'zustand';
// import { Movie } from '@/types/movie';

// TODO: Define your store state interface
interface MovieStore {
  // TODO: Add state properties
  // Examples: favorites, watchlist, selectedMovie, etc.

  // TODO: Add action methods
  // Examples: addToFavorites, removeFromFavorites, etc.

  searchQuery: string;
  selectedGenre: number | null;

  setSearchQuery: (query: string) => void;
  setSelectedGenre: (genreId: number | null) => void;
  clearFilter: () => void;
}

// TODO: Create Zustand store
// Reference: https://zustand.docs.pmnd.rs/getting-started/introduction

export const useMovieStore = create<MovieStore>((set) => ({
  // TODO: Initialize state and implement actions
  searchQuery: '',
  selectedGenre: null,

  setSearchQuery: (query) => set({ searchQuery: query }),

  setSelectedGenre: (genreId) => set({ selectedGenre: genreId }),

  clearFilter: () =>
    set({
      searchQuery: '',
      selectedGenre: null,
    }),
}));
