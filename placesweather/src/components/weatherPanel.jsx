
import React from "react";
import "./weather-panel.css";

const weatherPanel = ({ city, data }) => {
  if (!data) return null;
  const { main, weather, wind } = data;
  const icon = weather?.[0]?.icon;
  const desc = weather?.[0]?.description;

  return (
    <div className="weather-panel">
      <div className="weather-head">
        <h3>Weather {city ? `– ${city}` : ""}</h3>
        {icon && (
          <img
            className="weather-icon"
            src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
            alt={desc}
          />
        )}
      </div>
      <div className="weather-grid">
        <div><strong>Temp:</strong> {main?.temp}°C</div>
        <div><strong>Feels:</strong> {main?.feels_like}°C</div>
        <div><strong>Humidity:</strong> {main?.humidity}%</div>
        <div><strong>Pressure:</strong> {main?.pressure} hPa</div>
        <div><strong>Wind:</strong> {wind?.speed} m/s</div>
        <div><strong>Conditions:</strong> {desc}</div>
      </div>
    </div>
  );
};

export default weatherPanel;

