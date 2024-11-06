import { useEffect, useState, useRef } from 'react';
import Section from '../../components/Section/Section';
import FindMoviesForm from '../../components/FindMoviesForm/FindMoviesForm';
import { fetchMovies } from '../../services/api';
import MoviesList from '../../components/MoviesList/MoviesList';

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

      {movies && <MoviesList movies={movies}></MoviesList>}
    </Section>
  );
}
