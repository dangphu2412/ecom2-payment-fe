import { useQuery } from 'react-query';
import { MenuItem } from '../../domain/entities/menu.types';

export function useQueryMenu() {
  const { data } = useQuery({
    queryKey: 'MENU',
    queryFn: () => {
      return [
        {
          id: 'analytics.',
          name: 'Analytics',
          accessLink: '/analytics'
        },
        {
          id: 'metrics.',
          name: 'Metrics',
          accessLink: '/metrics'
        },
        {
          id: 'transaction.',
          name: 'Transaction',
          accessLink: '/transaction'
        },
        {
          id: 'portfolios.',
          name: 'Portfolios',
          accessLink: '/portfolios'
        },
        {
          id: 'latest-news.',
          name: 'News',
          accessLink: '/news'
        }
      ] as MenuItem[];
    }
  });

  return { menus: data };
}
