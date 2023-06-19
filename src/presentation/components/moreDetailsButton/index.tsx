import { TouchableOpacityProps } from "react-native";
import { Container, Icon, Title } from "./styles";

interface MoreDetailsButtonProps extends TouchableOpacityProps {
  title: string;
}

export const MoreDetailsButton: React.FC<MoreDetailsButtonProps> = ({
  title,
  ...rest
}) => {
  return (
    <Container {...rest}>
      <Title>{title}</Title>
      <Icon name="chevron-right" />
    </Container>
  );
};
