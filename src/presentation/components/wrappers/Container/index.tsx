import { ReactNode } from 'react';
import { Container } from './styles';
import { ViewProps } from 'react-native';

export interface ContainerProps {
  children: ReactNode;
  elements?: {
    containerViewProps?: ViewProps;
  };
}

export const ContainerComponent: React.FC<ContainerProps> = ({
  children,
  elements,
}) => {
  return <Container {...elements?.containerViewProps}>{children}</Container>;
};
