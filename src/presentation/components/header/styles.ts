import { SimpleLineIcons } from "@expo/vector-icons";
import { View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled(View)`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const TouchHomeButton = styled.TouchableOpacity``;

export const Logo = styled.Image`
  width: ${RFValue(100)}px;
  height: ${RFValue(35)}px;
`;

export const BackButton = styled.TouchableOpacity`
  flex: 1;
`;

export const BackIcon = styled(SimpleLineIcons).attrs(({ theme }) => ({
  color: theme.colors.white,
  size: theme.sizeIcon.xxm.responsive,
}))``;
