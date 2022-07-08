import React, { useEffect, useState } from "react";

const Search = ({ onSearch }: { onSearch: (textToSearch: string) => void }) => {
  const [textToSearch, setTextToSearch] = useState("");

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextToSearch(e.target.value);
  };

  useEffect(() => {
    const interval = setTimeout(() => {
      onSearch(textToSearch);
    }, 700);

    return () => {
      clearTimeout(interval);
    };
  }, [textToSearch]);

  return (
    <input
      type="text"
      placeholder="Search"
      onChange={changeHandler}
      required
    ></input>
  );
};

export default Search;
