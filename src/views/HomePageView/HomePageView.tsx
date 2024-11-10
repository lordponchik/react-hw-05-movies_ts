import { useEffect, useState } from 'react';
import { fetchTrendingMovies } from '../../services/api';
import Section from '../../components/Section/Section';
import MoviesList from '../../components/MoviesList/MoviesList';
import InformationMessage from '../../components/InformationMessage/InformationMessage';

export default function HomePageView() {
  const [movies, setMovies] = useState(null);

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
        {movies ? <MoviesList movies={movies}></MoviesList> : <InformationMessage />}
      </Section>
    </>
  );
}
