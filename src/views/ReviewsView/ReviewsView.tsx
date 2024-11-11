import { useParams } from 'react-router-dom';
import { fetchMoviesReviews } from '../../services/api';
import s from './ReviewsView.module.css';
import InformationMessage from '../../components/InformationMessage/InformationMessage';
import Loader from '../../components/Loader/Loader';
import { useQuery } from '@tanstack/react-query';

interface IReview {
  id: string;
  author: string;
  content: string;
}

async function requestMovieReviews(movieId: number) {
  const { results } = await fetchMoviesReviews(movieId);

  return results;
}

export default function ReviewsView() {
  const { movieId } = useParams();
  const {
    data: reviews,
    isPending,
    isError,
  } = useQuery<IReview[]>({
    queryKey: ['reviews', movieId],
    queryFn: () => requestMovieReviews(Number(movieId)),
    refetchOnWindowFocus: false,
  });

  return (
    <>
      {isPending && <Loader />}
      {reviews && (
        <ul className={s.reviews}>
          {reviews.map(({ id, author, content }) => {
            return (
              <li key={id} className={s.reviewsItem}>
                <h3 className={s.title}>
                  <span className={s.titleName}>Author: </span> {author}
                </h3>
                <p className="content">{content}</p>
              </li>
            );
          })}
        </ul>
      )}
      {(isError || reviews?.length) === 0 && <InformationMessage />}
    </>
  );
}
