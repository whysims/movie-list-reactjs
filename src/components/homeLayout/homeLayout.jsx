import React, { Fragment, useState, useEffect, Suspense } from "react";
import { Loading } from "../../components";
import { Container, Grid } from "@material-ui/core";
import { getPopularMovies } from "../../services/tmdb-api";
import { useHistory, withRouter } from "react-router";

const MovieCard = React.lazy(() =>
  import("../../components/movieCard/movieCard")
);

const HomeLayout = () => {
  const history = useHistory();
  const [popularMovies, setPopularMovies] = useState();

  const retrievePopularMovies = async () => {
    const { results } = await getPopularMovies();
    setPopularMovies(results);
  };

  const movieDetails = id => {
    history.push(`/movie/${id}`)
    return;
  };

  useEffect(() => {
    if (!popularMovies) {
      retrievePopularMovies();
    }
  }, [popularMovies]);

  return (
    <Fragment>
      <Container className="movie-container">
        <Grid container spacing={4} justify="center">
          <Suspense fallback={<Loading />}>
            {popularMovies &&
              popularMovies.map(x => (
                <Grid item key={x.id} onClick={() => movieDetails(x.id)}>
                  <MovieCard {...x} />
                </Grid>
              ))}
          </Suspense>
        </Grid>
      </Container>
    </Fragment>
  );
};

export default withRouter(HomeLayout);
