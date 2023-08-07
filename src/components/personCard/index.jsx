import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import img from '../../images/film-poster-placeholder.png'
import { PeopleContext } from "../../contexts/peopleContext";

const styles = {
  card: { maxWidth: 345 },
  media: { height: 500 },
  avatar: {
    backgroundColor: "rgb(255, 0, 0)",
  },
};

export default function PersonCard({ person, action }) {
  const { favourites, addToFavourites } = useContext(PeopleContext);

  if (favourites.find((id) => id === person.id)) {
    person.favourite = true;
  } else {
    person.favourite = false
  }

  return (
    <Card sx={styles.card}>
      <CardHeader
        sx={styles.header}
        avatar={
          <>
            {person.favourite ? (
              <Avatar sx={styles.avatar}>
                <FavoriteIcon />
              </Avatar>
            ) : null}
          </>
        }
        title={
          <Typography variant="h5" component="p">
            {person.name}{" "}
          </Typography>
        }
      />
      <CardMedia
        sx={styles.media}
        image={
          person.profile_path
            ? `https://image.tmdb.org/t/p/w500/${person.profile_path}`
            : img
        }
      />
      <CardContent>
      </CardContent>
      <CardActions disableSpacing>
        {action(person)}
        <Link to={`/people/${person.id}`}>
          <Button variant="outlined" size="medium" color="primary">
            More Info ...
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
