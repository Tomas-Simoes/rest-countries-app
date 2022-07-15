import { configureStore } from "@reduxjs/toolkit";

import favoriteCountriesReducer from "./favouriteCountries-slice";

const store = configureStore({
  reducer: { favoriteCountries: favoriteCountriesReducer },
});

export type RootState = ReturnType<typeof store.getState>;

export const allReducersType = typeof store;
export default store;
