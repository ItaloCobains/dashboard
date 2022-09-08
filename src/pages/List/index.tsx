import React from "react";
import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";

import { Container } from "./styles";

const List: React.FC = () => {
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
      <ContentHeader title="Saidas" lineColor="#e44c4e">
        <SelectInput options={options} />
      </ContentHeader>
    </Container>
  );
};

export default List;
