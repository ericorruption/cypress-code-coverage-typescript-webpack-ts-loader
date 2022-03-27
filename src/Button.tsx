import React, { FunctionComponent, useState } from "react";

export const Button: FunctionComponent = () => {
  const [clicked, setClicked] = useState(false);

  if (clicked) {
    console.log("clicked");
  }

  return (
    <button id="button-1" onClick={() => setClicked(true)}>
      {clicked ? "clicked" : "not clicked"}
    </button>
  );
};
