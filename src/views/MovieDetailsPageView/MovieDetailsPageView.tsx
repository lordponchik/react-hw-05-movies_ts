import { useState, useEffect } from 'react';
import { Link, NavLink, Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchMoviesDetails } from '../../services/api';
import s from './MovieDetailsPageView.module.css';
import InformationMessage from '../../components/InformationMessage/InformationMessage';
import Loader from '../../components/Loader/Loader';

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

export default function MovieDetailsPageView() {
  const [movie, setMovie] = useState<IMovieDetails | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();
  const location = useLocation();
  const backUrl = location?.state?.from ?? '/';
  const stateFrom = location.state.from;

  useEffect(() => {
    async function requestMoviesDetails() {
      setIsLoading(true);
      try {
        const results = await fetchMoviesDetails(Number(movieId));

        setMovie(results);
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    }

    requestMoviesDetails();
  }, [movieId]);

  return (
    <>
      {isLoading && <Loader />}
      {movie ? (
        <section className={s.section}>
          <Link to={backUrl} className={s.linkBack}>
            &#8604; Go back
          </Link>
          <div className={s.movieWrapper}>
            <div className={s.imgWrapper}>
              <img
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                    : img_url
                }
                alt=""
              />
            </div>
            <div className={s.movieDescription}>
              <h1 className={s.movieTitle}>
                {movie.title || movie.name || movie.original_name}{' '}
                {`(${movie.release_date.split('-')[0]})`}
              </h1>
              <p className={s.userScore}>
                User score:
                {movie.vote_average > 0 ? ` ${Math.trunc(movie.vote_average * 10)}%` : ' we wate'}
              </p>

              {movie.overview && (
                <>
                  <h2 className={s.overviewTitle}>Overview</h2>
                  <p className={s.overview}>{movie.overview}</p>
                </>
              )}
              {movie.genres && (
                <>
                  <h2 className={s.genresTitle}>Genres</h2>
                  <ul className={s.genres}>
                    {movie.genres.map(({ id, name }) => {
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
