import styled from "styled-components/native";

export const ChartTypeSelector = styled.View`
  flex-direction: row;
  margin-bottom: ${({ theme }) => theme.spacing.xm.responsive}px;
  justify-content: center;
`;

export const ChartTypeButton = styled.TouchableOpacity`
  margin-right: ${({ theme }) => theme.spacing.sm.responsive}px;
  background-color: ${({ selected }) => (selected ? "#ddd" : "#333")};
  padding: ${({ theme }) => theme.spacing.sm.responsive}px
    ${({ theme }) => theme.spacing.xm.responsive}px;
  border-radius: 8px;
`;

export const ChartContainer = styled.View`
  width: 100%;
`;

export const Title = styled.Text`
  color: black;
`;
