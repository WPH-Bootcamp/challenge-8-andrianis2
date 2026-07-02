import { useQuery } from '@tanstack/react-query';
import { movieService } from '@/services/movieService';

// TODO: Create custom hooks using React Query
// Reference: https://tanstack.com/query/latest/docs/framework/react/overview

// Example: Hook to fetch popular movies
export const usePopularMovies = () => {
  // TODO: Implement useQuery hook
  // Hint: Use movieService.getPopularMovies as queryFn
  return useQuery({
    queryKey: ['movies', 'popular'],
    queryFn: () => {
      // TODO: Call your movie service function
      movieService.getPopularMovies();
      throw new Error('Not implemented');
    },
  });
};

// TODO: Add more hooks for different endpoints
// Examples: useMovieDetails, useSearchMovies, useNowPlayingMovies

export const useMovieDetails = () => {
  return useQuery({
    queryKey: ['Movie Details'],
    queryFn: () => movieService.getMovieDetails(),
  });
};

export const useSearchMovies = () => {
  return useQuery({
    queryKey: ['Search Movies'],
    queryFn: () => movieService.getSearchMovies(),
  });
};

export const useNowPlayingMovies = () => {
  return useQuery({
    queryKey: ['now Playing Movies'],
    queryFn: () => movieService.getNowPlayingMovies(),
  });
};
