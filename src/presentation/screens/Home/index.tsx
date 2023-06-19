import { MoreDetailsButton } from "@components/moreDetailsButton";
import { PositiveImpactHighlight } from "@components/positiveImpactHighlight";
import { ERouteName } from "@infra/config/routes/routes";
import IGenerationData from "@models/IGeneration";
import { useNavigation } from "@react-navigation/native";
import GenerationService from "@services/GenerationService";
import { useEffect, useState } from "react";
import { Container, Header, PowerConsumptionHighlight } from "./styles";

export const HomeScreen: React.FC = () => {
  const { navigate } = useNavigation();
  const [hourly, setHourly] = useState<IGenerationData>({} as IGenerationData);
  const [daily, setDaily] = useState<IGenerationData>({} as IGenerationData);
  const [monthly, setMonthly] = useState<IGenerationData>(
    {} as IGenerationData
  );
  const [yearly, setYearly] = useState<IGenerationData>({} as IGenerationData);
  const [loadingHighlight, setLoadingHighlight] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const _hourly = await GenerationService.getGenerationData("hourly");
        const _daily = await GenerationService.getGenerationData("daily");
        const _monthly = await GenerationService.getGenerationData("monthly");
        const _yearly = await GenerationService.getGenerationData("yearly");

        setHourly(_hourly);
        setDaily(_daily);
        setMonthly(_monthly);
        setYearly(_yearly);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [hourly]);

  const { totals: totalHourly } = hourly || {};
  const { totals: totalMonthly } = monthly || {};
  const { totals: totalYearly } = yearly || {};

  const handleLoadingHighlight = () => {
    if (!totalHourly?.kwh || !totalMonthly?.kwh || !totalYearly?.kwh) {
      setLoadingHighlight(true);
    } else {
      setLoadingHighlight(false);
    }
  };

  useEffect(() => {
    handleLoadingHighlight();
  }, [hourly, monthly, yearly]);

  return (
    <Container>
      <Header />

      <PowerConsumptionHighlight
        title="hoje (kWh)"
        countLabel={totalHourly?.kwh}
        leftTitle="Este mês(kWh)"
        countLabelLeft={totalMonthly?.kwh}
        rightTitle="Total(kWh)"
        countLabelRight={totalYearly?.kwh}
        loading={loadingHighlight}
      />

      <PositiveImpactHighlight
        title="IMPACTO AMBIENTAL"
        leftTitle={`Árvores salvas`}
        countTextLeft={totalYearly?.trees}
        rightTitle="co2 reduzido"
        countTextRight={totalYearly?.co2}
        loading={loadingHighlight}
      />

      <MoreDetailsButton
        title="Ver mais detalhes"
        onPress={() =>
          navigate(ERouteName.GraphicDetailsScreen, {
            hourly,
            daily,
            monthly,
            yearly,
          })
        }
      />
    </Container>
  );
};
