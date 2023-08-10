import { useQuery } from 'react-query';
import { assetClient } from './services/asset.client';
import { EMPTY_ARRAY } from '../../../system/domain/constants';

export function useSearchAsset(symbol: string) {
  const { data, isLoading } = useQuery('searchAsset', {
    queryFn: () => assetClient.search(symbol)
  });

  return {
    assets: data ?? EMPTY_ARRAY,
    isLoading
  };
}
