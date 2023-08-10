import { TrendingType, TrendingViews } from './app-models/analytic.model';
import { useMemo } from 'react';
import { useQueryTrending } from './useQueryTrending';

export function useTrendingItems(): TrendingViews {
  const { trending } = useQueryTrending();

  return useMemo(() => {
    if (!trending) {
      return {
        crypto: [],
        tag: []
      };
    }

    return {
      crypto: trending.crypto.data.slice(0, 4).map(item => {
        return {
          tag: item.tag,
          content: item.key_points,
          type: item.type as TrendingType,
          created: trending.crypto.created
        };
      }),
      tag: trending.tag.data.slice(0, 4).map(item => {
        return {
          tag: item.tag,
          content: item.key_points,
          type: item.type as TrendingType,
          created: trending.tag.created
        };
      })
    };
  }, [trending]);
}
