import IGenerationData from "@models/IGeneration";

export type TReactNavigationStackParamList = {
  HomeScreen: undefined;
  GraphicDetailsScreen: {
    hourly: IGenerationData;
    daily: IGenerationData;
    monthly: IGenerationData;
    yearly: IGenerationData;
  };
};

export enum ERouteName {
  HomeScreen = "HomeScreen",
  GraphicDetailsScreen = "GraphicDetailsScreen",
}
