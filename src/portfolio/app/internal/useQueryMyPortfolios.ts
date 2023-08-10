import { useQuery } from 'react-query';
import { portfolioClient } from './services/portfolio-client';
import { EMPTY_ARRAY } from '../../../system/domain/constants';

export const QUERY_MY_PORTFOLIOS_KEY = 'useQueryMyPortfolios';

export function useQueryMyPortfolios() {
  const { data, isSuccess } = useQuery(QUERY_MY_PORTFOLIOS_KEY, {
    queryFn: portfolioClient.getAll
  });

  return {
    portfolios: data ?? EMPTY_ARRAY,
    isSuccess
  };
}
