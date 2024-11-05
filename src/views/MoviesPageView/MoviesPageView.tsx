import { useState } from 'react';
import Section from '../../components/Section/Section';

export default function MoviesPageView() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');

  const changeQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    const q = e.currentTarget.value;

    setQuery(q);
  };

  return (
    <Section title="Find a movie">
      <input type="text" onChange={changeQuery} value={query} />
    </Section>
  );
}
