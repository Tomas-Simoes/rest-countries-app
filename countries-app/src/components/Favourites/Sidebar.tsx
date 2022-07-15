import React, { Fragment } from "react";

import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store/redux-index";

import { favoriteActions } from "../../store/favouriteCountries-slice";

import "../../styles/Sidebar.css";
import "../../styles/UI/Card.css";

const Sidebar = () => {
  const dispatch = useDispatch();

  const favoriteCountries = useSelector(
    (state: RootState) => state.favoriteCountries.favoriteCountries
  );

  const removeFromFavoritesHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const countryName = (e.target as HTMLInputElement).value;

    dispatch(favoriteActions.removeFavoriteCountry(countryName));
  };

  return (
    <Fragment>
      <div className="sidebar">
        <h1> Your favorite countries </h1>

        {favoriteCountries.map((country) => (
          <div className="card" key={country.name}>
            <div>
              <img src={country.flag} alt={country.name} />
              <div className="country-container">
                <h4>
                  <b>{country.name}</b>
                </h4>

                <button
                  className="button"
                  value={country.name}
                  onClick={removeFromFavoritesHandler}
                >
                  Remove from favorites
                </button>
              </div>
            </div>
            <br />
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default Sidebar;
