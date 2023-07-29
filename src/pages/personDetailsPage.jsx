import React from "react";
import { useParams } from "react-router-dom";
import PageTemplate from "../components/templatePersonPage";
import { getPerson } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner'

const PersonDetailsPage = () => {
  const { id } = useParams();

  const { data: person, error, isLoading, isError } = useQuery(
    ["person", { id: id }],
    getPerson
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  
  return (
    <>
      {person ? (
        <>
          <PageTemplate person={person}>
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for person's details</p>
      )}
    </>
  );
};

export default PersonDetailsPage;
