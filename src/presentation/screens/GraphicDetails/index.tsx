import { ChartTypeFilter } from "@components/chartTypeFilter";
import { LoadingComponent } from "@components/loading";
import { useNavigation, useRoute } from "@react-navigation/native";

import { ChartComponent } from "@components/chart";
import { useState } from "react";
import { Dimensions } from "react-native";
import { IGraphicDetailsRouteProps, chartTypeToLabelMap } from "./props";
import { Container, Header } from "./styles";

export const GraphicDetailsScreen: React.FC = () => {
  const { width } = Dimensions.get("window");
  const route = useRoute();
  const { goBack } = useNavigation();
  const { daily, hourly, monthly, yearly } =
    route.params as IGraphicDetailsRouteProps;
  const [chartType, setChartType] = useState("yearly");

  const handleChartTypeChange = (type) => {
    setChartType(type);
  };

  const { x_labels, generation } = {
    hourly: hourly,
    daily: daily,
    monthly: monthly,
    yearly: yearly,
  }[chartType] || { x_labels: [], generation: [] };

  const data = x_labels.map((label, index) => ({
    quarter: label,
    earnings: generation[index],
  }));

  return (
    <Container>
      <Header showBackButton onPress={goBack} />

      <ChartTypeFilter
        chartType={chartType}
        handleChartTypeChange={handleChartTypeChange}
      />

      {!data ? (
        <LoadingComponent />
      ) : (
        <ChartComponent
          label={chartTypeToLabelMap[chartType]}
          data={data}
          chartType={chartType}
          width={width}
        />
      )}
    </Container>
  );
};
