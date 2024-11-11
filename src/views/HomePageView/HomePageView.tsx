import { fetchTrendingMovies } from '../../services/api';
import Section from '../../components/Section/Section';
import MoviesList from '../../components/MoviesList/MoviesList';
import InformationMessage from '../../components/InformationMessage/InformationMessage';
import Loader from '../../components/Loader/Loader';
import { useQuery } from '@tanstack/react-query';

async function requestMovies() {
  const { results } = await fetchTrendingMovies();
  return results;
}

export default function HomePageView() {
  const { data, isPending, isError } = useQuery({
    queryKey: ['trendingsMovies'],
    queryFn: requestMovies,
    refetchOnWindowFocus: false,
  });

  return (
    <>
      <Section title="Trending today">
        {isPending && <Loader />}
        {(isError || data?.length === 0) && <InformationMessage />}
        {data && <MoviesList movies={data}></MoviesList>}
      </Section>
    </>
  );
}
