import { useEffect, useState } from 'react';
import Section from '../../components/Section/Section';
import FindMoviesForm from '../../components/FindMoviesForm/FindMoviesForm';
import { fetchMovies } from '../../services/api';
import MoviesList from '../../components/MoviesList/MoviesList';
import { useSearchParams } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';

export default function MoviesPageView() {
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  useEffect(() => {
    if (query === null || query === '') return;

    async function requestMovies() {
      setIsLoading(true);

      try {
        const { results } = await fetchMovies(query as string);

        setMovies(results);
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    }

    requestMovies();
  }, [query]);

  const onSubmit = (q: string) => {
    if (q === query) {
      return;
    }

    setMovies(null);
    setSearchParams({ query: q });
  };

  return (
    <Section title="Find a movie">
      <FindMoviesForm onSubmitForm={onSubmit} defQuery={query ?? ''}></FindMoviesForm>
      {isLoading && <Loader />}
      {movies && <MoviesList movies={movies}></MoviesList>}
    </Section>
  );
}
