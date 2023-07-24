import { PropTypes } from 'prop-types';
import React from 'react';
import s from './Title.module.css';

export const Title = ({ title }) => {
  return <h2 className={s.title}>{title}</h2>;
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
};