import css from "./RootLayout.module.css";
import clsx from "clsx";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import tmdbLogo from "../images/tmdb-logo-3-cropped.png";

export function RootLayout({ children }) {
  const [isHoverHome, setIsHoverHome] = useState(false);
  const [isHoverMovies, setIsHoverMovies] = useState(false);

  return (
    <>
      <header className={css.menu_bar}>
        <NavLink to="/">
          <img src={tmdbLogo} alt="The Movie Database" height="80" />
        </NavLink>
        <ul className={css.menu_list}>
          <li className={css.menu_item}>
            <NavLink
              className={clsx(css.menu_title, {
                [css["is-hover"]]: isHoverHome,
              })}
              onMouseOver={() => setIsHoverHome(true)}
              onMouseLeave={() => setIsHoverHome(false)}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li className={css.menu_item}>
            <NavLink
              className={clsx(css.menu_title, {
                [css["is-hover"]]: isHoverMovies,
              })}
              onMouseOver={() => setIsHoverMovies(true)}
              onMouseLeave={() => setIsHoverMovies(false)}
              to="/movies"
            >
              Movies
            </NavLink>
          </li>
        </ul>
      </header>
      {children}
    </>
  );
}

RootLayout.propTypes = {
  children: PropTypes.object.isRequired,
};
