import { highlightCardProps } from "./props";
import { CounterText, Icon, Section, Title } from "./style";

export const HighlightCardComponent: React.FC<highlightCardProps> = ({
  title,
  icon,
  counterText,
}) => {
  return (
    <Section>
      <Section
        style={{
          flexDirection: "row",
        }}
      >
        <Icon name={icon} />

        <Title>{title}</Title>
      </Section>

      <CounterText>{counterText}</CounterText>
    </Section>
  );
};
