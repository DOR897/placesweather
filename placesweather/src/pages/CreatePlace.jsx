
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPlace } from "../slices/placesSlice";

function CreatePlace() {
  const [form, setForm] = useState({ name: "", type: "", address: "" });
  const [submitting, setSubmitting] = useState(false);
  const dispatch = useDispatch();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      // Geocode (Nominatim)
      const qs = new URLSearchParams({ q: form.address, format: "json", limit: "1" });
      const res = await fetch(`https://nominatim.openstreetmap.org/search?${qs.toString()}`, {
        headers: { "Accept-Language": "en" },
      });
      const arr = await res.json();
      if (!Array.isArray(arr) || arr.length === 0) {
        alert("Location not found. Try a more specific address.");
        return;
      }
      const { lat, lon } = arr[0];

      dispatch(
        addPlace({
          id: Date.now(),
          name: form.name,
          type: form.type,
          address: form.address,
          lat: parseFloat(lat),
          lng: parseFloat(lon),
          createdAt: Date.now(),
        })
      );

      setForm({ name: "", type: "", address: "" });
    } catch (err) {
      console.error(err);
      alert("Failed to geocode the address.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="container">
      <h2>Add Place</h2>
      <form onSubmit={handleSubmit} className="card" style={{ display: "grid", gap: 8 }}>
        <input name="name" value={form.name} onChange={handleChange} placeholder="Name" maxLength={25} required />
        <select name="type" value={form.type} onChange={handleChange} required>
          <option value="">Select Type</option>
          <option value="Hotel">Hotel</option>
          <option value="Restaurant">Restaurant</option>
          <option value="Park">Park</option>
        </select>
        <input name="address" value={form.address} onChange={handleChange} placeholder="Address" required />
        <button type="submit" disabled={submitting}>{submitting ? "Adding..." : "Add Place"}</button>
      </form>
    </div>
  );
}

export default CreatePlace;
