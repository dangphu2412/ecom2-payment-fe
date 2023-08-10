import {
  faChartLine,
  faMoneyCheckDollar,
  faSuitcase
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { selectedPortfolioId } from 'src/system/app/internal/system.store';
import {
  formatCurrency,
  formatPercentage
} from '../../../system/app/internal/number.utils';
import { OverviewCardProps } from './ui/OverviewCard/types';
import { useInvestmentAnalysisResults } from './useInvestmentAnalysisResults';

type AnalyticOverviewItemPropsAdapter = (OverviewCardProps & { key: string })[];

export function useAnalyticOverviewItems(): AnalyticOverviewItemPropsAdapter {
  const selectedId = useSelector(selectedPortfolioId);
  const { analyticResutl } = useInvestmentAnalysisResults(selectedId ?? NaN);

  return useMemo(() => {
    const {
      total_profit = 0,
      total_value = 0,
      total_invested = 0,
      best_performer,
      worst_performer
    } = analyticResutl ?? {};

    return [
      {
        key: 'Overview',
        title: (
          <>
            <FontAwesomeIcon icon={faSuitcase} />
            <span className="ml-2">Value</span>
          </>
        ),
        mainContent: formatCurrency(total_value),
        description: formatCurrency(total_invested)
      },
      {
        key: 'Total profit',
        title: (
          <>
            <FontAwesomeIcon icon={faChartLine} />
            <span className="ml-2">Total profit</span>
          </>
        ),
        mainContent: formatCurrency(total_profit),
        description: formatPercentage(
          total_value ? (total_value / total_invested - 1) * 100 : 0
        )
      },
      {
        key: 'Best performer',
        title: (
          <>
            <FontAwesomeIcon icon={faMoneyCheckDollar} />
            <span className="ml-2">Best performer</span>
          </>
        ),
        mainContent: formatCurrency(best_performer?.gained_amount_in_usd ?? 0),
        description: formatPercentage(best_performer?.percentage ?? 0)
      },
      {
        key: 'Worst performer',
        title: (
          <>
            <FontAwesomeIcon icon={faMoneyCheckDollar} />
            <span className="ml-2">Worst performer</span>
          </>
        ),
        mainContent: formatCurrency(worst_performer?.gained_amount_in_usd ?? 0),
        description: formatPercentage(worst_performer?.percentage ?? 0)
      }
    ];
  }, [analyticResutl]);
}
