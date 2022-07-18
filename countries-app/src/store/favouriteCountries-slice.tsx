import { createSlice } from "@reduxjs/toolkit";

interface IActionAdd {
  type: string;
  payload: {
    name: string;
    flag: string;
  };
}

interface IActionRemove {
  type: string;
  payload: string;
}

interface IFavoriteCountry {
  name: string;
  flag: string;
}

export interface initialState {
  favoriteCountries: IFavoriteCountry[];
}

const favoriteInitialState: initialState = {
  favoriteCountries: [],
};

const favoriteCountriesSlice = createSlice({
  name: "favouriteCountries",
  initialState: favoriteInitialState,
  reducers: {
    addFavoriteCountry(state, action: IActionAdd) {
      state.favoriteCountries.push({
        name: action.payload.name,
        flag: action.payload.flag,
      });
    },

    removeFavoriteCountry(state, action: IActionRemove) {
      state.favoriteCountries = state.favoriteCountries.filter(
        (country) => country.name !== action.payload
      );
    },
  },
});

export const favoriteActions = favoriteCountriesSlice.actions;
export default favoriteCountriesSlice.reducer;
