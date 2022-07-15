import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

interface favoriteCountry {
  name: string;
  flag: string;
}

interface initialState {
  favoriteCountries: favoriteCountry[];
}

const favoriteInitialState: initialState = {
  favoriteCountries: [],
};

const favoriteCountriesSlice = createSlice({
  name: "favouriteCountries",
  initialState: favoriteInitialState,
  reducers: {
    addFavoriteCountry(state, action) {
      state.favoriteCountries.push({
        name: action.payload.name,
        flag: action.payload.flag,
      });
    },

    removeFavoriteCountry(state, action) {
      state.favoriteCountries = state.favoriteCountries.filter(
        (country) => country.name !== action.payload
      );
    },
  },
});

export const favoriteActions = favoriteCountriesSlice.actions;
export default favoriteCountriesSlice.reducer;
