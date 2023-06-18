import { View, Text } from "react-native";
import styled from "styled-components/native";
import { css } from "styled-components/native";
import { SimpleLineIcons } from "@expo/vector-icons";

export const Section = styled(View)`
  justify-content: center;
  align-items: center;
`;

export const Icon = styled(SimpleLineIcons).attrs(({ theme }) => ({
  color: theme.colors.yellotColor,
  size: theme.sizeIcon.md.responsive,
}))`
  margin-right: ${({ theme }) => theme.spacing.sm.responsive}px;
`;

export const Title = styled(Text)`
  ${({ theme }) => css`
    font-size: ${theme.typography.fontSize.sm.responsive}px;
    line-height: ${theme.typography.lineHeight.sm.responsive}px;
    font-family: ${theme.fonts.regular};
    color: ${theme.colors.gray_300};
  `}
  text-align: center;
`;

export const CounterText = styled(Text)`
  ${({ theme }) => css`
    font-size: ${theme.typography.fontSize.sm.responsive}px;
    line-height: ${theme.typography.lineHeight.sm.responsive}px;
    font-family: ${theme.fonts.regular};
    color: ${theme.colors.white};
  `}
  text-align: center;
`;
