import React from 'react';
import { Title } from 'Components/Title/Title';
import { PropTypes } from 'prop-types';
import s from './MovieDetails.module.css';

export const MovieDetails = ({ movie }) => {
  const { title, poster_path, vote_average, overview, genres } = movie;

  return (
    <section className={s.section}>
      <img
        className={s.image}
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt="poster"
      />
      <div className={s.desc}>
        <Title title={title} />
        <p>User score: {vote_average}</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        <ul className={s.genresList}>
          {genres.map(({ id, name }) => (
            <li key={id} className={s.genresItem}>
              {name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

MovieDetails.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      }),
    ),
  }),
};