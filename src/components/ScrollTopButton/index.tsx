import classNames from 'classnames';
import { useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import './index.scss';

const scrollTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

const ScrollTopButton = () => {
  const [visible, setVisible] = useState(false);

  const location = useLocation();

  useEffect(() => {
    scrollTop();
  }, [location.pathname]);

  useEffect(() => {
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 300) {
        setVisible(true);
      } else if (scrolled <= 300) {
        setVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisible);
    return () => {
      window.removeEventListener('scroll', toggleVisible);
    };
  }, []);

  const scrollToTop = useCallback(() => {
    scrollTop();
  }, []);

  return (
    <button onClick={scrollToTop} className={classNames('scroll-top-button', { show: visible })}>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="10" viewBox="0 0 16 10">
        <path
          d="M14.5852 9.04198L8.00017 2.65788L1.41513 9.04198L0.53894 8.19253L8.00018 0.958984L15.4614 8.19253L14.5852 9.04198Z"
          fill="currentColor"
        />
      </svg>
    </button>
  );
};

export default ScrollTopButton;
