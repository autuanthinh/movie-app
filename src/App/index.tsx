import { FC, useState } from 'react';
import ThemeProvider from 'react-bootstrap/ThemeProvider';
import { SkeletonTheme } from 'react-loading-skeleton';

import Routers from './routers';

import './index.scss';

const App: FC<{}> = () => {
  const [isLoggedIn] = useState(true);

  return (
    <ThemeProvider>
      <SkeletonTheme baseColor="#202020" highlightColor="#444">
        <Routers isLoggedIn={isLoggedIn} />
      </SkeletonTheme>
    </ThemeProvider>
  );
};

export default App;
