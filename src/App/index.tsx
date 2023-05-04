import { FC, useMemo, useState } from 'react';
import ThemeProvider from 'react-bootstrap/ThemeProvider';

import Routers from './routers';

import './index.scss';

const App: FC<{}> = () => {
  const [isLoggedIn, setLoggedIn] = useState(true);

  const contextValue = useMemo(() => {
    return {
      isLoggedIn,
      setLoggedIn,
    };
  }, [isLoggedIn]);

  return (
    <ThemeProvider>
        <Routers isLoggedIn={isLoggedIn} />
    </ThemeProvider>
  );

  /* -------------------------------------------------------------------------- */
  /*                                    fake                                    */
  /* -------------------------------------------------------------------------- */
  // return <PulseSurveyConfigPage />;
};

export default App;
