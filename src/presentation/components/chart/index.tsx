import { extractLabel } from "@utils/extractLabel";
import React from "react";
import {
  VictoryAxis,
  VictoryBar,
  VictoryChart,
  VictoryLabel,
  VictoryTheme,
} from "victory-native";

export const ChartComponent = ({ label, data, chartType, width }) => {
  return (
    <VictoryChart width={width} theme={VictoryTheme.material}>
      <VictoryAxis
        label={label}
        style={{
          tickLabels: {
            fill: "lightblue",
            angle: -75,
            textAnchor: "middle",
            transform: "translate(-5, 0)",
            padding: 25,
          },
        }}
        tickLabelComponent={<VictoryLabel />}
      />
      <VictoryAxis
        dependentAxis
        label="kWh"
        style={{
          tickLabels: {
            fill: "lightblue",
            angle: -65,
            textAnchor: "middle",
            padding: 25,
          },
        }}
      />
      <VictoryBar
        data={data}
        x={({ quarter }) => extractLabel(chartType, quarter)}
        y="earnings"
        style={{
          data: { fill: "lightblue" },
          labels: { fontSize: 12 },
        }}
        barWidth={8}
        animate={{
          duration: 1000,
          onLoad: { duration: 1000 },
        }}
      />
    </VictoryChart>
  );
};
