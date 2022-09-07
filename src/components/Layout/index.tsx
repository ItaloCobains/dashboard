import React from "react";

import { Grid } from "./styles";

import MainHeader from "../MainHeader";
import Aside from "../Aside";
import Content from "../Content";
import { IProps } from "../../utils/types/children";

const Layout: React.FC<IProps> = ({ children }) => {
  return (
    <Grid>
      <MainHeader />
      <Aside />
      <Content>{children}</Content>
    </Grid>
  );
};

export default Layout;
