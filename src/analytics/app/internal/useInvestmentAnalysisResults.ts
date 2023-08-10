import { useQuery } from 'react-query';
import { analyticClient } from './services/analytic-client';

export const ANALYTIC_RESULT_QUERY_KEY = 'useInvestmentAnalysisResults';

export function useInvestmentAnalysisResults(portfolioId: number) {
  const { data } = useQuery([ANALYTIC_RESULT_QUERY_KEY, portfolioId], {
    queryFn: () => analyticClient.getInvestmentAnalysisResults(portfolioId),
    enabled: !isNaN(portfolioId)
  });

  return {
    analyticResutl: data
  };
}
