import React from "react";
import PageTemplate from '../components/templatePeoplePage'
import AddToFavouritesIcon from "../components/cardIcons/addToFavourites";
import { useQuery } from "react-query";
import { getPeople } from "../api/tmdb-api";
import Spinner from "../components/spinner";
import { PeopleContext } from "../contexts/peopleContext";


const PeoplePage = (props) => {
  const { data, error, isLoading, isError } = useQuery("people", getPeople);

  if (isLoading) {
    return <Spinner />;
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const people = data ? data.results : [];

  return (
    <PageTemplate
      title='People'
      people={people}
      action={(person) => {
        return <AddToFavouritesIcon object={person} targetContext={PeopleContext} />
      }}
    />
  );
};
export default PeoplePage;
