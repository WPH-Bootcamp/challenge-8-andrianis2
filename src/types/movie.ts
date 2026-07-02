// TODO: Define TypeScript interfaces for Movie data
// Hint: Check TMDB API documentation for the movie object structure
// https://developer.themoviedb.org/reference/movie-details
export interface Genre {
  id: number;
  name: string;
}

export interface Movie {
  // TODO: Add movie properties based on TMDB API response
  // Examples: id, title, overview, poster_path, etc.
  id: number;
  title: string;
  original_title: string;
  overview: string;

  poster_path: string;
  backdrop_path: string;

  release_date: string;

  vote_average: number;
  vote_count: number;

  popularity: number;

  adult: boolean;
  video: boolean;

  original_language: string;

  genre_ids: number[];

  genres?: Genre[];

  runtime?: number;
}

export interface MovieResponse {
  // TODO: Add pagination properties
  // Examples: page, results, total_pages, total_results
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export interface ProductionCompany {
  id: number;
  logo_path: string | null;
  name: string;
  origin_country: string;
}

export interface MovieDetail extends Movie {
  genres: Genre[];
  runtime: number;
  status: string;
  tagline: string;
  homepage: string;

  production_companies: ProductionCompany[];
}

// TODO: Add more types as needed (Genre, Video, etc.)
