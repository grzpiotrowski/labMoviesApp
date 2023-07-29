import React from "react";
import Grid from "@mui/material/Grid";
import Image from "mui-image";

const styles = {
  gridListRoot: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  gridList: {
    width: 450,
    height: '100vh',
  },
};

const TemplatePersonPage = ({ person, children }) => {
  return (
    <>
      <Grid container spacing={5} style={{ padding: "15px" }}>
        <Grid item xs={3}>
            <Image
                src={`https://image.tmdb.org/t/p/w500/${person.profile_path}`}
                alt={person.profile_path}
            />
        </Grid>

        <Grid item xs={9}>
          {children}
        </Grid>
      </Grid>
    </>
  );
};

export default TemplatePersonPage;
