import React, { FunctionComponent } from "react";
import { Button } from "./Button";
import { ConditionalComponent } from "./ConditionalComponent";

export const App: FunctionComponent = () => (
  <>
    <Button />
    <ConditionalComponent />
  </>
);
