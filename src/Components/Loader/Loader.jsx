import React from 'react';
import { Oval } from 'react-loader-spinner';
import s from './Loader.module.css';

export const Loader = () => (
  <div className={s.mainWrapper}>
    <div className={s.wrapper}>
      <Oval color="orange" width={80} height={80} />
    </div>
  </div>
);
