import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';

import HeroSection from '@/components/home/HeroSection';
import MovieCard from '@/components/feature/MovieCard';

import { usePopularMovies } from '@/hooks/useMovies';
import { useNowPlayingMovies } from '@/hooks/useMovies';

export default function HomePage() {
  const {
    data: popularMovies,
    isLoading: loadingPopular,
    isError: errorPopular,
  } = usePopularMovies();

  const {
    data: nowPlayingMovies,
    isLoading: loadingNowPlaying,
    isError: errorNowPlaying,
  } = useNowPlayingMovies();

  if (loadingPopular || loadingNowPlaying) {
    return (
      <div className='flex min-h-screen items-center justify-center bg-black'>
        <Loader2 className='h-10 w-10 animate-spin text-red-500' />
      </div>
    );
  }

  if (errorPopular || errorNowPlaying) {
    return (
      <div className='flex min-h-screen items-center justify-center bg-black text-white'>
        Failed to load movies.
      </div>
    );
  }

  return (
    <main className='bg-black text-white'>
      {/* Hero */}
      {nowPlayingMovies?.results?.[0] && (
        <HeroSection movie={nowPlayingMovies.results[0]} />
      )}

      {/* Trending */}
      <section className='mx-auto max-w-7xl px-6 py-12'>
        <h2 className='mb-8 text-3xl font-bold'>Trending Now</h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className='grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'
        >
          {popularMovies?.results.slice(0, 10).map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </motion.div>
      </section>

      {/* New Release */}
      <section className='mx-auto max-w-7xl px-6 pb-20'>
        <h2 className='mb-8 text-3xl font-bold'>New Release</h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className='grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'
        >
          {nowPlayingMovies?.results.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </motion.div>
      </section>
    </main>
  );
}
