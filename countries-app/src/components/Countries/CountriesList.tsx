import { Fragment } from "react";
import { country } from "../Continents/ListingArea";

import "../../styles/UI/Card.css";

import Country from "./Country";

const CountriesList = ({ countries }: { countries: country[] }) => {
  return (
    <Fragment>
      {countries.length === 0 ? (
        <p> There is no results for your search </p>
      ) : (
        countries.map((country: country) => (
          <div className="card" key={country.name.common}>
            <Country key={country.name.common} country={country} />
          </div>
        ))
      )}
    </Fragment>
  );
};

export default CountriesList;
