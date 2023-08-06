import React from "react";
import CreditList from "../components/creditList";
import { samplePersonCredit } from "./sampleData";
import { MemoryRouter } from "react-router";
import MoviesContextProvider from "../contexts/moviesContext";

export default {
  title: "Person Details Page/CastList",
  component: CreditList,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>,
  ],
};

export const Basic = () => {
  return (
    <CreditList
       castData={samplePersonCredit}
    />
  );
};
Basic.storyName = "Default";

export const Exceptional = () => {
  const sampleNoPoster = { ...samplePersonCredit, poster_path: undefined };
  return (
    <CreditList
      castData={sampleNoPoster}
    />
  );
};
Exceptional.storyName = "exception";
