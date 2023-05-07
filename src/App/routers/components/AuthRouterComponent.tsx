import { FC, Suspense } from 'react';
import { useLocation, useOutlet } from 'react-router-dom';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import AppHeader from 'containers/AppHeader';
import ScrollTopButton from 'components/ScrollTopButton';

import { RoutesType } from '../routers';
import { Spinner } from 'react-bootstrap';

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
              <Suspense
                fallback={
                  <div className="d-flex justify-content-center my-3">
                    <Spinner animation="border" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </Spinner>
                  </div>
                }
              >
                {currentOutlet}
              </Suspense>
            </div>
          )}
        </CSSTransition>
      </SwitchTransition>
      <ScrollTopButton />
    </div>
  );
};

export default AuthRouterComponent;
