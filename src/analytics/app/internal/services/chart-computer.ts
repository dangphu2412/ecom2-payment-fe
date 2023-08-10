import { ChartData } from 'chart.js';
import sum from 'lodash/sum';

type ChartDescriptor = {
  label: string;
  percentage: number;
  color: string;
};

export function computeChartDescriptors(
  source: ChartData<'doughnut', number[], string>
): ChartDescriptor[] {
  const datasets = source.datasets[0];
  if (!datasets) {
    throw new Error('No data');
  }

  const total = sum(datasets.data);
  const labels = source.labels ?? [];

  return labels.map(label => {
    const index = labels.indexOf(label);
    const percentage = parseFloat(
      ((datasets.data[index] / total) * 100).toFixed(2)
    );

    return {
      label,
      percentage,
      color: (datasets.backgroundColor as string[])[index]
    };
  });
}
