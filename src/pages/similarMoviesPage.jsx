import React from "react";
import PageTemplate from '../components/templateSimilarMovieListPage'
import AddToPlaylistIcon from '../components/cardIcons/addToPlaylist'
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getSimilarMovies, getMovie } from "../api/tmdb-api";
import Spinner from "../components/spinner";


const SimilarMoviesPage = (props) => {
  const { id } = useParams();

  const { data: similarMoviesData, error: similarMoviesError, isLoading: similarMoviesLoading, isError: similarMoviesIsError } = useQuery(
    ["similarMovies", { id: id }],
    getSimilarMovies
  );

  const { data: movieData, error: movieError, isLoading: movieLoading, isError: movieIsError } = useQuery(
    ["movie", { id: id }],
    getMovie
  );
  
  if (similarMoviesLoading || movieLoading) {
    return <Spinner />;
  }

  if (similarMoviesIsError || movieIsError) {
    return <h1>{similarMoviesError?.message || movieError?.message}</h1>;
  }

  const movies = similarMoviesData ? similarMoviesData.results : [];
  const movie = movieData;

  return (
    <PageTemplate
      title='Similar Movies'
      movie={movie}
      movies={movies}
      action={(movie) => {
        return <AddToPlaylistIcon movie={movie} />
      }}
    />
  );
};
export default SimilarMoviesPage;
