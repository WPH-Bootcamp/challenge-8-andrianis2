import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

import type { Movie } from '@/types/movie';
import { getPosterUrl } from '@/utils/image';

interface Props {
  movie: Movie;
}

export default function MovieCard({ movie }: Props) {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
      }}
      transition={{
        duration: 0.25,
      }}
    >
      <Link to={`/movie/${movie.id}`}>
        <div className='overflow-hidden rounded-xl'>
          <img
            src={getPosterUrl(movie.poster_path)}
            alt={movie.title}
            className='h-[330px] w-full object-cover'
          />
        </div>

        <h3 className='mt-3 font-semibold line-clamp-1'>{movie.title}</h3>

        <div className='mt-1 flex items-center gap-1 text-sm text-yellow-400'>
          <Star size={14} fill='currentColor' />

          {movie.vote_average.toFixed(1)}
        </div>
      </Link>
    </motion.div>
  );
}
