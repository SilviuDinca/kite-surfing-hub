import {
  Typography,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableCell,
  TableRow,
  TextField,
  Container,
} from "@mui/material";
import { useState } from "react";
import styles from "./spotsTable.module.css";
const SpotsTable = (props) => {
  const [inputText, setInputText] = useState("");
  const { spots } = props;

  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h5">Location</Typography>
      <TextField
        margin="normal"
        onChange={(event) => {
          setInputText(event.target.value);
        }}
        id="search"
        size="small"
        label="Search"
        name="search"
        autoComplete="type"
        autoFocus
      />
      <TableContainer>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow className={styles.tableHead}>
              <TableCell>Name</TableCell>
              <TableCell align="right">Country</TableCell>
              <TableCell align="right">Latitude</TableCell>
              <TableCell align="right">Longitude</TableCell>
              <TableCell align="right">Wind Probability</TableCell>
              <TableCell align="right">When to go</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {spots
              .map((item) => {
                return {
                  ...item,
                  probability: `${item.probability}%`,
                };
              })
              .filter((item) => {
                const lowerCaseInput = inputText.toLowerCase();
                if (
                  inputText === "" ||
                  item.name.toLowerCase().includes(lowerCaseInput) ||
                  item.country.toLowerCase().includes(lowerCaseInput) ||
                  item.lat.toLowerCase().includes(lowerCaseInput) ||
                  item.long.toLowerCase().includes(lowerCaseInput) ||
                  item.month.toLowerCase().includes(lowerCaseInput) ||
                  item.probability.toLowerCase().includes(lowerCaseInput)
                ) {
                  return true;
                }
                return false;
              })
              .map((spot) => (
                <TableRow
                  className={styles.tableRow}
                  key={`${spot.id}-${spot.name}`}
                >
                  <TableCell component="th" scope="row">
                    {spot.name}
                  </TableCell>
                  <TableCell align="right">{spot.country}</TableCell>
                  <TableCell align="right">{spot.lat}</TableCell>
                  <TableCell align="right">{spot.long}</TableCell>
                  <TableCell align="right">{spot.probability}</TableCell>
                  <TableCell align="right">{spot.month}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};
export default SpotsTable;
