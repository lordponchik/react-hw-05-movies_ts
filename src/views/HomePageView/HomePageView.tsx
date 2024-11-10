import { useEffect, useState } from 'react';
import { fetchTrendingMovies } from '../../services/api';
import Section from '../../components/Section/Section';
import MoviesList from '../../components/MoviesList/MoviesList';
import InformationMessage from '../../components/InformationMessage/InformationMessage';
import Loader from '../../components/Loader/Loader';

export default function HomePageView() {
  const [movies, setMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function requestMovies() {
      setIsLoading(true);

      try {
        const { results } = await fetchTrendingMovies();
        setMovies(results);
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    }

    requestMovies();
  }, []);

  return (
    <>
      <Section title="Trending today">
        {isLoading && <Loader />}
        {movies ? <MoviesList movies={movies}></MoviesList> : <InformationMessage />}
      </Section>
    </>
  );
}
