import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePageView from "../views/HomePageView/HomePageView";
import MoviesPageView from "../views/MoviesPageView/MoviesPageView";
import MovieDetailsPageView from "../views/MovieDetailsPageView/MovieDetailsPageView";
import CastView from "../views/CastView/CastView";
import SharedLayout from "./SharedLayout/SharedLayout";
import ReviewsView from "../views/ReviewsView/ReviewsView";
import ErrorView from "../views/ErrorView/ErrorView";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePageView />}></Route>
          <Route path="/movies" element={<MoviesPageView />}></Route>
          <Route path="/movies/:movieId" element={<MovieDetailsPageView />}>
            <Route path="cast" element={<CastView />}></Route>
            <Route path="reviews" element={<ReviewsView />}></Route>
          </Route>
        </Route>
        <Route path="*" element={<ErrorView />}></Route>
      </Routes>
    </div>
  );
}

export default App;
