import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import CreatePlace from "./pages/CreatePlace";
import PlacesMap from "./pages/PlacesMap";

function App() {
  return (
    <div>
      <nav style={{ padding: "12px", background: "#f1f3f7", display: "flex", gap: 12 }}>
        <Link to="/">Map</Link>
        <Link to="/create">Add Place</Link>
      </nav>
      <div style={{ padding: "12px" }}>
        <Routes>
          <Route path="/" element={<PlacesMap />} />
          <Route path="/create" element={<CreatePlace />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
