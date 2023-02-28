import { Button, Fab, TextField, Popover } from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import { useState } from "react";
import styles from "./filterSpot.module.css";

const FilterSpot = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [country, setCountry] = useState("");
  const [filterApplied, setFilterApplied] = useState(false);
  const [wind, setWind] = useState("");
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClearFilter = () => {
    props.onClearSpots();
    setFilterApplied(false);
    setCountry("");
    setWind("");
  };

  const handleApplyFilter = () => {
    const params = {};
    if (country !== "") {
      params.country = country;
    }

    if (wind !== "") {
      params.wind = wind;
    }

    props.onFilterSpots(params);
    setFilterApplied(true);
  };

  return (
    <>
      <div className={styles.fab}>
        <Fab onClick={handleClick} size="medium" variant="extended">
          <FilterListIcon /> Filter
        </Fab>
      </div>

      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <div className={styles.popover}>
          <TextField
            className={styles.filterInput}
            label="Country"
            variant="standard"
            value={country}
            onChange={(event) => setCountry(event.target.value)}
          />
          <TextField
            className={styles.filterInput}
            label="Wind Probability"
            variant="standard"
            value={wind}
            onChange={(event) => setWind(event.target.value)}
          />
          <Button
            onClick={filterApplied ? handleClearFilter : handleApplyFilter}
            className={styles.filterBtn}
            variant="contained"
          >
            {filterApplied ? "CLEAR FILTER" : "APPLY FILTER"}
          </Button>
        </div>
      </Popover>
    </>
  );
};
export default FilterSpot;
