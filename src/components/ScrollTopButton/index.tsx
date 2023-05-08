import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ScrollToTop from 'react-scroll-to-top';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const scrollTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

const ScrollTopButton = () => {
  const location = useLocation();

  useEffect(() => {
    // auto scroll top when change route
    scrollTop();
  }, [location.pathname]);

  return <ScrollToTop smooth component={<FontAwesomeIcon icon={['fas', 'chevron-up']} />} />;
};

export default ScrollTopButton;
