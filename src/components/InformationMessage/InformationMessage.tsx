import s from './InformationMessage.module.css';

export default function InformationMessage() {
  return <p className={s.message}>Unfortunately the requested information is not available.</p>;
}
