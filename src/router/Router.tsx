import React, { lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import routesList from './routesList';
import { useAtom } from 'jotai';
import { userLoggedIn } from '../store/atoms/userInfos';
const Sign = lazy(() => import('../pages/sign'));
const Menu = lazy(() => import('../components/menu/Menu'));
const Navbar = lazy(() => import('../components/navbar/Navbar'));

const Router: React.FC = () => {
  const [loggedIn] = useAtom(userLoggedIn);

  return (
    <BrowserRouter>
      {loggedIn ? (
        <>
          <Menu />
          <Routes>
            {routesList.map((route) => (
              <Route path={route.path} element={<route.element />} key={`key_${route.path}`} />
            ))}
          </Routes>
          <Navbar />
        </>
      ) : (
        <Sign />
      )}
    </BrowserRouter>
  );
};

export default Router;
