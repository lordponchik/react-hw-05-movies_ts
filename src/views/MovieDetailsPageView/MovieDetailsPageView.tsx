import { Link, NavLink, Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchMoviesDetails } from '../../services/api';
import s from './MovieDetailsPageView.module.css';
import InformationMessage from '../../components/InformationMessage/InformationMessage';
import Loader from '../../components/Loader/Loader';
import { useQuery } from '@tanstack/react-query';

interface IGenres {
  id: number;
  name: string;
}

interface IMovieDetails {
  title: string;
  name: string;
  original_name: string;
  poster_path: string;
  vote_average: number;
  overview: string;
  genres: IGenres[];
  release_date: string;
  [key: string]: string | number | IGenres[];
}

const img_url =
  'https://images.unsplash.com/photo-1625315268158-bb9ef970ca77?q=80&w=2397&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

async function requestMoviesDetails(movieId: number) {
  const results = await fetchMoviesDetails(movieId);

  return results;
}

export default function MovieDetailsPageView() {
  const { movieId } = useParams();
  const { data, isPending, isError } = useQuery<IMovieDetails>({
    queryKey: ['moviesDetails', movieId],
    queryFn: () => requestMoviesDetails(Number(movieId)),
    refetchOnWindowFocus: false,
  });
  const location = useLocation();
  const backUrl = location?.state?.from ?? '/';
  const stateFrom = backUrl;

  return (
    <>
      {isPending && <Loader />}
      {(isError || data == undefined) && <InformationMessage />}
      {data ? (
        <section className={s.section}>
          <Link to={backUrl} className={s.linkBack}>
            &#8604; Go back
          </Link>
          <div className={s.movieWrapper}>
            <div className={s.imgWrapper}>
              <img
                src={
                  data.poster_path ? `https://image.tmdb.org/t/p/w500/${data.poster_path}` : img_url
                }
                alt=""
              />
            </div>
            <div className={s.movieDescription}>
              <h1 className={s.movieTitle}>
                {data.title || data.name || data.original_name}{' '}
                {`(${data.release_date.split('-')[0]})`}
              </h1>
              <p className={s.userScore}>
                User score:
                {data.vote_average > 0 ? ` ${Math.trunc(data.vote_average * 10)}%` : ' we wate'}
              </p>

              {data.overview && (
                <>
                  <h2 className={s.overviewTitle}>Overview</h2>
                  <p className={s.overview}>{data.overview}</p>
                </>
              )}
              {data.genres && (
                <>
                  <h2 className={s.genresTitle}>Genres</h2>
                  <ul className={s.genres}>
                    {data.genres.map(({ id, name }) => {
                      return <li key={id}>{name}</li>;
                    })}
                  </ul>
                </>
              )}
            </div>
          </div>
          <div>
            <h3 className={s.addtionalInfo}>Additional information</h3>
            <ul className={s.detailsNav}>
              <li className={s.detailsItem}>
                <NavLink
                  to="cast"
                  className={({ isActive }) => {
                    return isActive ? s.detailsLink__active : s.detailsLink;
                  }}
                  state={{ from: stateFrom }}
                >
                  Cast
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="reviews"
                  className={({ isActive }) => {
                    return isActive ? s.detailsLink__active : s.detailsLink;
                  }}
                  state={{ from: stateFrom }}
                >
                  Reviews
                </NavLink>
              </li>
            </ul>

            <Outlet />
          </div>
        </section>
      ) : (
        <InformationMessage />
      )}
    </>
  );
}
