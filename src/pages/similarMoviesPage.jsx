import React from "react";
import PageTemplate from '../components/templateMovieListPage'
import AddToPlaylistIcon from '../components/cardIcons/addToPlaylist'
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getSimilarMovies } from "../api/tmdb-api";
import Spinner from "../components/spinner";


const SimilarMoviesPage = (props) => {
  const { id } = useParams();

  const { data, error, isLoading, isError } = useQuery(
    ["movies", { id: id }],
    getSimilarMovies
  );
  
  if (isLoading) {
    return <Spinner />;
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const movies = data ? data.results : [];

  return (
    <PageTemplate
      title='Similar Movies'
      movies={movies}
      action={(movie) => {
        return <AddToPlaylistIcon movie={movie} />
      }}
    />
  );
};
export default SimilarMoviesPage;
