import React from 'react';
import { Navigation } from 'Components/Navigation/Navigation';
import moreInfoRoutes from '../../routes/moreInfoRoutes';
import { Route, Routes, useParams } from 'react-router-dom';

export const MoreInfo = () => {
  const { movieId } = useParams();

  return (
    <>
      <Navigation
        routes={moreInfoRoutes.map(({ path, name }) => ({
          path: `/movies/${movieId}/${path}`,
          name,
        }))}
      />

      <Routes>
        {moreInfoRoutes.map(({ path, component: Element }) => (
          <Route key={path} path={path} element={<Element />} />
        ))}
      </Routes>
    </>
  );
};

