import { HighlightCardComponent } from "@components/highlightCard";
import { HighlightProps } from "./props";
import { Container, CountLabel, Icon, Loading, Section, Title } from "./styles";

export const HighlightComponent: React.FC<HighlightProps> = ({
  title,
  leftTitle,
  rightTitle,
  elements,
  countLabel,
  countLabelLeft,
  countLabelRight,
  loading = false,
}) => {
  return (
    <Container {...elements?.containerProps}>
      <Title {...elements?.titleProps}>{title}</Title>

      <Section>
        <Icon name="solar-power" />

        {loading ? <Loading /> : <CountLabel>{countLabel}</CountLabel>}
      </Section>

      <Section
        style={{ justifyContent: "space-between", padding: 10, marginTop: 20 }}
      >
        <HighlightCardComponent
          title={leftTitle}
          icon="sort-calendar-descending"
          countLabel={countLabelLeft}
          loading={loading}
        />

        <HighlightCardComponent
          title={rightTitle}
          icon="trending-up"
          countLabel={countLabelRight}
          loading={loading}
        />
      </Section>
    </Container>
  );
};
