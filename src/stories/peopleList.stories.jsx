import React from "react";
import PeopleList from "../components/peopleList";
import { samplePerson } from "./sampleData";
import { MemoryRouter } from "react-router";
import { action } from "@storybook/addon-actions";
import AddToFavouritesIcon from "../components/cardIcons/addToFavourites";
import Grid from "@mui/material/Grid";
import PeopleContextProvider from "../contexts/peopleContext";

export default {
  title: "Home Page/PeopleList",
  component: PeopleList,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <PeopleContextProvider>{Story()}</PeopleContextProvider>,
  ],
};

export const Basic = () => {
  const people = [
    { ...samplePerson, id: 1 },
    { ...samplePerson, id: 2 },
    { ...samplePerson, id: 3 },
    { ...samplePerson, id: 4 },
    { ...samplePerson, id: 5 },
  ];
  return (
    <Grid container spacing={5}>
      <PeopleList
        people={people}
        action={(person) => <AddToFavouritesIcon person={person} targetContext={(Story) => <PeopleContextProvider>{Story()}</PeopleContextProvider>} />}
      />
    </Grid>
  );
};
Basic.storyName = "Default";
