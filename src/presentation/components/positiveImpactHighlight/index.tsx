import { HighlightCardComponent } from "@components/highlightCard";
import { HighlightProps } from "./props";
import { Container, Section, Title } from "./styles";

export const PositiveImpactHighlight: React.FC<HighlightProps> = ({
  title,
  leftTitle,
  rightTitle,
  elements,
  countTextLeft,
  countTextRight,
  loading,
}) => {
  return (
    <Container {...elements?.containerProps}>
      <Title>{title}</Title>
      <Section
        style={{ justifyContent: "space-between", padding: 10, marginTop: 20 }}
      >
        <HighlightCardComponent
          title={leftTitle}
          icon="pine-tree-box"
          countLabel={countTextLeft}
          loading={loading}
          direction="column"
          size={35}
        />

        <HighlightCardComponent
          title={rightTitle}
          icon="molecule-co2"
          countLabel={countTextRight}
          loading={loading}
          direction="column"
          size={35}
        />
      </Section>
    </Container>
  );
};
