export default interface IMovie {
  id: number;
  poster_path: string;
  original_name: string;
  title: string;
  name: string;
  [key: string]: number | string;
}
