import React from "react";
import { ChartTypeButton, Title } from "./styles";
import { ChartTypeSelector } from "./styles";

export const ChartTypeFilter = ({ chartType, handleChartTypeChange }) => {
  const chartTypes = [
    { label: "Anual", value: "yearly" },
    { label: "Mensal", value: "monthly" },
    { label: "Diário", value: "daily" },
    { label: "Por hora", value: "hourly" },
  ];

  return (
    <ChartTypeSelector>
      {chartTypes.map((type) => (
        <ChartTypeButton
          key={type.value}
          selected={chartType === type.value}
          onPress={() => handleChartTypeChange(type.value)}
        >
          <Title>{type.label}</Title>
        </ChartTypeButton>
      ))}
    </ChartTypeSelector>
  );
};
