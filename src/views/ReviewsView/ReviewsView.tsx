import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMoviesReviews } from '../../services/api';
import s from './ReviewsView.module.css';
import InformationMessage from '../../components/InformationMessage/InformationMessage';

interface IReview {
  id: string;
  author: string;
  content: string;
}

export default function ReviewsView() {
  const [reviews, setReviews] = useState<IReview[] | null>(null);
  const { movieId } = useParams();

  useEffect(() => {
    async function requestMovieReviews() {
      const { results } = await fetchMoviesReviews(Number(movieId));

      setReviews(results);
    }

    requestMovieReviews();
  }, [movieId]);

  return (
    <>
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
      {reviews?.length === 0 && <InformationMessage />}
    </>
  );
}
