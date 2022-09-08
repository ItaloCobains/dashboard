import React from "react";
import { Container } from "./styles";

import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";

const DashBoard: React.FC = () => {

  const options = [
    {
      value: "Italo",
      label: "Italo",
    },
    {
      value: "Italo",
      label: "Italo",
    },
    {
      value: "Italo",
      label: "Italo",
    },
  ];

  return (
    <Container>
      <ContentHeader title="Dashboard" lineColor="#f7931b">
        <SelectInput options={options} />
      </ContentHeader>
    </Container>
  );
};

export default DashBoard;
