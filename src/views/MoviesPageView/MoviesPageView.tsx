import { useState } from 'react';
import Section from '../../components/Section/Section';
import FindMoviesForm from '../../components/FindMoviesForm/FindMoviesForm';

export default function MoviesPageView() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');

  const onSubmit = (q: string) => {
    if (q.trim() === '') {
      return;
    }

    setQuery(q);
  };

  return (
    <Section title="Find a movie">
      <FindMoviesForm onSubmitForm={onSubmit}></FindMoviesForm>
    </Section>
  );
}
