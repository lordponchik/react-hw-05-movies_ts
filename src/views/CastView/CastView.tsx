import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMoviesCredits } from '../../services/api';
import s from './CastView.module.css';
import InformationMessage from '../../components/InformationMessage/InformationMessage';
import Loader from '../../components/Loader/Loader';

interface ICast {
  cast_id: number;
  name: string;
  character: string;
  profile_path: string;
}

const img_url =
  'https://images.unsplash.com/photo-1601027847350-0285867c31f7?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

export default function CastView() {
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [movieCast, setMovieCast] = useState<ICast[] | null>(null);

  useEffect(() => {
    async function requestMovieCast() {
      setIsLoading(true);
      try {
        const { cast } = await fetchMoviesCredits(Number(movieId));

        setMovieCast(cast);
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    }

    requestMovieCast();
  }, [movieId]);

  return (
    <>
      {isLoading && <Loader />}
      {movieCast ? (
        <ul className={s.cast}>
          {movieCast.map(({ cast_id, character, name, profile_path }) => {
            return (
              <li key={cast_id} className={s.castItem}>
                <img
                  src={profile_path ? `https://image.tmdb.org/t/p/w300/${profile_path}` : img_url}
                  alt={name}
                  width={100}
                  className={s.profileImg}
                />
                <div>
                  <h3 className={s.name}>{name}</h3>
                  <p>{character}</p>
                </div>
              </li>
            );
          })}
        </ul>
      ) : (
        <InformationMessage />
      )}
    </>
  );
}
