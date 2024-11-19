import { Link } from "react-router-dom";
import s from "./ErrorView.module.css";

export default function ErrorView() {
  return (
    <section className={s.section}>
      <h1 className={s.title}>404 - Page not found</h1>
      <Link to="/" className={s.link}>
        Back to Homepage
      </Link>
    </section>
  );
}
