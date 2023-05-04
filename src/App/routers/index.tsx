import { FC, PropsWithChildren, useMemo } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { createRoutes } from './routers';

import AuthRouterComponent from './components/AuthRouterComponent';
import UnAuthRouterComponent from './components/UnAuthRouterComponent';

interface RouterProps extends PropsWithChildren<any> {
  isLoggedIn: boolean;
}

const Router: FC<RouterProps> = ({ isLoggedIn }) => {
  // Create routes
  const routes = useMemo(() => {
    return createRoutes(isLoggedIn);
  }, [isLoggedIn]);

  // Create browser router
  const router = useMemo(() => {
    return createBrowserRouter([
      {
        path: '/',
        element: isLoggedIn ? <AuthRouterComponent routes={routes} /> : <UnAuthRouterComponent routes={routes} />,
        children: routes.map(route => ({
          index: route.path === '/',
          path: route.path === '/' ? undefined : route.path,
          element: route.element,
        })),
      },
    ]);
  }, [isLoggedIn, routes]);

  return (
      <RouterProvider router={router} />
  );
};

export default Router;
