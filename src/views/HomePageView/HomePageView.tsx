import { useEffect, useState } from 'react';
import fetchMovies from '../../services/api';
import s from './HomePageView.module.css';

export default function HomePageView() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function requestMovies() {
      const { results } = await fetchMovies();

      setMovies(results);
    }

    requestMovies();
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      <ul className={s.movies}>
        {movies.map(({ id, poster_path, original_name, title }) => {
          return (
            <li key={id} className={s.movies__item}>
              <div className={s.movies__wrapper}>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                  alt={title || original_name}
                  width="250"
                  className={s.movies__img}
                />
                <div className={s.title__wrapper}>
                  <p className={s.movies__title}>{title || original_name}</p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}
