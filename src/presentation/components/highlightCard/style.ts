import { View, Text, ActivityIndicator } from "react-native";
import styled from "styled-components/native";
import { css } from "styled-components/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { highlightCardPropsStyle } from "./props";

export const Section = styled(View)`
  justify-content: center;
  align-items: center;
`;

export const Icon = styled(MaterialCommunityIcons).attrs(({ theme, size }) => ({
  color: theme.colors.yellotColor,
  size: size ? size : theme.sizeIcon.xm.responsive,
}))<highlightCardPropsStyle>`
  margin-right: ${({ theme }) => theme.spacing.xs.responsive}px;
`;

export const Title = styled(Text)<highlightCardPropsStyle>`
  ${({ theme, direction }) => css`
    font-size: ${theme.typography.fontSize.sm.responsive}px;
    line-height: ${theme.typography.lineHeight.sm.responsive}px;
    font-family: ${theme.fonts.regular};
    color: ${theme.colors.gray_300};
    margin-top: ${direction === "column" ? theme.spacing.md.responsive : 0}px;
  `}
  text-align: center;
`;

export const CountLabel = styled(Text)<highlightCardPropsStyle>`
  ${({ theme, direction }) => css`
    font-size: ${theme.typography.fontSize.sm.responsive}px;
    line-height: ${theme.typography.lineHeight.sm.responsive}px;
    font-family: ${theme.fonts.regular};
    color: ${theme.colors.white};
    margin-top: ${direction === "column" ? theme.spacing.sm.responsive : 0}px;
  `}
  text-align: center;
`;

export const Loading = styled(ActivityIndicator)`
  padding-top: ${({ theme }) => theme.spacing.md.responsive}px;
  color: ${({ theme }) => theme.colors.gray_500};
`;
