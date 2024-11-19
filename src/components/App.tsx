import { Route, Routes } from "react-router-dom";
import { lazy } from "react";

import "./App.css";
import SharedLayout from "./SharedLayout/SharedLayout";

const HomePageView = lazy(() => import("../views/HomePageView/HomePageView"));

const MoviesPageView = lazy(
  () => import("../views/MoviesPageView/MoviesPageView")
);

const MovieDetailsPageView = lazy(
  () => import("../views/MovieDetailsPageView/MovieDetailsPageView")
);

const CastView = lazy(() => import("../views/CastView/CastView"));

const ReviewsView = lazy(() => import("../views/ReviewsView/ReviewsView"));

const ErrorView = lazy(() => import("../views/ErrorView/ErrorView"));

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
