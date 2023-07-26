import React from "react";
import Grid from "@mui/material/Grid";

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

function PeopleListPageTemplate({ people }) {
  return (
    <>
      <Grid container sx={styles.root}>
        <Grid item container spacing={1}>
            {people.map((person, index) => (
                <Grid item xs={12} key={index}>
                    {person.name}
                </Grid>
            ))}
        </Grid>
      </Grid>
    </>  
  );
}
export default PeopleListPageTemplate;
