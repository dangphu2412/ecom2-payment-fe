import { useQuery } from 'react-query';
import { userClient } from './services/user-client';

export function useQueryMyProfile() {
  const { data, status } = useQuery({
    queryKey: 'QUERY_MY_PROFILE',
    queryFn: userClient.getMyProfile
  });

  return {
    profile: data,
    status
  };
}
