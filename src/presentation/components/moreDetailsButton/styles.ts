import { View, Text, TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export const Container = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: ${({ theme }) => theme.spacing.sm.responsive}px 0;
  background-color: ${({ theme }) => theme.colors.gray_500};
  border-radius: 20px;
  padding: ${({ theme }) => theme.spacing.xm.responsive}px;
  min-height: ${RFValue(40)}px;
`;

export const Title = styled(Text)`
  ${({ theme }) => css`
    line-height: ${theme.typography.lineHeight.xl.responsive}px;
    font-size: ${theme.typography.fontSize.md.responsive}px;
    font-family: ${theme.fonts.regular};
    color: ${theme.colors.white};
  `}
  flex: 1;
  text-align: center;
`;

export const Icon = styled(MaterialCommunityIcons).attrs(({ theme, size }) => ({
  color: theme.colors.yellotColor,
  size: size ? size : theme.sizeIcon.xl.responsive,
}))``;
