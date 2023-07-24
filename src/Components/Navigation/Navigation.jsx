import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';
import classNames from 'classnames';
import { PropTypes } from 'prop-types';

const getClassName = ({ isActive }) =>
  isActive
    ? classNames(s.navLink, s.navLinkActive)
    : classNames(s.navLink, s.navLinkNotActive);

export const Navigation = ({ routes }) => {
  return (
    <nav className={s.nav}>
      <ul className={s.navList}>
        {routes.map(({ path, name }) => (
          <li className={s.navItem} key={path}>
            <NavLink to={path} className={getClassName}>
              {name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Navigation.propTypes = {
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ),
};