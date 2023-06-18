interface ITotals {
  kwh: number;
  percentage: number;
  trees: number;
  co2: number;
}

interface IGenerationData {
  data_type: string;
  x_labels: string[];
  generation: number[];
  expected: number[];
  totals: ITotals;
}

export default IGenerationData;
