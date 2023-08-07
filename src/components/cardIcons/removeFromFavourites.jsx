import React, { useContext } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

const RemoveFromFavouritesIcon = ({ object, targetContext }) => {
  const context = useContext(targetContext);

  const onUserRequest = (e) => {
    e.preventDefault();
    context.removeFromFavourites(object);
  };

return (
  <IconButton
    aria-label="remove from favorites"
    onClick={onUserRequest}
  >
    <DeleteIcon color="primary" fontSize="large" />
  </IconButton>
);
};

export default RemoveFromFavouritesIcon;
