import { TextProps, ViewProps } from "react-native";

export interface HighlightProps {
  title: string;
  leftTitle?: string;
  rightTitle?: string;
  counterText?: string;
  counterTextLeft?: string;
  counterTextRight?: string;
  elements?: {
    containerProps?: ViewProps;
    titleProps?: TextProps;
  };
}
