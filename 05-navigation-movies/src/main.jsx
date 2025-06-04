import { Suspense, lazy } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Loader } from "./components/Loader/Loader";
import { RootLayout } from "./layouts/RootLayout";
import { HashRouter } from "react-router-dom";
import "./index.css";

const Home = lazy(() => import("./pages/Home/Home"));
const Movies = lazy(() => import("./pages/Movies/Movies"));
const MovieDetails = lazy(() => import("./pages/MovieDetails/MovieDetails"));
const Cast = lazy(() => import("./components/Cast/Cast"));
const Reviews = lazy(() => import("./components/Reviews/Reviews"));

ReactDOM.createRoot(document.getElementById("root")).render(
  <HashRouter>
    <RootLayout>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Routes>
      </Suspense>
    </RootLayout>
  </HashRouter>
);
