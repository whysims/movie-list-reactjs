import { NotFound, HomeLayout, MovieDetails } from "./components";

export const routes = [
  {
    path: "/",
    component: HomeLayout,
    exact: true
  },
  {
    path: "/movie/:id",
    component: MovieDetails,
    exact: true
  },
  // { path: "/search/:query", component: SearchMovies},
  {
    path: "*",
    component: NotFound
  }
];
