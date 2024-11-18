import Section from "../../components/Section/Section";
import FindMoviesForm from "../../components/FindMoviesForm/FindMoviesForm";
import { fetchMovies } from "../../services/api";
import MoviesList from "../../components/MoviesList/MoviesList";
import { useSearchParams } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import { useQuery } from "@tanstack/react-query";
import InformationMessage from "../../components/InformationMessage/InformationMessage";

async function requestMovies(query: string | null) {
  const { results } = await fetchMovies(query as string);

  return results;
}

export default function MoviesPageView() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query");
  const {
    data: movies,
    isPending,
    isError,
  } = useQuery({
    queryKey: ["movies", query],
    queryFn: () => requestMovies(query),
    refetchOnWindowFocus: false,
    enabled: !!query,
  });

  const onSubmit = (q: string) => {
    if (q === query) {
      return;
    }

    setSearchParams({ query: q });
  };

  return (
    <Section title="Find a movie">
      <FindMoviesForm
        onSubmitForm={onSubmit}
        defQuery={query ?? ""}
      ></FindMoviesForm>
      {isPending && <Loader />}
      {(isError || movies?.length === 0) && <InformationMessage />}
      {movies && <MoviesList movies={movies}></MoviesList>}
    </Section>
  );
}
