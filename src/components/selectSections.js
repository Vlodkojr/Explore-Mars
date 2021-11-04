import React, { useEffect, useState } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useTheme } from '@material-ui/core';
import Images from './images';
import Pagination from './pagination';
import Loader from './loader';
import { useStyles } from './style';
import CamerasFilter from './cameras';

export default function SelectSections() {
  const theme = useTheme();
  const classes = useStyles(theme);
  const [isLoading, setIsLoading] = useState(false);
  const [rover, setRover] = useState('');
  const [sol, setSol] = useState('');
  const [camera, setCamera] = useState('');
  const [showPhotos, setShowPhotos] = useState(false);
  const [selectAll, setSelectAll] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [photosPerPage] = useState(10);
  const [photoMars, setPhotoMars] = useState([]);
  const [noPhotos, setNoPhotos] = useState(false);

  const api_key = process.env.REACT_APP_NASA_KEY;

  const api = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=${sol}camera=${camera}&api_key=${api_key}`;

  useEffect(() => {
    if (!sol || !camera) {
      setSelectAll(false);
    }

    if (rover && sol && camera) {
      setSelectAll(true);
      setCurrentPage(1);
    }
    if (showPhotos) {
      setNoPhotos(false);
      setIsLoading(true);
      try {
        fetch(api)
          .then(response => {
            return response.json();
          })
          .then(data => {
            if (!data.photos.length) {
              setNoPhotos(true);
            }
            setPhotoMars(data.photos);
            setShowPhotos(false);
            setIsLoading(false);
            setSelectAll(false);
          })
      } catch (error) {
        console.log('Error :', error);
      }
    }
  }, [showPhotos, api, rover, camera, sol]);

  const handleChangeRover = (event) => {
    setRover(event.target.value);
    setPhotoMars([]);
  };
  const handleChangeSol = (event) => {
    setSol(event.target.value);
    setPhotoMars([]);
  }
  const handleChangeCamera = (event) => {
    setCamera(event.target.value);
    setPhotoMars([]);
  }

  const indexOfLastPhoto = currentPage * photosPerPage;
  const currentImages = photoMars.slice(0, indexOfLastPhoto);

  const paginate = () => setCurrentPage(currentPage + 1);
  const showImages = () => {
    if (!isLoading && photoMars.length) {
      return (<div className={classes.imageList}>
        <Images currentImages={currentImages} />
        <Pagination
          currentImages={currentImages.length}
          photosPerPage={photosPerPage}
          totalPhotos={photoMars?.length}
          paginate={paginate}
        />
      </div>)
    } else if (isLoading) {
      return <Loader />
    } else if (noPhotos) {
      return (
        <div>
          <p className={classes.noPhoto}>There are no photos for these options</p>
        </div>
      )
    }
  }

  if (rover === "opportunity" || rover === 'spirit') {
    if (camera === "mast" || camera === "chemcam" || camera === "mahli" || camera === "mardi") {
      setCamera('');
    }
  } else {
    if (camera === "pancam" || camera === "minites") {
      setCamera('');
    }
  }

  return (
    <div className={classes.general}>
      <main className={classes.wrapper}>
        <h1 className={classes.label}>Explore Mars</h1>
        <div className={classes.selectWrapper}>
          <div className={classes.selectOptions}>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel variant='outlined'>Rover</InputLabel>
              <Select
                id="demo-simple-select-outlined"
                value={rover}
                onChange={handleChangeRover}
                label="Rover"
              >
                <MenuItem value="curiosity">Curiosity</MenuItem>
                <MenuItem value="opportunity">Opportunity</MenuItem>
                <MenuItem value="spirit">Spirit</MenuItem>
              </Select>
            </FormControl>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel variant='outlined'>Camera</InputLabel>
              <CamerasFilter
                rover={rover}
                camera={camera}
                handleChangeCamera={handleChangeCamera}
              />
            </FormControl>
            <TextField
              id="outlined-number"
              label="Sol"
              type="number"
              value={sol}
              InputProps={{ inputProps: { min: 0 } }}
              variant="outlined"
              onChange={handleChangeSol}
            />
          </div>
        </div>
        <div className={classes.btn}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => { setShowPhotos(true) }}
            disabled={!selectAll}
          >
            Show photos
          </Button>
        </div>
        {showImages()}
      </main>
      <footer id='footer' className={classes.footer}>
        <p className={classes.footerParagraph}>© 2021 Created by Volodymyr Romanovskyi Email: volodymyrrom1@gmail.com</p>
      </footer>
    </div>
  );
}
