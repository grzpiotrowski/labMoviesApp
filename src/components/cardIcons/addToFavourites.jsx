import React, { useContext } from "react";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";

const AddToFavouritesIcon = ({ object, targetContext }) => {
  const context = useContext(targetContext);

  const onUserSelect = (e) => {
    e.preventDefault();
    context.addToFavourites(object);
  };
  return (
    <IconButton aria-label="add to favorites" onClick={onUserSelect}>
      <FavoriteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToFavouritesIcon;
