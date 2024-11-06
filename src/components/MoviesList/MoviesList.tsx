import IMovie from '../../interfaces/Movie.interface';
import s from './MoviesList.module.css';
import MoviesListItem from '../MoviesListItem/MoviesListItem';

interface Props {
  movies: IMovie[];
}

export default function MoviesList({ movies }: Props) {
  return (
    <ul className={s.movies}>
      {movies.map(movie => {
        return <MoviesListItem key={movie.id} movie={movie}></MoviesListItem>;
      })}
    </ul>
  );
}
