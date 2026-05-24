import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollManager = () => {
  const location = useLocation();

  useEffect(() => {
    // Check if we passed a hidden 'scrollTo' instruction in the router state
    if (location.state && location.state.scrollTo) {
      setTimeout(() => {
        const element = document.getElementById(location.state.scrollTo);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          
          // Clear the state from browser history so manual page refreshes stay at the top
          window.history.replaceState({}, document.title);
        }
      }, 100);
    } else {
      // Normal navigation: instant snap to top
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
  }, [location.pathname, location.state]);

  return null;
};

export default ScrollManager;