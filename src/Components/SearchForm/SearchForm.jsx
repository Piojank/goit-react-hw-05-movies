import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import s from './SearchForm.module.css';
import { Notify } from 'notiflix';

export const SearchForm = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const onChange = ({ target }) => setQuery(target.value);

  const handleSubmit = e => {
    e.preventDefault();
    if (!query) {
      Notify.failure('Empty query');
      return;
    }
    onSubmit(query);
    setQuery('');
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <input className={s.input} type="text" value={query} onChange={onChange} />
      <button className={s.button} type="submit">
        Search
      </button>
    </form>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};