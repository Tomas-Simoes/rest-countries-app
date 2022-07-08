import React, { Fragment, useEffect, useState } from "react";
import "../../styles/ListingArea.css";

import Continents from "./Continents";
import CountriesList from "../Countries/CountriesList";
import Search from "../../Search";

export interface country {
  name: {
    common: string;
  };
  capital: string[];
  region: string;
  flags: {
    png: string;
  };
  population: number;
  subregion: string;
}

function ListingArea() {
  //? States
  const [fetchedContries, setFetchedContries] = useState<country[]>([]);

  const [textToSearch, setTextToSearch] = useState("");
  const [continent, setContinent] = useState("");

  const [error, setError] = useState(null);

  //? FETCH DATA
  const fetchData = async () => {
    try {
      const response = await fetch(`https://restcountries.com/v3.1/all`);

      if (!response.ok) {
        throw new Error(`ERROR [${response.status}] Something went wrong`);
      }

      const data = await response.json();

      const ALL_COUNTRIES = data.map((country: country) => {
        return {
          region: country.region,
          name: {
            common: country.name.common,
          },
          capital: country.capital,
          flags: {
            png: country.flags.png,
          },
          population: country.population,
          subregion: country.subregion,
        };
      });

      setFetchedContries(ALL_COUNTRIES);
    } catch (error: any) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderCountriesHandler = (continent: string) => {
    if (fetchedContries.length !== 0) setContinent(continent);
  };

  const searchHandler = (textToSearch: string) => {
    setTextToSearch(textToSearch);
  };

  console.log("a");

  const render = () => {
    if (error) return <p>{error}</p>;
    if (fetchedContries.length === 0) return <p> Loading... </p>;
    if (continent === "") return <p> Select a continent </p>;

    return (
      <Fragment>
        <Search onSearch={searchHandler} />
        {
          <CountriesList
            countries={fetchedContries.filter((country: country) => {
              return (
                country.region === continent &&
                (textToSearch === "" ||
                  country.name.common
                    .toLowerCase()
                    .startsWith(textToSearch.toLowerCase()))
              );
            })}
          />
        }
      </Fragment>
    );
  };

  return (
    <Fragment>
      <section id="section--map">
        <Continents onRenderCountries={renderCountriesHandler} />
      </section>

      <section id="countries--container">
        <h1> {continent}</h1>
        {render()}
      </section>
    </Fragment>
  );
}

export default ListingArea;
