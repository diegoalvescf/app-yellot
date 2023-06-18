import { HighlightCardComponent } from "@components/highlightCard";
import { HighlightProps } from "./props";
import { Container, CounterText, Icon, Section, Title } from "./styles";

export const HighlightComponent: React.FC<HighlightProps> = ({
  title,
  leftTitle,
  rightTitle,
  elements,
  counterText,
  counterTextLeft,
  counterTextRight,
}) => {
  return (
    <Container {...elements?.containerProps}>
      <Title {...elements?.titleProps}>{title}</Title>

      <Section>
        <Icon name="energy" size={28} />

        <CounterText>{counterText}</CounterText>
      </Section>

      <Section
        style={{ justifyContent: "space-between", padding: 10, marginTop: 20 }}
      >
        <HighlightCardComponent
          title={leftTitle}
          icon="calendar"
          counterText={counterTextLeft}
        />

        <HighlightCardComponent
          title={rightTitle}
          icon="graph"
          counterText={counterTextRight}
        />
      </Section>
    </Container>
  );
};
