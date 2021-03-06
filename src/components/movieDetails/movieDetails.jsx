import React, { useState, Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import StarsOutlinedIcon from "@material-ui/icons/StarsOutlined";
import MonetizationOnOutlinedIcon from "@material-ui/icons/MonetizationOnOutlined";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { TMDB_IMG_URL } from "../../common/consts";
import { getMovieDetails } from "../../services/tmdb-api";
import "./movieDetails.scss";
import { makeStyles } from "@material-ui/core";
import { useHistory } from "react-router";

const useStyles = makeStyles(({
  backButton: {
    zIndex: 30,
    position: "relative",
    display: "inline-flex",
    flexDirection: "row",
    alignItems: "center",
    fontSize: "28px",
    color: "white",
    cursor: "pointer"
  },
  backText: {
    marginLeft: 10
  },
}));
const MovieDetails = props => {
  const classes = useStyles();
  const history = useHistory();

  const [movieDetails, setMovieDetails] = useState();
  const id = props.match.params.id;

  const fetchMovieDetails = async () => {
    const res = await getMovieDetails(id);
    setMovieDetails(res);
  };

  if (id && !movieDetails) {
    fetchMovieDetails();
  }

  return (
    <Fragment>
      {movieDetails && (
        <Box
          className="movie-details"
          style={{
            backgroundImage: `url(${TMDB_IMG_URL}${movieDetails.backdrop_path})`
          }}
        >
          <Container>
           <div className={classes.backButton} onClick={() => history.push("/")}>
            <ArrowBackIcon/>
            <span className={classes.backText}>Back</span>
          </div>
            <Grid container className="movie-details-container">
              <Grid item xs={12} md={6} className="content">   
                <h1 className="title">{movieDetails.title}</h1>
                <p className="overview">{movieDetails.overview}</p>
                <div className="details">
                  <div className="infos">
                    <MonetizationOnOutlinedIcon className="icon" />
                    <p>Budget</p>
                    {new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "USD"
                    }).format(movieDetails.budget)}
                  </div>
                  <div className="infos">
                    <StarsOutlinedIcon className="icon" />
                    <p>Votes</p>
                    {movieDetails.vote_count} {movieDetails.vote_average}
                  </div>
                  <div className="infos">
                    <FavoriteBorderOutlinedIcon className="icon" />
                    <p>Popularity</p>
                    {movieDetails.popularity}
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} md={6} className="poster">
                <img
                  src={`${TMDB_IMG_URL}${movieDetails.poster_path}`}
                  alt={movieDetails.title}
                />
              </Grid>
            </Grid>
          </Container>
        </Box>
      )}
    </Fragment>
  );
};
export default MovieDetails;
