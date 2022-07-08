import { Fragment, useState } from "react";
import { country } from "../Continents/ListingArea";

import "../../styles/UI/Card.css";
import "../../styles/UI/Button.css";

import CountryDetails from "./CountryDetails";

const Country = ({ country }: { country: country }) => {
  const [details, setDetails] = useState(false);

  const showDetailsHandler = () => {
    setDetails((prev) => !prev);
  };

  return (
    <div className="card">
      <img src={country.flags.png} alt={country.name.common} />
      <div className="container">
        <h4>
          <b>{country.name.common}</b>
        </h4>

        <button className="button" onClick={showDetailsHandler}>
          {details ? "Hide Details" : "Show Details"}
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
