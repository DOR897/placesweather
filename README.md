📘 README.md
# Weather on Wheels

React + Redux app that lets you add places, see them on a Leaflet map, and fetch current weather for each selected place using OpenWeather.

## Features
- Add places with **name / type / address**
- Address **geocoding** (OpenStreetMap Nominatim) → lat/lon
- Leaflet map with markers for all places
- Click a place/marker → fetch **current weather** (OpenWeather)
- Loading & error handling, nice panel with icon + stats

## Getting Started

```bash
npm install


Create .env (project root):

REACT_APP_API_KEY=YOUR_OPENWEATHER_KEY


Run:

npm start

Scripts

npm start – Dev server

npm run build – Production build

Tech

React 18, React Router 6

Redux Toolkit, React-Redux

Leaflet + react-leaflet

Axios


---

## 🚀 איך להריץ
1) שים את כל הקבצים כמו כאן בתיקייה `Weather-on-wheels`.  
2) התקן תלויות:
```bash
npm install


צור .env עם המפתח שלך (ראו למעלה), ואז:

npm start