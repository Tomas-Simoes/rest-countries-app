import React, { Fragment, useEffect, useState } from "react";
import "./styles/App.css";

import Continents from "./components/Continents/Continents";
import CountriesList from "./components/Countries/CountriesList";

//TODO Fetch all the contries information when the app starts

export interface country {
  name: {
    common: string;
    nativeName: string;
  };
  capital: string[];
  region: string;
  flags: {
    png: string;
    svg: string;
  };
  languages: {};
  currencies: {};
}

let ALL_COUNTRIES: country[];

function App() {
  const [renderedContries, setRenderedContries] = useState<country[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setIsLoading(true);

      const response = await fetch(`https://restcountries.com/v3.1/all`);

      if (!response.ok) {
        throw new Error(`ERROR [${response.status}] Something went wrong`);
      }

      const data = await response.json();

      ALL_COUNTRIES = data.map((country: country) => {
        return {
          name: {
            common: country.name.common,
            nativeName: country.name.nativeName,
          },
          capital: country.capital,
          region: country.region,
          flags: {
            png: country.flags.png,
            svg: country.flags.svg,
          },
          language: country.languages,
          currencies: country.currencies,
        };
      });
    } catch (error: any) {
      setError(error.message);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderCountriesHandler = (continent: string) => {
    const filteredCountries = ALL_COUNTRIES.filter(
      (country: country) => country.region === continent
    );

    setRenderedContries(filteredCountries);
  };

  let content = <p> Select a region </p>;

  if (renderedContries.length > 0)
    content = <CountriesList countries={renderedContries} />;
  if (error) content = <p> {error} </p>;
  if (isLoading) content = <p> Loading... </p>;

  return (
    <Fragment>
      <section id="section--map">
        <Continents onRenderCountries={renderCountriesHandler} />
      </section>

      <section id="countries--container"> {content} </section>
    </Fragment>
  );
}

export default App;
