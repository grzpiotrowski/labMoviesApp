import React from "react";
import { useParams } from "react-router-dom";
import PageTemplate from "../components/templatePersonPage";
import PersonDetails from "../components/personDetails";
import { getPerson, getPersonCredits } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner'
import CreditList from "../components/creditList";

const PersonDetailsPage = () => {
  const { id } = useParams();

  const { data: person, error: personError, isLoading: personLoading, isError: personErrorStatus } = useQuery(
    ["person", { id: id }],
    getPerson
  );

  const { data: castData, error: castError, isLoading: castLoading, isError: castErrorStatus } = useQuery(
    ["personCredits", { id: id }],
    getPersonCredits
  );

  if (personLoading || castLoading) {
    return <Spinner />;
  }

  if (personErrorStatus || castErrorStatus) {
    return <h1>{personError?.message || castError?.message}</h1>;
  }
  
  return (
    <>
      {person && castData ? (
        <>
          <PageTemplate person={person}>
            <PersonDetails person={person} />
            <CreditList castData={castData} />
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for person's details</p>
      )}
    </>
  );
};

export default PersonDetailsPage;
