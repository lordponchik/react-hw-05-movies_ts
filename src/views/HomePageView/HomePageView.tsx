import { useEffect, useState } from 'react';
import fetchMovies from '../../services/api';
import s from './HomePageView.module.css';
import Section from '../../components/Section/Section';

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
      <Section title="Trending today">
        <ul className={s.movies}>
          {movies.map(({ id, poster_path, original_name, title, name }) => {
            return (
              <li key={id} className={s.movies__item}>
                <div className={s.movies__wrapper}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                    alt={title || name || original_name}
                    width="250"
                    className={s.movies__img}
                  />
                  <div className={s.title__wrapper}>
                    <p className={s.movies__title}>{title || name || original_name}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </Section>
    </>
  );
}
