import ListingArea from "./components/Continents/ListingArea";

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
  return <ListingArea />;
}

export default App;
