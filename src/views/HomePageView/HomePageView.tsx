import { useEffect, useState } from 'react';
import { fetchTrendingMovies } from '../../services/api';
import Section from '../../components/Section/Section';
import MoviesList from '../../components/MoviesList/MoviesList';

export default function HomePageView() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function requestMovies() {
      const { results } = await fetchTrendingMovies();

      setMovies(results);
    }

    requestMovies();
  }, []);

  return (
    <>
      <Section title="Trending today">
        <MoviesList movies={movies}></MoviesList>
      </Section>
    </>
  );
}
