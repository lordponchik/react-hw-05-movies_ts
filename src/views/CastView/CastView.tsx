import { useParams } from 'react-router-dom';
import { fetchMoviesCredits } from '../../services/api';
import s from './CastView.module.css';
import InformationMessage from '../../components/InformationMessage/InformationMessage';
import Loader from '../../components/Loader/Loader';
import { useQuery } from '@tanstack/react-query';

interface ICast {
  cast_id: number;
  name: string;
  character: string;
  profile_path: string;
}

const img_url =
  'https://images.unsplash.com/photo-1601027847350-0285867c31f7?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

async function requestMovieCast(movieId: number) {
  const { cast } = await fetchMoviesCredits(movieId);

  return cast;
}

export default function CastView() {
  const { movieId } = useParams();
  const { data, isPending, isError } = useQuery<ICast[]>({
    queryKey: ['movieCast', movieId],
    queryFn: () => requestMovieCast(Number(movieId)),
    refetchOnWindowFocus: false,
  });

  return (
    <>
      {isPending && <Loader />}
      {isError && <InformationMessage />}
      {data && data.length !== 0 ? (
        <ul className={s.cast}>
          {data.map(({ cast_id, character, name, profile_path }) => {
            return (
              <li key={cast_id} className={s.castItem}>
                <img
                  src={profile_path ? `https://image.tmdb.org/t/p/w300${profile_path}` : img_url}
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
