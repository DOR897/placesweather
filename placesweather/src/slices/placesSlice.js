
import { createSlice } from "@reduxjs/toolkit";

const placesSlice = createSlice({
  name: "places",
  initialState: { places: [] },
  reducers: {
    addPlace: (state, action) => {
      state.places.push(action.payload);
    },
  },
});

export const { addPlace } = placesSlice.actions;
export default placesSlice.reducer;

