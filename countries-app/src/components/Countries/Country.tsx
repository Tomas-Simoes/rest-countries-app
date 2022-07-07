import { country } from "../../App";

const Country = ({ country }: { country: country }) => {
  return <p>{country.name.common}</p>;
};

export default Country;
