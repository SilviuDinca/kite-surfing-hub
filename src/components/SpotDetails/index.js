import { Typography, Button } from "@mui/material";
import styles from "./spotDetails.module.css";
import { addFavorite, deleteFavorite } from "../../api/favorite";
import starOn from "../../assets/images/star-on.png";

function SpotDetails(props) {
  const { spot, favoriteSpot, onRefreshFavoriteSpots } = props;
  const handleAddToFavorites = () => {
    addFavorite({
      spot: parseInt(spot.id),
    }).then(() => {
      onRefreshFavoriteSpots();
    });
  };

  const handleDeleteFavorites = () => {
    deleteFavorite(favoriteSpot.id).then(() => {
      onRefreshFavoriteSpots();
    });
  };

  return (
    <div>
      <div className={styles.barSpotDetails}>
        <Typography variant="h6">{spot.name}</Typography>
        {favoriteSpot ? (
          <img
            className={styles.starImg}
            src={starOn}
            alt="favorite-star"
            width="10%"
            height="20px"
          />
        ) : null}
      </div>
      <Typography className={styles.country} variant="subtitle1">
        {spot.country}
      </Typography>
      <Typography className={styles.spotDetail} variant="subtitle2">
        Wind Probability
      </Typography>
      <Typography variant="subtitle2">{spot.probability}%</Typography>
      <Typography className={styles.spotDetail} variant="subtitle2">
        Latitude
      </Typography>
      <Typography variant="subtitle2">{spot.lat}</Typography>
      <Typography className={styles.spotDetail} variant="subtitle2">
        Longitude
      </Typography>
      <Typography variant="subtitle2">{spot.long}</Typography>
      <Typography className={styles.spotDetail} variant="subtitle2">
        When to go
      </Typography>
      <Typography variant="subtitle2">{spot.month}</Typography>
      <Button
        onClick={favoriteSpot ? handleDeleteFavorites : handleAddToFavorites}
        variant="contained"
        color={favoriteSpot ? "error" : "warning"}
      >
        {favoriteSpot ? "Remove from favorites" : "+ Add to favorites"}
      </Button>
    </div>
  );
}
export default SpotDetails;
