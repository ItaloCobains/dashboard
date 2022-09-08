import React from "react";
import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";

import { Container, Content, Filters } from "./styles";
import HistoryFinanceCard from "../../components/HistoryFinanceCard";

const List: React.FC = () => {
  const months = [
    {
      value: 7,
      label: "Julho",
    },
    {
      value: 8,
      label: "Agosto",
    },
    {
      value: 9,
      label: "Setembro",
    },
  ];

  const years = [
    {
      value: 2022,
      label: 2022,
    },
    {
      value: 2021,
      label: 2021,
    },
    {
      value: 2020,
      label: 2020,
    },
  ];

  return (
    <Container>
      <ContentHeader title="Saidas" lineColor="#e44c4e">
        <SelectInput options={months} />
        <SelectInput options={years} />
      </ContentHeader>

      <Filters>
        <button type="button" className="tag-filter tag-filter-recurrent">
          Recorrentes
        </button>
        <button type="button" className="tag-filter tag-filter-eventual">
          Eventuais
        </button>
      </Filters>

      <Content>
        <HistoryFinanceCard
          tagColor="#E44C4E"
          title="Conta de luz"
          subtitle="08/09/2020"
          amount="R$ 130,00"
        />
      </Content>
    </Container>
  );
};

export default List;
