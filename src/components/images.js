import React from 'react';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import { useTheme } from "@material-ui/core/styles";
import { useStyles } from './style';

const Images = ({ currentImages }) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  let columns;
  let rows = document.body.clientWidth >= 1024 ? 3 : 2;
  if(document.body.clientWidth <= 1024){
    columns=1;
  } else if(document.body.clientWidth >= 1024 && document.body.clientWidth < 1500){
     columns=2;
  } else {
    columns=3;
  } 

  return (
    <div className={classes.root}>
      <ImageList className={classes.imageList} cols={columns}>
        {currentImages.map((photo) => (
          <ImageListItem className={classes.image} cols={1} rows={rows} key={photo.id}>
            <img alt="Mars" src={photo.img_src}></img>
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}

export default Images;
