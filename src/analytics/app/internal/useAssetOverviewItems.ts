import { useMemo } from 'react';
import { AnalyticColumn } from './app-models/analytic.model';
import { EMPTY_ARRAY } from '../../../system/domain/constants';
import { useCurrentPortfolioDetail } from '../../../portfolio/app/internal/useCurrentPortfolioDetail';
import {
  formatCurrency,
  formatDecimal
} from '../../../system/app/internal/number.utils';

export function useAssetOverviewItems(): AnalyticColumn[] {
  const { portfolio } = useCurrentPortfolioDetail();

  return useMemo(() => {
    if (!portfolio) return EMPTY_ARRAY;

    return portfolio.assets.map(item => {
      return {
        id: item.id,
        currentPrice: formatCurrency(item.current_price),
        name: item.name,
        portfolio: item.portfolio,
        purchaseDate: item.purchase_date,
        purchasePrice: item.purchase_price,
        quantity: formatDecimal(+item.quantity),
        sumFee: item.sum_fee,
        tickerSymbol: item.ticker_symbol
      };
    });
  }, [portfolio]);
}
