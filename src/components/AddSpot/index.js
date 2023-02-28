import {
  Button,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  Typography,
  TextField,
} from "@mui/material";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { useState } from "react";
import styles from "./addSpot.module.css";
import { addSpot } from "../../api/spot";
import dayjs from "dayjs";

const AddSpot = (props) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(dayjs());
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");

  const handleCancel = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleConfirm = () => {
    addSpot({
      name: city,
      country: country,
      month: value.format("MMMM"),
    }).then((response) => {
      props.refreshSpots();
    });
    setOpen(false);
  };

  const handleChange = (newValue) => {
    setValue(newValue);
  };
  return (
    <div className={styles.addSpot}>
      <Button
        size="medium"
        color="primary"
        variant="contained"
        onClick={handleOpen}
      >
        Add Spot
      </Button>
      <Dialog open={open} onClose={handleCancel}>
        <DialogTitle>Add Spot</DialogTitle>
        <DialogContent className={styles.dialogContent}>
          <TextField
            className={styles.spot}
            value={city}
            onChange={(event) => setCity(event.target.value)}
            label="Name"
            variant="standard"
          />
          <TextField
            className={styles.spot}
            value={country}
            onChange={(event) => setCountry(event.target.value)}
            label="Country"
            variant="standard"
          />
          <Typography className={styles.highSeason} variant="h6">
            High Season
          </Typography>
          <DesktopDatePicker
            label="Date desktop"
            view="month"
            inputFormat="MMMM"
            value={value}
            onChange={handleChange}
            renderInput={(params) => <TextField {...params} />}
          />
        </DialogContent>
        <DialogActions>
          <Button color="error" autoFocus onClick={handleCancel}>
            CANCEL
          </Button>
          <Button onClick={handleConfirm} autoFocus>
            CONFIRM
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddSpot;
