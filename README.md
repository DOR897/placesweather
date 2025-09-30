# 🌦️ Weather on Wheels

![Weather on Wheels](https://img.shields.io/badge/React-19-blue?style=flat-square&logo=react) 
![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-%23764ABC.svg?style=flat-square&logo=redux&logoColor=white)
![Leaflet](https://img.shields.io/badge/Leaflet-Map-green?style=flat-square&logo=leaflet)

A React + Redux web application that lets you **create places on a map**, view them, and get **real-time weather data** for each location using the **OpenWeather API**.  
Built with **React 19, Redux Toolkit, React-Leaflet, Axios**, and styled with **CSS Flex/Grid**.

---

## 📸 Demo

👉 [Demo Video on YouTube](https://your-demo-link-here.com) *(replace with your uploaded link)*  

![App Screenshot](https://via.placeholder.com/900x400?text=Weather+on+Wheels+Demo)  

---

## 🚀 Features

- 📍 **Add Places** (Hotels, Restaurants, Parks, etc.) with geocoded coordinates  
- 🗺️ **Interactive Map** powered by **React-Leaflet**  
- 🌦️ **Weather Panel** with real-time weather from **OpenWeather**  
- 🔄 **Redux Toolkit** for global state management  
- 🎨 **Responsive UI** styled with **CSS Grid & Flexbox**  
- ⚡ Fast development with **Vite**  

---

## 🏗️ Workflow Diagram

```mermaid
flowchart TD
    A[User Creates Place] --> B[Redux: placesSlice]
    B --> C[Leaflet Map Updates]
    C --> D[Click Place]
    D --> E[Dispatch fetchWeather]
    E --> F[Redux: weatherSlice]
    F --> G[Weather Panel Updates]

📂 Directory Structure 
placesweather/
│── public/                # Static files
│── src/
│   ├── components/         # Reusable UI components
│   │   ├── PlaceCard.jsx
│   │   ├── weatherPanel.css
│   │   └── WeatherPanel.jsx
│   │
│   ├── pages/              # Main pages
│   │   ├── CreatePlace.jsx
│   │   └── PlacesMap.jsx
│   │
│   ├── slices/             # Redux Toolkit slices
│   │   ├── placesSlice.js
│   │   └── weatherSlice.js
│   │
│   ├── store/              # Redux store
│   │   └── store.js
│   │
│   ├── fixLeafletIcon.js   # Fix for Leaflet marker icons
│   ├── App.jsx             # App entry
│   ├── index.js            # Main React entry
│   └── index.css           # Global styles
│
├── .env                    # API keys (OpenWeather)
├── package.json
└── README.md

⚙️ Prerequisites

Node.js (v18+ recommended)

NPM or Yarn

OpenWeather API Key → Get Free Key


🛠️ Setup & Installation

Clone the repo

git clone https://github.com/YOUR_USERNAME/placesweather.git
cd placesweather


Install dependencies

npm install


Set up environment variables

Create a .env file in the project root:

REACT_APP_API_KEY=your_openweather_api_key


Run the app

npm run dev


Your app will be running at 👉 http://localhost:3000

✅ Usage

Open the app in your browser.

Use the "Create Place" form to add new places.

Click a place on the map or list to see its weather details.

Explore multiple locations and compare their weather!

🌐 Tech Stack

Frontend: React 19, React Router, React-Leaflet

State Management: Redux Toolkit

API Calls: Axios

Weather API: OpenWeather

Styling: CSS (Flexbox, Grid, Bootstrap optional)

🚧 Future Improvements

🔑 Add Google & Facebook OAuth Login

📊 Display more weather metrics (UV index, air quality)

🗂️ Save places persistently in a backend (FastAPI / Firebase)

🛠️ Dockerize project for deployment

👨‍💻 Author

Dor X
🔗 GitHub
