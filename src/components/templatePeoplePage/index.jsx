import React from "react";
import Grid from "@mui/material/Grid";
import PeopleList from "../peopleList";

const styles = {
  root: {
    padding: "20px",
  },
  fab: {
    marginTop: 8,
    position: "fixed",
    top: 2,
    right: 2,
  },
};

function PeopleListPageTemplate({ people, action }) {
  return (
    <>
      <Grid container sx={styles.root}>
        <Grid item container spacing={1}>
        <PeopleList
            action={action}
            people={people}
          />
        </Grid>
      </Grid>
    </>  
  );
}
export default PeopleListPageTemplate;
