import { Fragment } from "react";
import { country } from "../../App";

import Country from "./Country";

const CountriesList = ({ countries }: { countries: country[] }) => {
  return (
    <Fragment>
      {countries.map((country: country) => (
        <Country country={country} />
      ))}
    </Fragment>
  );
};

export default CountriesList;
