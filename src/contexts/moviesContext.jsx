import React, { useState } from "react";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  const [myReviews, setMyReviews] = useState( {} )
  const [favourites, setFavourites] = useState([]);
  const [playlist, setPlaylist] = useState([]);

  const addToFavourites = (movie) => {
    let updatedFavourites = [...favourites];
    if (!favourites.includes(movie.id)) {
      updatedFavourites.push(movie.id);
    }
    setFavourites(updatedFavourites);
  };

  // We will use this function in a later section
  const removeFromFavourites = (movie) => {
    setFavourites(favourites.filter((mId) => mId !== movie.id));
  };

  const addReview = (movie, review) => {
    setMyReviews( {...myReviews, [movie.id]: review } )
  };

  const addToPlaylist = (movie) => {
    let updatedPlaylist = [...playlist];
    if (!playlist.includes(movie.id)) {
      updatedPlaylist.push(movie.id);
    }
    setPlaylist(updatedPlaylist);
    console.log(updatedPlaylist); // output the content of the new state variable array
  };

 return (
    <MoviesContext.Provider
      value={{
        favourites,
        playlist,
        addToFavourites,
        removeFromFavourites,
        addReview,
        addToPlaylist,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;
