import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { QueryContext } from '../App';
import s from './GoBackButtton.module.css';

const GoBackButton = () => {
  const navigate = useNavigate();
  const { query } = useContext(QueryContext);

  const goBack = () => (query ? navigate('/movies') : navigate('/'));

  return (
    <button className={s.button} type="button" onClick={goBack}>
      Go back
    </button>
  );
};

export default GoBackButton;
