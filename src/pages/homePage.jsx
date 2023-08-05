import React, { useState, useEffect } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { getMovies } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import AddToFavouritesIcon from '../components/cardIcons/addToFavourites'

const HomePage = (props) => {
  const [page, setPage] = useState(1);
  
  const { data, error, isLoading, isError } = useQuery(
      ["discover", { page: page }],
      getMovies
    );

  const handleNext = () => {
    console.log("Page up")
    setPage(old => (old + 1));
  };

  const handleBack = () => {
    console.log("Page down")
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
      title="Discover Movies"
      movies={movies}
      action={(movie) => {
        return <AddToFavouritesIcon movie={movie} />
      }}
      handleNext={handleNext}
      handleBack={handleBack}
    />
  );
};
export default HomePage;
