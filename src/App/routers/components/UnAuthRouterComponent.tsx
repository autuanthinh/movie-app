import { FC, Suspense } from 'react';
import { useLocation, useOutlet } from 'react-router-dom';

import { CSSTransition, SwitchTransition } from 'react-transition-group';
import Loading from 'components/Loading';

import { RoutesType } from '../routers';

const UnAuthRouterComponent: FC<{
  routes: RoutesType;
}> = ({ routes }) => {
  const location = useLocation();
  const currentOutlet = useOutlet();
  const { nodeRef } = routes.find(route => route.path === location.pathname) ?? {};

  return (
    <div className="pages pages--unauth">
      <SwitchTransition>
        <CSSTransition key={location.pathname} nodeRef={nodeRef} timeout={300} classNames="page" unmountOnExit>
          {() => (
            <div ref={nodeRef as any} className="page">
              <Suspense fallback={<Loading />}>{currentOutlet}</Suspense>
            </div>
          )}
        </CSSTransition>
      </SwitchTransition>
    </div>
  );
};

export default UnAuthRouterComponent;
