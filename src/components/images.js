import React from 'react';
import { useTheme } from "@material-ui/core/styles";
import { useStyles } from './style';
import Grid from '@material-ui/core/Grid';

const Images = ({ currentImages }) => {
  const theme = useTheme();
  const classes = useStyles(theme); 

  return (
    <div className={classes.root}>
      <Grid container className={classes.imageList} columns={{ xs: 12, sm: 12, md: 12 }}>
        {currentImages.map((photo) => (
          <Grid item className={classes.imageGrid} xs={12} sm={12} md={6} xl={4} key={photo.id}>
            <img className={classes.img} alt="Mars" src={photo.img_src}></img>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Images;
