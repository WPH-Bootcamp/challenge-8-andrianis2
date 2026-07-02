import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import { movieService } from '@/services/movieService';
import { getBackdropUrl, getPosterUrl } from '@/utils/image';

export default function MovieDetailPage() {
  const { id } = useParams();

  const {
    data: movie,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['movie', id],
    queryFn: () => movieService.getMovieDetails(Number(id)),
    enabled: !!id,
  });

  if (isLoading) {
    return <div className='p-10 text-white'>Loading...</div>;
  }

  if (isError || !movie) {
    return <div className='p-10 text-red-500'>Movie not found.</div>;
  }

  return (
    <div className='min-h-screen bg-black text-white'>
      <div
        className='h-[400px] bg-cover bg-center'
        style={{
          backgroundImage: `url(${getBackdropUrl(movie.backdrop_path)})`,
        }}
      />

      <div className='mx-auto flex max-w-6xl gap-8 p-8'>
        <img
          src={getPosterUrl(movie.poster_path)}
          alt={movie.title}
          className='w-72 rounded-lg'
        />

        <div>
          <h1 className='mb-4 text-4xl font-bold'>{movie.title}</h1>

          {movie.tagline && (
            <p className='mb-4 italic text-gray-400'>{movie.tagline}</p>
          )}

          <p className='mb-6'>{movie.overview}</p>

          <p>
            <strong>Release Date:</strong> {movie.release_date}
          </p>

          <p>
            <strong>Runtime:</strong> {movie.runtime} minutes
          </p>

          <p>
            <strong>Rating:</strong> ⭐ {movie.vote_average}
          </p>

          <div className='mt-4 flex flex-wrap gap-2'>
            {movie.genres.map((genre) => (
              <span
                key={genre.id}
                className='rounded bg-red-600 px-3 py-1 text-sm'
              >
                {genre.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
