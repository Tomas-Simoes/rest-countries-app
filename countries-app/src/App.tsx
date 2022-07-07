import React, { Fragment, useState } from "react";
import "./styles/App.css";

import Continents from "./components/Continents/Continents";

//TODO Fetch all the contries information when the app starts

function App() {
  // const [continent, setContinent] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const renderCountriesHandler = async (continent: string) => {
    try {
      //! UPDATE (check TODO)
      setIsLoading(true);

      const response = await fetch(
        `https://restcountries.com/v3.1/region/${continent}`
      );

      if (!response.ok) {
        throw new Error(`ERROR [${response.status}] Something went wrong`);
      }

      const continentData = await response.json();

      console.log(continentData);
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <Fragment>
      <section id="section--map">
        <Continents onRenderCountries={renderCountriesHandler} />
      </section>

      <section id="countries--container"></section>
    </Fragment>
  );
}

export default App;
