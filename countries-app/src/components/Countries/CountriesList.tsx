import { Fragment } from "react";
import { country } from "../Continents/ListingArea";

import Country from "./Country";

const CountriesList = ({ countries }: { countries: country[] }) => {
  return (
    <Fragment>
      {countries.length === 0 ? (
        <p> There is no results for your search </p>
      ) : (
        countries.map((country: country) => (
          <Country key={country.name.common} country={country} />
        ))
      )}
    </Fragment>
  );
};

export default CountriesList;
