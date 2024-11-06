import { Link } from 'react-router-dom';
import IMovie from '../../interfaces/Movie.interface';
import s from './MoviesListItem.module.css';

interface Props {
  movie: IMovie;
}

const img_url =
  'https://images.unsplash.com/photo-1625315268158-bb9ef970ca77?q=80&w=2397&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

export default function MoviesListItem({
  movie: { id, poster_path, original_name, title, name },
}: Props) {
  return (
    <li className={s.movie}>
      <Link to={`/movies/${id}`}>
        <div className={s.imgWrapper}>
          <img
            src={poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : img_url}
            alt={title || name || original_name}
            width="250"
            className={s.poster}
          />
          <div className={s.titleWrapper}>
            <p className={s.title}>{title || name || original_name}</p>
          </div>
        </div>
      </Link>
    </li>
  );
}
