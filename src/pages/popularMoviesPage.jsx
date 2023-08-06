import React, { useState } from "react";
import PageTemplate from '../components/templateMovieListPage'
import AddToPlaylistIcon from '../components/cardIcons/addToPlaylist'
import { useQuery } from "react-query";
import { getPopularMovies } from "../api/tmdb-api";
import Spinner from "../components/spinner";


const PopularMoviesPage = (props) => {
  const [page, setPage] = useState(1);

  const { data, error, isLoading, isError } = useQuery(
      ["popular", { page: page }],
      getPopularMovies
    );

  const handleNext = () => {
    setPage(old => (old + 1));
  };

  const handleBack = () => {
    setPage(old => Math.max(old - 1, 1));
  };

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
      handleNext={handleNext}
      handleBack={handleBack}
    />
  );
};
export default PopularMoviesPage;
