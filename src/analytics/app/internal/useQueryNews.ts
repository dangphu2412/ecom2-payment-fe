import { useQuery } from 'react-query';
import { analyticClient } from './services/analytic-client';
import { EMPTY_ARRAY } from '../../../system/domain/constants';

export const NEWS_QUERY_KEY = 'useQueryNews';

export function useQueryNews() {
  const { data } = useQuery(NEWS_QUERY_KEY, {
    queryFn: analyticClient.getNews
  });

  return {
    news: data ?? EMPTY_ARRAY
  };
}
