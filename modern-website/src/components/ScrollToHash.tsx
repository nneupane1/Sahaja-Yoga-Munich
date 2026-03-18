import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Scrolls to the current hash target after route changes.
 */
const ScrollToHash = () => {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash.replace('#', '');

    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.getElementById(hash);

    if (element) {
      window.requestAnimationFrame(() => {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    }
  }, [location.pathname, location.hash]);

  return null;
};

export default ScrollToHash;
