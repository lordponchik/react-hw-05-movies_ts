import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Header/Header';
import HomePageView from '../views/HomePageView/HomePageView';
import MoviesPageView from '../views/MoviesPageView/MoviesPageView';
import MovieDetailsPageView from '../views/MovieDetailsPageView/MovieDetailsPageView';

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<HomePageView />}></Route>
        <Route path="/movies" element={<MoviesPageView />}></Route>
        <Route path="/movies/:movieId" element={<MovieDetailsPageView />}></Route>
      </Routes>
    </div>
  );
}

export default App;
