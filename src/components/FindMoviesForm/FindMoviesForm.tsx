import { useState } from 'react';
import s from './FindMoviesForm.module.css';

interface Props {
  defQuery?: string;
  onSubmitForm: (q: string) => void;
}

export default function FindMoviesForm({ defQuery = '', onSubmitForm }: Props) {
  const [query, setQuery] = useState(defQuery);

  const handlerChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const q = e.currentTarget.value;

    setQuery(q);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onSubmitForm(query);
  };

  return (
    <form onSubmit={onSubmit} className={s.form}>
      <input
        type="text"
        onChange={handlerChangeInput}
        value={query}
        className={s.input}
        placeholder="movie title..."
      />
    </form>
  );
}
