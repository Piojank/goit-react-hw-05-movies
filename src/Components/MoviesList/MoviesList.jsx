import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import s from './MoviesList.module.css';

export const MoviesList = ({ movies }) => {
  return (
    <section className={s.section}>
      <ul className={s.list}>
        {movies.map(({ title, id }) => (
          <li key={id} className={s.item}>
            <Link className={s.link} to={`/movies/${id}`}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ),
};
