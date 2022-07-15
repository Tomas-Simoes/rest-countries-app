import { Fragment } from "react";
const CountryDetails = ({
  capital,
  population,
  subregion,
}: {
  capital: string[];
  population: number;
  subregion: string;
}) => {
  return (
    <Fragment>
      <p>Capital: {capital}</p>
      <p>Population: {population}</p>
      <p>Sub Region: {subregion}</p>
    </Fragment>
  );
};

export default CountryDetails;
