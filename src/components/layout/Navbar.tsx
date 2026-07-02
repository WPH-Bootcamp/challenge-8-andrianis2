import { Film } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className='fixed left-0 right-0 top-0 z-50'>
      <div className='mx-auto flex max-w-7xl items-center justify-between px-6 py-6'>
        <Link
          to='/'
          className='flex items-center gap-2 text-2xl font-bold text-white'
        >
          <Film />
          Movie
        </Link>

        <nav className='flex gap-8 text-white'>
          <NavLink to='/'>Home</NavLink>

          <NavLink to='/favorites'>Favorites</NavLink>
        </nav>
      </div>
    </header>
  );
}
