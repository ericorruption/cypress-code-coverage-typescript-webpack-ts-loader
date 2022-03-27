import React, { FunctionComponent, useState } from "react";

export const ConditionalComponent: FunctionComponent = () => {
  const [on, setOn] = useState(false);

  const toggle = () => setOn((prevState) => !prevState);

  return (
    <>
      <button id="button-2" onClick={toggle}>
        Toggle component
      </button>
      {on ? <ComponentB /> : <ComponentA />}
    </>
  );
};

const ComponentA: FunctionComponent = () => <p>Component A</p>;
const ComponentB: FunctionComponent = () => <p>Component B</p>;
