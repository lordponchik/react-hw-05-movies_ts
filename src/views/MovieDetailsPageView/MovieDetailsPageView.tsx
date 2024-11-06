import { useState, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { fetchMoviesDetails } from '../../services/api';

interface IMovieDetails {
  title: string;
  [key: string]: string | number;
}

export default function MovieDetailsPageView() {
  const [movie, setMovie] = useState<IMovieDetails | null>(null);
  const { movieId } = useParams();

  useEffect(() => {
    async function requestMoviesDetails() {
      const results = await fetchMoviesDetails(Number(movieId));

      setMovie(results);
    }

    requestMoviesDetails();
  }, [movieId]);

  return (
    <>
      {movie && (
        <section>
          <div>
            <div>
              <img src="" alt="" />
            </div>
            <div>
              <h1>{movie.title}</h1>
              <p>User score</p>
              <h2>Overview</h2>
              <p></p>
              <h2>Genres</h2>
              <p></p>
            </div>
          </div>
          <div>
            <h3>Additional information</h3>
            <ul>
              <li>
                <NavLink to="Cast">Cast</NavLink>
              </li>
              <li>
                <NavLink to="Reviews">Reviews</NavLink>
              </li>
            </ul>
          </div>
        </section>
      )}
    </>
  );
}
