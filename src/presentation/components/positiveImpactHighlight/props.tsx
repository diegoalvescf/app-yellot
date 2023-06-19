import { TextProps, ViewProps } from "react-native";

export interface HighlightProps {
  title?: string;
  leftTitle?: string;
  rightTitle?: string;
  countTextLeft?: number;
  countTextRight?: number;
  loading?: boolean;
  elements?: {
    containerProps?: ViewProps;
    titleProps?: TextProps;
  };
}
