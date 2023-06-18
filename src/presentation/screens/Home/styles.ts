import { ContainerComponent } from '@components/wrappers/Container';
import styled from 'styled-components/native';

export const Container = styled(ContainerComponent)``;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.white};
`;
