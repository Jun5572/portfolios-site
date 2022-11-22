import type { RouteObject } from 'react-router-dom';
import { Layout } from 'src/components/Layout';
import { Error404Page } from 'src/pages/Errors/Error404Page';
import { Home } from 'src/pages/Home';
import { Transition } from 'src/pages/ReactTransitionGroup';

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout displayStyle='block' />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/react-router-transition",
        element: <Transition />
      },
    ],
  },
  {
    path: "*",
    element: <Error404Page />
  }
];