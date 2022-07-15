import { Fragment } from "react";
import ListingArea from "./components/Continents/ListingArea";
import Sidebar from "./components/Favourites/Sidebar";

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

function App() {
  return (
    <Fragment>
      <Sidebar />
      <ListingArea />;
    </Fragment>
  );
}

export default App;
