
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchWeather = createAsyncThunk(
  "weather/fetchWeather",
  async ({ lat, lon }, { rejectWithValue }) => {
    try {
      const apiKey = process.env.REACT_APP_API_KEY;
      if (!apiKey) throw new Error("Missing REACT_APP_API_KEY in .env");
      const { data } = await axios.get(
        "https://api.openweathermap.org/data/2.5/weather",
        { params: { lat, lon, units: "metric", appid: apiKey } }
      );
      return data;
    } catch (err) {
      return rejectWithValue(
        err?.response?.data?.message || err.message || "Weather fetch failed"
      );
    }
  }
);

const weatherSlice = createSlice({
  name: "weather",
  initialState: { data: null, loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export default weatherSlice.reducer;

