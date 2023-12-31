import { TextProps, ViewProps } from "react-native";

export interface HighlightProps {
  title: string;
  leftTitle?: string;
  rightTitle?: string;
  countLabel?: number;
  countLabelLeft?: number;
  countLabelRight?: number;
  loading?: boolean;
  elements?: {
    containerProps?: ViewProps;
    titleProps?: TextProps;
  };
}
