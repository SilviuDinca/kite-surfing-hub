import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import SpotDetails from "../SpotDetails";
import yellowMarker from "../../assets/images/marker-gold.png";

var yellowIcon = L.icon({
  iconUrl: yellowMarker,

  iconSize: [28, 35], // size of the icon
  iconAnchor: [14, 35], // point of the icon which will correspond to marker's location
  popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
});

function SpotsMap(props) {
  const { spots, favoriteSpots, onRefreshFavoriteSpots } = props;
  const position = [51.505, -0.09];

  return (
    <>
      <MapContainer center={position} zoom={3} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {spots.map((spot) => {
          const favoriteSpot = favoriteSpots.find((favSpot) => {
            return favSpot.spot === parseInt(spot.id);
          });
          return favoriteSpot ? (
            <Marker
              icon={yellowIcon}
              key={`${spot.id}-${spot.name}`}
              position={[spot.lat, spot.long]}
            >
              <Popup>
                <SpotDetails
                  onRefreshFavoriteSpots={onRefreshFavoriteSpots}
                  spot={spot}
                  favoriteSpot={favoriteSpot}
                />
              </Popup>
            </Marker>
          ) : (
            <Marker
              key={`${spot.id}-${spot.name}`}
              position={[spot.lat, spot.long]}
            >
              <Popup>
                <SpotDetails
                  onRefreshFavoriteSpots={onRefreshFavoriteSpots}
                  spot={spot}
                  favoriteSpot={favoriteSpot}
                />
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </>
  );
}
export default SpotsMap;
