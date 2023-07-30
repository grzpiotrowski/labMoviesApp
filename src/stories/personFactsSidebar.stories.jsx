import React from "react";
import PersonFactsSidebar from "../components/personFactsSidebar";
import { samplePersonDetails } from "./sampleData";
import { MemoryRouter } from "react-router";
import MoviesContextProvider from "../contexts/moviesContext";

export default {
  title: "Person Details Page/PersonFactsSidebar",
  component: PersonFactsSidebar,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>,
  ],
};

export const Basic = () => <PersonFactsSidebar person={samplePersonDetails} />;

Basic.storyName = "Default";
