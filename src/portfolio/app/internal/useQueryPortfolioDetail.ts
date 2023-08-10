import { useQuery } from 'react-query';
import { portfolioClient } from './services/portfolio-client';

export const QUERY_PORTFOLIO_DETAIL_KEY = 'useQueryPortfolioDetail';

export function useQueryPortfolioDetail(portfolioId: number) {
  const { data, isSuccess } = useQuery(
    [QUERY_PORTFOLIO_DETAIL_KEY, portfolioId],
    {
      queryFn: () => portfolioClient.getDetail(portfolioId),
      enabled: !isNaN(portfolioId),
      cacheTime: 30000
    }
  );

  return {
    portfolio: data,
    isSuccess
  };
}
