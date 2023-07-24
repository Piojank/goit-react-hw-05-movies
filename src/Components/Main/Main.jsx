import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import mainRoutes from '../../routes/mainRoutes';
import moviesRoutes from '../../routes/moviesRoutes';
import NotFoundView from '../../views/NotFoundView';
import s from './Main.module.css';
import { Loader } from 'Components/Loader/Loader';

export const Main = () => {
  return (
    <main className={s.main}>
      <Suspense fallback={<Loader />}>
        <Routes>
          {mainRoutes.map(({ path, component: Element }) => (
            <Route key={path} path={path} element={<Element />} />
          ))}
          {moviesRoutes.map(({ path, component: Element }) => (
            <Route key={path} path={path} element={<Element />} />
          ))}
          <Route path="*" element={<NotFoundView />} />
        </Routes>
      </Suspense>
    </main>
  );
};