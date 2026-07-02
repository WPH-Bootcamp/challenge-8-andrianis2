import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center bg-black text-white'>
      <h1 className='text-7xl font-bold text-red-500'>404</h1>

      <h2 className='mt-4 text-2xl font-semibold'>Page Not Found</h2>

      <p className='mt-2 text-gray-400'>
        Sorry, the page you are looking for does not exist.
      </p>

      <Link
        to='/'
        className='mt-8 rounded-lg bg-red-600 px-6 py-3 hover:bg-red-700'
      >
        Back to Home
      </Link>
    </div>
  );
}
