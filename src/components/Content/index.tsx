import React from "react";

import { Container } from "./styles";

import type {IProps} from "../../utils/types/children";

const Content: React.FC<IProps> = ({ children }) => {
  return (
    <Container>
      <h1>{children}</h1>
    </Container>
  );
};

export default Content;
