import React from "react";
import Grid from "@mui/material/Grid";
import { useParams } from "react-router-dom";
import MovieDetails from "../components/movieDetails";
import PageTemplate from "../components/templateMoviePage";
import { getMovie, getMovieCredits } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner'
import PeopleList from "../components/peopleList";

const MovieDetailsPage = () => {
  const { id } = useParams();

  const { data: movieCredits, error: movieCreditsError, isLoading: movieCreditsLoading, isError: movieCreditsIsError } = useQuery(
    ["movieCredits", { id: id }],
    getMovieCredits
  );

  const { data: movieData, error: movieError, isLoading: movieLoading, isError: movieIsError } = useQuery(
    ["movie", { id: id }],
    getMovie
  );
  
  if (movieCreditsLoading || movieLoading) {
    return <Spinner />;
  }

  if (movieCreditsIsError || movieIsError) {
    return <h1>{movieCreditsError?.message || movieError?.message}</h1>;
  }

  const movie = movieData;
  const people = movieCredits ? movieCredits.cast : [];
  
  return (
    <>
      {movie ? (
        <>
          <PageTemplate movie={movie}>
            <MovieDetails movie={movie} />
            <Grid item container spacing={1}>
              <PeopleList people={people.slice(0, 5)} action={() => null}/>
            </Grid>
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for movie details</p>
      )}
    </>
  );
};

export default MovieDetailsPage;
