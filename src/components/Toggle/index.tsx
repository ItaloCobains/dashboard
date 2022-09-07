import React from "react";

import { Conteiner, ToggleLabel, ToggleSelector } from "./styles";

const Toggle: React.FC = () => (
  <Conteiner>
    <ToggleLabel>Light</ToggleLabel>
    <ToggleSelector
      checked
      uncheckedIcon={false}
      checkedIcon={false}
      onChange={() => console.log("mudou")}
    />
    <ToggleLabel>Dark</ToggleLabel>
  </Conteiner>
);

export default Toggle;
