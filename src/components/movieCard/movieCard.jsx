import React from "react";
import { withRouter } from "react-router";
import { TMDB_IMG_URL } from "../../common/consts";
import GradeIcon from "@material-ui/icons/Grade";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import "./movieCard.scss";

const MovieCard = props => {
  const { vote_average, poster_path, popularity } = props;

  return (
    <div
      className="movie-card"
      style={{ backgroundImage: `url(${TMDB_IMG_URL}${poster_path})` }}
    >
      <span className="movie-card--popularity">
        <ThumbUpAltIcon /> {popularity}
      </span>
      <span className="movie-card--avg">
        <GradeIcon /> {vote_average}
      </span>
      <div className="movie-card--overlay"></div>
    </div>
  );
};
export default withRouter(MovieCard);
