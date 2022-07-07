import React, { Fragment, useEffect, useState } from "react";

import "../../styles/UI/Button.css";

const continents = ["Europe", "Africa", "Americas", "Asia", "Oceania"];

const Continents = ({
  onRenderCountries,
}: {
  onRenderCountries: (continent: string) => void;
}) => {
  const onClickHandler = (
    e: React.MouseEvent<HTMLInputElement, MouseEvent>
  ) => {
    const target = e.target as HTMLInputElement;
    onRenderCountries(target.value);
  };

  return (
    <Fragment>
      {continents.map((continent) => (
        <input
          type="button"
          className="button"
          key={continent}
          value={continent}
          onClick={onClickHandler}
        ></input>
      ))}
    </Fragment>
  );
};

export default Continents;
