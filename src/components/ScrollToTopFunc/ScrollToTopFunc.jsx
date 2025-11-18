import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';


const ScrollToTopFunc = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    const lenis = window.lenis;
    const timer = setTimeout(() => lenis ? lenis.scrollTo(0, { immediate: true }) : window.scrollTo(0, 0), 50);
    return () => clearTimeout(timer);
  }, [pathname]);
  return null;
};

export default ScrollToTopFunc;
