import api from '@/lib/axios';
import type { Movie, MovieResponse } from '@/types/movie';

export const movieService = {
  // GET /movie/popular
  async getPopularMovies(page = 1): Promise<MovieResponse> {
    const response = await api.get<MovieResponse>('/movie/popular', {
      params: { page },
    });

    return response.data;
  },

  // GET /movie/now_playing
  async getNowPlayingMovies(page = 1): Promise<MovieResponse> {
    const response = await api.get<MovieResponse>('/movie/now_playing', {
      params: { page },
    });

    return response.data;
  },

  // GET /movie/{movie_id}
  async getMovieDetails(movieId: number): Promise<Movie> {
    const response = await api.get<Movie>(`/movie/${movieId}`);

    return response.data;
  },

  // GET /search/movie
  async searchMovies(query: string, page = 1): Promise<MovieResponse> {
    const response = await api.get<MovieResponse>('/search/movie', {
      params: {
        query,
        page,
      },
    });

    return response.data;
  },
};
