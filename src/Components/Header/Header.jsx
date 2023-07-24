import React from 'react';
import { Navigation } from 'Components/Navigation/Navigation';
import mainRoutes from '../../routes/mainRoutes';

export const Header = () => {
  return (
    <header>
      <Navigation routes={mainRoutes} />
    </header>
  );
};
