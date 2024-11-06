import { useEffect, useState, useRef } from 'react';
import Section from '../../components/Section/Section';
import FindMoviesForm from '../../components/FindMoviesForm/FindMoviesForm';
import { fetchMovies } from '../../services/api';
import s from './MoviesPageView.module.css';
export default function MoviesPageView() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  let isFirstRender = useRef<boolean>(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    async function requestMovies() {
      const { results } = await fetchMovies(query);

      setMovies(results);
    }

    requestMovies();
  }, [query]);

  const onSubmit = (q: string) => {
    if (q.trim() === '') {
      return;
    }

    setQuery(q);
  };

  return (
    <Section title="Find a movie">
      <FindMoviesForm onSubmitForm={onSubmit}></FindMoviesForm>

      <ul>
        {movies &&
          movies.map(({ id, poster_path, original_name, title, name }) => {
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
  );
}
