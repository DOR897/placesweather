
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { fetchWeather } from "../slices/weatherSlice";
import PlaceCard from "../components/placeCard";
import "../fixLeafletIcon";

function PlacesMap() {
  const dispatch = useDispatch();
  const places = useSelector((s) => s.places.places);
  const { data: weather, loading, error } = useSelector((s) => s.weather);
  const [selectedPlace, setSelectedPlace] = useState(null);

  const handleSelect = (place) => {
    setSelectedPlace(place);
    if (place?.lat && place?.lng) {
      dispatch(fetchWeather({ lat: place.lat, lon: place.lng }));
    }
  };

  return (
    <div className="container">
      <h2>Places</h2>

      <div style={{ marginBottom: 12 }}>
        {places.map((p) => (
          <div key={p.id} onClick={() => handleSelect(p)} style={{ cursor: "pointer" }}>
            <PlaceCard place={p} />
          </div>
        ))}
        {places.length === 0 && <p>No places yet. Go to “Add Place”.</p>}
      </div>

      <MapContainer
        center={[32.08, 34.78]}
        zoom={12}
        scrollWheelZoom={false}
        style={{ height: "420px", borderRadius: 8, overflow: "hidden", border: "1px solid #e6e9ef" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; OpenStreetMap contributors'
        />
        {places.map((place) => (
          <Marker
            key={place.id}
            position={[place.lat, place.lng]}
            eventHandlers={{ click: () => handleSelect(place) }}
          >
            <Popup>
              <b>{place.name}</b><br />
              {place.type}<br />
              {place.address}
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      {loading && <p style={{ marginTop: 10, fontWeight: "bold" }}>Loading weather…</p>}
      {error && <p style={{ marginTop: 10, color: "crimson" }}>Error: {error}</p>}
      {!loading && weather && (
        <div className="card" style={{ marginTop: 12 }}>
          <h3>Weather – {selectedPlace?.address}</h3>
          <div><strong>Temp:</strong> {weather.main.temp}°C</div>
          <div><strong>Humidity:</strong> {weather.main.humidity}%</div>
          <div><strong>Pressure:</strong> {weather.main.pressure} hPa</div>
          <div><strong>Conditions:</strong> {weather.weather?.[0]?.description}</div>
        </div>
      )}
    </div>
  );
}

export default PlacesMap;
