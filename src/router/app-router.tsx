import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { publicRoutes } from './routes';

export const AppRouter = () => (
  <Routes>
    {publicRoutes.map(({ path, component: Component, title }) => (
      <Route key={path} path={path} element={<Component title={title} />} handle={{ crumb: 'some crumb' }} />
    ))}
  </Routes>
);
