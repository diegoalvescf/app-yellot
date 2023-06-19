import { highlightCardProps } from "./props";
import { CountLabel, Icon, Loading, Section, Title } from "./style";

export const HighlightCardComponent: React.FC<highlightCardProps> = ({
  title,
  icon,
  countLabel,
  loading = false,
  direction = "row",
  size,
}) => {
  return (
    <Section>
      <Section
        style={{
          flexDirection: direction,
        }}
      >
        <Icon name={icon} size={size} />

        <Title direction={direction}>{title}</Title>
      </Section>

      {loading ? (
        <Loading />
      ) : (
        <CountLabel direction={direction}>{countLabel}</CountLabel>
      )}
    </Section>
  );
};
