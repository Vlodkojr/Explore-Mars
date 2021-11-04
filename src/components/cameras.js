import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

export default function CamerasFilter({ rover, camera, handleChangeCamera }) {

  if (rover === "curiosity") {    
    return (
      <Select
        labelId="demo-simple-select-outlined-label"
        id="demo-simple-select-outlined"
        value={camera}
        onChange={handleChangeCamera}
        label="Camera"
      >
        <MenuItem value="fhaz">Front Hazard Avoidance Camera</MenuItem>
        <MenuItem value="rhaz">Rear Hazard Avoidance Camera</MenuItem>
        <MenuItem value="mast">Mast Camera</MenuItem>
        <MenuItem value="chemcam">Chemistry and Camera Complex</MenuItem>
        <MenuItem value="mahli">Mars Hand Lens Imager</MenuItem>
        <MenuItem value="mardi">Mars Descent Imager</MenuItem>
        <MenuItem value="navcam">Navigation Camera</MenuItem>
      </Select>
    )
  } else {   
    return (
      <Select
        labelId="demo-simple-select-outlined-label"
        id="demo-simple-select-outlined"
        value={camera}
        onChange={handleChangeCamera}
        label="Camera"
      >
        <MenuItem value="fhaz">Front Hazard Avoidance Camera</MenuItem>
        <MenuItem value="rhaz">Rear Hazard Avoidance Camera</MenuItem>
        <MenuItem value="navcam">Navigation Camera</MenuItem>
        <MenuItem value="pancam">Panoramic Camera</MenuItem>
        <MenuItem value="minites">Miniature Thermal Emission Spectrometer (Mini-TES)</MenuItem>
      </Select>
    )
  }
}