import React from 'react';
import { Card, CardMedia, CardContent, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const styles = {
  root: {
    display: 'flex',
    overflowX: 'auto',
    width: '100%',
    padding: 1
  },
  card: {
    minWidth: '240px',
    margin: '0.5rem',
  },
  media: {
    height: 340,
  },
};

const CreditList = ({ castData }) => {
  return (
    <Box sx={styles.root}>
      {castData.cast.map((item, index) => (
        <Link to={`/movies/${item.id}`}>
        <Card sx={styles.card} key={index}>
          {item.poster_path ? (
            <CardMedia
              component="img"
              sx={styles.media}
              image={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
              alt={item.original_title}
            />
          ) : (
            <CardContent>
              <Typography variant="h5" component="h2">
                {item.original_title}
              </Typography>
            </CardContent>
          )}
        </Card>
        </Link>
      ))}
    </Box>
  );
};

export default CreditList;
