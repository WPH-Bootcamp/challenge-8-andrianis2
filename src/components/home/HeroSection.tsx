import { Link } from 'react-router-dom';
import { PlayCircle } from 'lucide-react';

//import { Movie } from '@/types/movie';
import type { Movie } from '@/types/movie';
import { getBackdropUrl } from '@/utils/image';

interface Props {
  movie: Movie;
}

export default function HeroSection({ movie }: Props) {
  return (
    <section
      className='relative h-screen bg-cover bg-center'
      style={{
        backgroundImage: `url(${getBackdropUrl(movie.backdrop_path)})`,
      }}
    >
      <div className='absolute inset-0 bg-black/60' />

      <div className='relative mx-auto flex h-full max-w-7xl items-center px-6'>
        <div className='max-w-xl'>
          <h1 className='mb-6 text-6xl font-bold'>{movie.title}</h1>

          <p className='mb-8 text-gray-300'>{movie.overview}</p>

          <div className='flex gap-4'>
            <button className='flex items-center gap-2 rounded-full bg-red-600 px-7 py-3 font-semibold hover:bg-red-700'>
              <PlayCircle />
              Watch Trailer
            </button>

            <Link
              to={`/movie/${movie.id}`}
              className='rounded-full border border-white px-7 py-3 hover:bg-white hover:text-black transition'
            >
              See Detail
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
