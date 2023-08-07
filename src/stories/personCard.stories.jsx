import React from "react";
import PersonCard from "../components/personCard";
import { samplePerson } from "./sampleData";
import { MemoryRouter } from "react-router";
import PeopleContextProvider from "../contexts/peopleContext";
import { action } from "@storybook/addon-actions";
import AddToFavouritesIcon from "../components/cardIcons/addToFavourites";

export default {
  title: "Home Page/PersonCard",
  component: PersonCard,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <PeopleContextProvider>{Story()}</PeopleContextProvider>,
  ],
};

export const Basic = () => {
  return (
    <PersonCard
      person={samplePerson}
      action={(person) => <AddToFavouritesIcon person={person} targetContext={(Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>} />}
      taging={(person) => null}
    />
  );
};
Basic.storyName = "Default";

export const Exceptional = () => {
  const sampleNoPoster = { ...samplePerson, profile_path: undefined };
  return (
    <PersonCard
      person={sampleNoPoster}
      action={(person) => <AddToFavouritesIcon person={person} targetContext={(Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>} />}
      taging={(person) => null}
    />
  );
};
Exceptional.storyName = "exception";
