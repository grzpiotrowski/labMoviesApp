import React from "react";
import PageTemplate from '../components/templateMovieListPage'
import AddToPlaylistIcon from '../components/cardIcons/addToPlaylist'
import { useQuery } from "react-query";
import { getPopularMovies } from "../api/tmdb-api";
import Spinner from "../components/spinner";


const PopularMoviesPage = (props) => {
  const { data, error, isLoading, isError } = useQuery("popular", getPopularMovies);

  if (isLoading) {
    return <Spinner />;
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const movies = data ? data.results : [];

  return (
    <PageTemplate
      title='Popular Movies'
      movies={movies}
      action={(movie) => {
        return <AddToPlaylistIcon movie={movie} />
      }}
    />
  );
};
export default PopularMoviesPage;
