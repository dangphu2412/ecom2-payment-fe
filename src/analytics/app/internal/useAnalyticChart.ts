import { ChartData } from 'chart.js';
import { useMemo } from 'react';
import { useCurrentPortfolioDetail } from '../../../portfolio/app/internal/useCurrentPortfolioDetail';
import { SYSTEM_COLORS } from '../../../system/infrastructure/config/chakra-ui.config';
import { AssetOverview } from '../../../assets/domain/assets.usecase';
import { EMPTY_ARRAY } from '../../../system/domain/constants';

export function useAnalyticChart(): ChartData<'doughnut', number[], string> {
  const { portfolio } = useCurrentPortfolioDetail();

  return useMemo(() => {
    const queuesColors = [
      SYSTEM_COLORS.info,
      SYSTEM_COLORS.primary,
      SYSTEM_COLORS.success
    ];

    if (!portfolio || !portfolio?.assets?.length) {
      return {
        labels: ['No data'],
        datasets: [
          {
            label: 'All Holdings',
            data: [1],
            backgroundColor: [queuesColors.pop()],
            hoverOffset: 4
          }
        ]
      };
    }

    const maxSupportColors = queuesColors.length;

    let labels: string[] = [];
    let data: number[] = [];
    let colors: string[] = [];

    function computeAssetValue(asset: AssetOverview) {
      return parseFloat(asset.purchase_price) * Number(asset.quantity);
    }
    const assets = portfolio?.assets ?? EMPTY_ARRAY;

    assets.sort((a, b) =>
      computeAssetValue(a) < computeAssetValue(b) ? 1 : -1
    );

    const topAssets = assets.slice(0, maxSupportColors - 1);
    const othersAssets = assets.slice(maxSupportColors - 1, assets.length);

    topAssets.forEach(asset => {
      data.push(computeAssetValue(asset));
      labels.push(asset.ticker_symbol);
      colors.push(queuesColors.pop() as string);
    });

    if (othersAssets.length) {
      data.push(
        othersAssets.reduce(
          (result, asset) => result + computeAssetValue(asset),
          0
        )
      );
      labels.push('Others');
      colors.push(queuesColors.pop() as string);
    }

    return {
      labels,
      datasets: [
        {
          label: 'All Holdings',
          data,
          backgroundColor: colors,
          hoverOffset: 4
        }
      ]
    };
  }, [portfolio]);
}
