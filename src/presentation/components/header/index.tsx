import logoImg from "@assets/logo.png";
import { HeaderProps } from "./props";
import {
  BackButton,
  BackIcon,
  Container,
  Logo,
  TouchHomeButton,
} from "./styles";
import { useNavigation } from "@react-navigation/native";
import { ERouteName } from "@routes/routes";

export const HeaderComponent: React.FC<HeaderProps> = ({
  onPress,
  disabled,
  showBackButton = false,
  elements,
}) => {
  const { navigate } = useNavigation();

  return (
    <Container {...elements?.containerProps}>
      {showBackButton && (
        <BackButton onPress={onPress}>
          <BackIcon name="arrow-left" />
        </BackButton>
      )}
      <TouchHomeButton
        onPress={() => navigate(ERouteName.HomeScreen)}
        disabled={disabled}
      >
        <Logo source={logoImg} />
      </TouchHomeButton>
    </Container>
  );
};
