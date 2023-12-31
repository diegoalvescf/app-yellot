import { View, Text, ActivityIndicator } from "react-native";
import styled, { css } from "styled-components/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export const Container = styled(View)`
  margin: ${({ theme }) => theme.spacing.sm.responsive}px 0;
  background-color: ${({ theme }) => theme.colors.gray_500};
  border-radius: 20px;
  padding: ${({ theme }) => theme.spacing.xm.responsive}px;
`;

export const Title = styled(Text)`
  ${({ theme }) => css`
    line-height: ${theme.typography.lineHeight.xl.responsive}px;
    font-size: ${theme.typography.fontSize.md.responsive}px;
    font-family: ${theme.fonts.regular};
    color: ${theme.colors.white};
  `}
  text-align: center;
`;

export const Section = styled(View)`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled(MaterialCommunityIcons).attrs(({ theme }) => ({
  color: theme.colors.yellotColor,
  size: theme.sizeIcon.xxm.responsive,
}))``;

export const CountLabel = styled(Text)`
  ${({ theme }) => css`
    font-size: ${theme.typography.fontSize.xxl.responsive}px;
    font-family: ${theme.fonts.regular};
    color: ${theme.colors.white};
  `}
  text-align: center;
`;

export const Loading = styled(ActivityIndicator)`
  padding-top: ${({ theme }) => theme.spacing.md.responsive}px;
  color: ${({ theme }) => theme.colors.gray_500};
`;
