
import React from "react";

const placeCard = ({ place }) => (
  <div className="card">
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div>
        <strong>{place.name}</strong> · {place.type}
        <div>{place.address}</div>
      </div>
      <div style={{ textAlign: "right", color: "#667085", fontSize: 12 }}>
        <div>Lat: {place.lat.toFixed(4)}</div>
        <div>Lng: {place.lng.toFixed(4)}</div>
      </div>
    </div>
  </div>
);

export default placeCard;

