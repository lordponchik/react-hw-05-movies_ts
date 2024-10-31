import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

export default function Header() {
  return (
    <header className={s.header}>
      <nav>
        <ul className={s.nav}>
          <li className={s.nav__item}>
            <NavLink to="/" className={({ isActive }) => (isActive ? s.active : s.nav__link)}>
              Home
            </NavLink>
          </li>
          <li className={s.nav__item}>
            <NavLink to="/movies" className={({ isActive }) => (isActive ? s.active : s.nav__link)}>
              Movies
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
