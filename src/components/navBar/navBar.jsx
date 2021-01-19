import React, { useState } from "react";
import MovieFilterIcon from "@material-ui/icons/MovieFilter";
import { Link } from "react-router-dom";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import Paper from "@material-ui/core/Paper";
import { AppBar, Container, Toolbar } from "@material-ui/core";
import { fade, makeStyles } from "@material-ui/core/styles";
import { searchMovies } from "../../services/tmdb-api";
import history from "../../history";
import "./navBar.scss";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit"
  },
  navToolBar: {
    display: "flex",
    justifyContent: "space-between"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: 120,
      "&:focus": {
        width: 200
      }
    }
  }
}));

const NavBar = () => {
  const [searchResult, setSearchResult] = useState();
  const classes = useStyles();

  const showMovieDetails = id => {
    setSearchResult(null);
    history.push(`/movie/${id}`);
    return;
  };

  const searchMovie = async query => {
    if (!query.length) setSearchResult(null);

    if (query.length >= 3) {
      const result = await searchMovies(query);
      setSearchResult(result);
    }
  };

  return (
    <AppBar className="movie-information-nav">
      <Container>
      <Toolbar className={classes.navToolBar}>
        <Link to="/">
          <MovieFilterIcon /> Movie Information
        </Link>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput
            }}
            inputProps={{ "aria-label": "search" }}
            onChange={event => searchMovie(event.target.value)}
          />
          {searchResult && (
            <Paper className="search-result">
              <ul>
                {searchResult.results
                  .map(x => (
                    <li key={x.id} onClick={() => showMovieDetails(x.id)}>
                      {x.title}
                    </li>
                  ))
                  .sort((a, b) => a.popularity < b.popularity)}
              </ul>
            </Paper>
          )}
        </div>
      </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
