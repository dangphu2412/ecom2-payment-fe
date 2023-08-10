import { useMemo } from 'react';
import { PortfolioOverviewColumn } from './app-models/portfolio.model';
import { useQueryMyPortfolios } from './useQueryMyPortfolios';
import { formatDate } from 'src/system/app/internal/date.utilts';
import { Portfolio } from 'src/portfolio/domain/portfolio.usecase';

type Props = {
  search: string;
};

export function usePortfolioOverviewItems({
  search
}: Props): PortfolioOverviewColumn[] {
  const { portfolios } = useQueryMyPortfolios();

  return useMemo(() => {
    const mapper = (portfolio: Portfolio) => ({
      name: portfolio.name,
      description: portfolio.description,
      createdAt: formatDate(new Date(portfolio.created_at)),
      action: portfolio.id
    });

    if (!search) {
      return portfolios.map(mapper);
    }

    const filterMatchSearch = (portfolio: Portfolio) =>
      portfolio.name.toLowerCase().includes(search.toLowerCase());

    return portfolios.filter(filterMatchSearch).map(mapper);
  }, [portfolios, search]);
}
