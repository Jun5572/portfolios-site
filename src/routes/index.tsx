import type { RouteObject } from 'react-router-dom';
import { Layout } from 'src/components/Layout/Layout';
import { NotFound } from 'src/pages/Errors/404';
import { Home } from 'src/pages/Home';
import { Home2 } from 'src/pages/Home2';

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
        element: <Home2 />
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />
  }
];