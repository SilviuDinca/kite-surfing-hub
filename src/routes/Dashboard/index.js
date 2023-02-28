import { useEffect, useState } from "react";
import AppBar from "../../components/AppBar";
import SpotsMap from "../../components/SpotsMap";
import { getSpots } from "../../api/spot";
import { getFavorites } from "../../api/favorite";
import SpotsTable from "../../components/SpotsTable";
import FilterSpot from "../../components/FilterSpot";

const Dashboard = (props) => {
  const [spots, setSpots] = useState([]);
  const [favoriteSpots, setFavoriteSpots] = useState([]);
  const { user, onLogout } = props;

  const handleClearSpots = () => {
    getSpots().then((response) => {
      setSpots(response.data);
    });
  };

  const handleFilterSpots = (params) => {
    getSpots({
      country: params.country,
      probability: params.wind,
    }).then((response) => {
      setSpots(response.data);
    });
  };

  const refreshSpots = () => {
    getSpots().then((response) => {
      setSpots(response.data);
    });
  };

  const refreshFavoriteSpots = () => {
    getFavorites().then((response) => {
      setFavoriteSpots(response.data);
    });
  };

  useEffect(() => {
    getSpots().then((response) => {
      setSpots(response.data);
    });
    getFavorites().then((response) => {
      setFavoriteSpots(response.data);
    });
  }, []);

  return (
    <>
      <AppBar onRefreshSpots={refreshSpots} user={user} onLogout={onLogout} />
      <FilterSpot
        onFilterSpots={handleFilterSpots}
        onClearSpots={handleClearSpots}
      />
      <SpotsMap
        onRefreshFavoriteSpots={refreshFavoriteSpots}
        spots={spots}
        favoriteSpots={favoriteSpots}
      />
      <SpotsTable spots={spots} />
    </>
  );
};
export default Dashboard;
