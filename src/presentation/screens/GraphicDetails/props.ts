import IGenerationData from "@models/IGeneration";

export interface IGraphicDetailsRouteProps {
  hourly: IGenerationData;
  daily: IGenerationData;
  monthly: IGenerationData;
  yearly: IGenerationData;
}

export const chartTypeToLabelMap = {
  hourly: "Hora",
  daily: "Dia",
  monthly: "Mês",
  yearly: "Ano",
};
