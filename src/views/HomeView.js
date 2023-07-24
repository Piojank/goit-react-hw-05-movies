import React, { useContext, useEffect } from 'react';
import { QueryContext } from '../Components/App';
import { Title } from 'Components/Title/Title';
import { Trending } from 'Components/Trending/Trending';

const HomeView = () => {
  const { setQuery } = useContext(QueryContext);

  useEffect(() => {
    setQuery('');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Title title="Trending today" />
      <Trending />
    </>
  );
};

export default HomeView;
