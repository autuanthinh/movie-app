import { FC, Suspense } from 'react';
import { useLocation, useOutlet } from 'react-router-dom';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import AppHeader from 'containers/AppHeader';
import AppFooter from 'containers/AppFooter';
import ScrollTopButton from 'components/ScrollTopButton';

import { RoutesType } from '../routers';

const AuthRouterComponent: FC<{
  routes: RoutesType;
}> = ({ routes }) => {
  const location = useLocation();
  const currentOutlet = useOutlet();
  const { nodeRef } = routes.find(route => route.path === location.pathname) ?? {};

  return (
    <div className="pages pages--auth">
      <AppHeader />
      <SwitchTransition>
        <CSSTransition key={location.pathname} nodeRef={nodeRef} timeout={300} classNames="page" unmountOnExit>
          {() => (
            <div ref={nodeRef as any} className="page page--auth">
              <Suspense fallback={<>loading...</>}>{currentOutlet}</Suspense>
            </div>
          )}
        </CSSTransition>
      </SwitchTransition>
      <AppFooter />
      <ScrollTopButton />
    </div>
  );
};

export default AuthRouterComponent;
