import { useQuery } from 'react-query';
import { assetClient } from './services/asset.client';
import { EMPTY_ARRAY } from '../../../system/domain/constants';

export function useQueryAssetOverview() {
  const { data } = useQuery('getAssetOverview', {
    queryFn: assetClient.getOverview
  });

  return {
    assetOverviewItems: data ?? EMPTY_ARRAY
  };
}
