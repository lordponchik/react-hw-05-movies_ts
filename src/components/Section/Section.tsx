import s from './Section.module.css';

interface Props {
  title: string;
  children: React.ReactNode;
}

export default function Section({ title, children }: Props) {
  return (
    <section>
      <h1 className={s.title}>{title}</h1>
      {children}
    </section>
  );
}
