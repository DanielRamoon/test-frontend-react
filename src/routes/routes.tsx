import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../pages/Home';
import CityList from '../pages/CityList';
import NotFound from '../pages/NotFound';
import { GlobalStyles } from '../styles/GlobalStyles';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/city',
    element: <CityList />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

const AppRoutes: React.FC = () => (
  <>
    <GlobalStyles />
    <RouterProvider router={router} />
  </>
);

export default AppRoutes;
