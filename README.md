Weather-on-Wheels

Small React app that lets you create places, view them on a Leaflet map, and fetch current weather (OpenWeather) for a selected place. Addresses are geocoded to lat/lon using OpenStreetMap Nominatim.

Tech

React 18 (CRA), React Router 6

Redux Toolkit + React-Redux

Leaflet + react-leaflet (with icon fix)

Axios

OpenWeather “Current weather data” API

Nominatim (OpenStreetMap) for free geocoding

Project structure
weather-on-wheels/
├─ public/
│  └─ index.html
├─ src/
│  ├─ App.jsx
│  ├─ App.css
│  ├─ index.js
│  ├─ index.css
│  ├─ fixLeafletIcon.js              # fixes missing default marker icons
│  ├─ components/
│  │  ├─ PlaceCard.jsx
│  │  ├─ WeatherPanel.jsx
│  │  └─ weather-panel.css
│  ├─ pages/
│  │  ├─ CreatePlace.jsx             # form (name/type/address) + geocoding
│  │  └─ PlacesMap.jsx               # list + map + weather panel
│  ├─ slices/
│  │  ├─ placesSlice.js              # { places: [...] }
│  │  └─ weatherSlice.js             # async fetchWeather({lat,lon})
│  └─ store/
│     └─ store.js                    # RTK store (places, weather)
├─ .env                              # REACT_APP_API_KEY=...
├─ .gitignore
├─ package.json
└─ README.md

Prerequisites

Node 18+ and npm

OpenWeather API key (free): https://openweathermap.org/api

Create a .env file in the project root:

REACT_APP_API_KEY=YOUR_OPENWEATHER_KEY


After changing .env, stop and re-run the dev server.

Install & run
npm install
npm start


Dev server: http://localhost:3000

Production build: npm run build

How it works

Create Place

Go to Add Place, fill Name (≤25), Type (Hotel/Restaurant/Park), Address.

On submit we call Nominatim to geocode the address → lat, lng.

The place is added to the Redux places slice.

Map & List

On Map you’ll see a list of places and a Leaflet map with markers.

Click a list item or a marker to select a place.

Weather Panel

Selecting a place dispatches fetchWeather({ lat, lon }) (OpenWeather).

While fetching → “Loading weather…”.

On success shows temp/feels/pressure/humidity/wind + icon.

On error (e.g., quota/invalid key) shows an error message.

Important files

src/fixLeafletIcon.js
Leaflet’s default marker images won’t load in bundlers unless you map them.
This file wires the icon URLs. Ensure it’s imported once (e.g., in PlacesMap.jsx):

import "../fixLeafletIcon";


src/slices/weatherSlice.js
Uses RTK createAsyncThunk:

export const fetchWeather = createAsyncThunk(
  "weather/fetchWeather",
  async ({ lat, lon }) => {
    const { data } = await axios.get(
      "https://api.openweathermap.org/data/2.5/weather",
      { params: { lat, lon, units: "metric", appid: process.env.REACT_APP_API_KEY } }
    );
    return data;
  }
);

UX notes (matching the assignment)

Creation page validates name length and requires type & address.

Loading state on create (while geocoding) and on weather fetch.

Map page shows all places, clicking a place centers/opens details and fetches weather.

Filtering by type (optional stretch) can be added via a simple select that filters places before rendering.

Troubleshooting

“Module not found: leaflet images / css”
Make sure leaflet is installed and import "leaflet/dist/leaflet.css"; exists (in index.js). Also keep fixLeafletIcon.js imported once.

Hooks error: “function is not a React component”
Component names must start with an uppercase letter: CreatePlace, PlacesMap.

Weather not updating
Verify .env has REACT_APP_API_KEY and you restarted npm start. Check browser console for API errors.

Nominatim returns no results
Try a more precise address (city, street, number, country). API is rate-limited—avoid rapid submits.

Scripts
npm start        # dev
npm run build    # production build

Future improvements (nice to have)

Type filter on the map list

Forecast chart (5-day / 3-hour data) with Chart.js

Persist places to localStorage or a backend

Unit tests for slices and components

License

MIT (or your choice)