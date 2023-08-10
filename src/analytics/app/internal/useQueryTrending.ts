import { useQuery } from 'react-query';
import { analyticClient } from './services/analytic-client';

export const TRENDING_QUERY_KEY = 'useQueryTrending';

export function useQueryTrending() {
  const { data } = useQuery(TRENDING_QUERY_KEY, {
    queryFn: analyticClient.getTrending
  });

  return {
    trending: data
  };
}
