export interface highlightCardProps {
  title: string;
  countLabel?: number;
  icon?: string;
  loading?: boolean;
  direction?: "row" | "column";
  size?: number;
}

export interface highlightCardPropsStyle {
  direction: "row" | "column";
  size: number;
}
