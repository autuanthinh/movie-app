import { createRef, lazy } from 'react';

const Home = lazy(() => import('pages/Home'));
const Search = lazy(() => import('pages/Search'));
const Movie = lazy(() => import('pages/Movie'));

type RefElement = undefined | HTMLDivElement;

export function createRoutes(isAuth: boolean) {
  return [
    { path: '/', name: 'home', element: <Home />, nodeRef: createRef<RefElement>() },
    { path: '/search', name: 'search', element: <Search />, nodeRef: createRef<RefElement>() },
    {
      path: '/movie',
      name: 'movie',
      element: <Movie />,
      nodeRef: createRef<RefElement>(),
    },
  ];
}

export type RoutesType = ReturnType<typeof createRoutes>;
