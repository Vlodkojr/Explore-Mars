import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectOptions: {
    display: 'flex',
    justifyContent: 'space-between',
    '@media (max-width: 700px)': {
      flexDirection: 'column',
    },
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch'
    },
  },
  wrapper: {
    margin: '1% 2%',
  },
  selectWrapper: {
    display: 'flex',
    justifyContent: 'center',
    margin: '0, 2%'
  },
  btn: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '2%',
    marginBottom: '5%',
    opacity: '1'
  },
  label: {
    display: 'flex',
    justifyContent: 'center',
    fontSize: '30px',
    fontFamily: 'Helvetica',
  },
  footerParagraph: {
    color: 'white',
    fontSize: '1em',
    marginLeft: '10px',
  },
  footer: {
    bottom: 0,
    height: '5vh',
    backgroundColor: '#2a2e6d',
    display: 'flex',
    alignItems: 'center',
    '@media (max-width: 700px)': {
      fontSize: '10px',
    },
    '@media (max-width: 370px)': {
      fontSize: '8px',
    },
  },
  general: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    position: 'relative',
    backgroundImage: 'url(https://www.handelsblatt.com/images/mars-mission-curiosity/14965850/2-format2020.jpg)',
    '@media (max-width: 1100px)': {
      backgroundImage: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Mars_Spirit.jpg/1200px-Mars_Spirit.jpg)',
    },
    '@media (max-width: 700px)': {
      backgroundImage: 'url(https://mars.nasa.gov/system/news_items/main_images/8414_1_MAIN_mars-rover-opportunity-tracks-Sol3754B-pia18605-CROPPED.jpg)',
    },
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
  },
  loader: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '40px',
  },
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridGap: theme.spacing(3),
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    backgroundColor: theme.palette.background.paper,
  },
  imageList: {
    width: '100%',
    padding: 0
  },
  noPhoto: {
    display: 'flex',
    justifyContent: 'center',
    fontSize: '1.5em',
    color: 'rgb(211, 195, 106)',
    fontWeight: 'bold'
  }
}));