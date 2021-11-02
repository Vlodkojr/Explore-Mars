import React from 'react';
import Button from '@material-ui/core/Button';
import { useStyles } from './style';

const Pagination = ({currentImages, photosPerPage, totalPhotos, paginate }) => {
  const classes = useStyles();
  let disabled = false;
  
  if(currentImages === totalPhotos) {
    disabled = true;
  }
  
  return (
    <div className={classes.btn}>
      <Button
        variant="contained"
        color="primary"
        onClick={() => { paginate() }}
        disabled={disabled}
        >
        Load More...
      </Button>
    </div>    
  );
};

export default Pagination;