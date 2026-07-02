const IMAGE_BASE_URL = import.meta.env.VITE_IMAGE_URL;

/**
 * Poster ukuran kecil
 */
export const getPosterUrl = (path: string | null) => {
  if (!path) return '/placeholder.png';
  return `${IMAGE_BASE_URL}/w500${path}`;
};

/**
 * Backdrop ukuran besar
 */
export const getBackdropUrl = (path: string | null) => {
  if (!path) return '/placeholder-backdrop.jpg';
  return `${IMAGE_BASE_URL}/original${path}`;
};

/**
 * Profile actor
 */
export const getProfileUrl = (path: string | null) => {
  if (!path) return '/placeholder-profile.png';
  return `${IMAGE_BASE_URL}/w300${path}`;
};
