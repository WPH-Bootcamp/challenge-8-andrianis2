import { createBrowserRouter } from 'react-router-dom';

import MainLayout from '@/layouts/MainLayout';

import HomePage from '@/pages/HomePage';
import MovieDetailPage from '@/pages/MovieDetailPage';
//import FavoritesPage from '@/pages/FavoritesPage';
import NotFound from '@/pages/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'movie/:id',
        element: <MovieDetailPage />,
      },
      //{
      //path: 'favorites',
      //element: <FavoritesPage />,
      // },
    ],
  },
]);
