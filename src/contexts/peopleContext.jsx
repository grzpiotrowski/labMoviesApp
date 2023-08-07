import React, { useState } from "react";

export const PeopleContext = React.createContext(null);

const PeopleContextProvider = (props) => {
  const [favourites, setFavourites] = useState([]);

  const addToFavourites = (person) => {
    let updatedFavourites = [...favourites];
    if (!favourites.includes(person.id)) {
      updatedFavourites.push(person.id);
    }
    setFavourites(updatedFavourites);
  };

  const removeFromFavourites = (person) => {
    setFavourites(favourites.filter((mId) => mId !== person.id));
  };

 return (
    <PeopleContext.Provider
      value={{
        favourites,
        addToFavourites,
        removeFromFavourites,
      }}
    >
      {props.children}
    </PeopleContext.Provider>
  );
};

export default PeopleContextProvider;
