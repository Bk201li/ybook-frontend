import { lazy } from 'react';
import IRoute from "../types/routes.type";

const Home = lazy(() => import('../pages/home'));
const Friends = lazy(() => import('../pages/friends'));
const Messages = lazy(() => import('../pages/messages'));

const routesList: IRoute[] = [
  {
    path: '/',
    element: Home,
  },
  {
    path: '/friends',
    element: Friends,
  },
  {
    path: '/messages',
    element: Messages,
  }
]

export default routesList;
