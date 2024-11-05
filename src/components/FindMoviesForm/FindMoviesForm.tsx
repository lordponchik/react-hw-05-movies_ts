import { useState } from 'react';

interface Props {
  onSubmitForm: (q: string) => void;
}

export default function FindMoviesForm({ onSubmitForm }: Props) {
  const [query, setQuery] = useState('');

  const handlerChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const q = e.currentTarget.value;

    setQuery(q);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onSubmitForm(query);
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" onChange={handlerChangeInput} value={query} />
    </form>
  );
}
