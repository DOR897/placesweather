
import { configureStore } from "@reduxjs/toolkit";
import placesReducer from "../slices/placesSlice";
import weatherReducer from "../slices/weatherSlice";

export const store = configureStore({
  reducer: {
    places: placesReducer,
    weather: weatherReducer,
  },
});

