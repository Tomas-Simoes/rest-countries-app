import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { country } from "../Continents/ListingArea";
import CountryDetails from "./CountryDetails";

import type { RootState } from "../../store/redux-index";
import { favoriteActions } from "../../store/favouriteCountries-slice";

import "../../styles/UI/Card.css";

const Country = ({ country }: { country: country }) => {
  const dispatch = useDispatch();
  const [details, setDetails] = useState(false);

  const isFavorite = useSelector((state: RootState) =>
    state.favoriteCountries.favoriteCountries.find(
      (favCountry) => country.name.common === favCountry.name
    )
  );

  const showDetailsHandler = () => {
    setDetails((prev) => !prev);
  };

  const updateFavoritesHandler = () => {
    if (!isFavorite)
      dispatch(
        favoriteActions.addFavoriteCountry({
          name: country.name.common,
          flag: country.flags.png,
        })
      );
    else dispatch(favoriteActions.removeFavoriteCountry(country.name.common));
  };

  return (
    <div>
      <img src={country.flags.png} alt={country.name.common} />
      <div className="country-container">
        <h4>
          <b>{country.name.common}</b>
        </h4>

        <button className="button" onClick={showDetailsHandler}>
          {details ? "Hide Details" : "Show Details"}
        </button>

        <button className="button" onClick={updateFavoritesHandler}>
          {!isFavorite ? "Add to" : "Remove from"} favorites
        </button>

        {details && (
          <CountryDetails
            capital={country.capital}
            population={country.population}
            subregion={country.subregion}
          />
        )}
      </div>
    </div>
  );
};

export default Country;
