import { useQuery } from 'react-query';
import { transactionClient } from './services/transaction.client';
import { EMPTY_ARRAY } from '../../../system/domain/constants';

export const TRANSACTIONS_QUERY_KEY = 'useQueryTransactions';

export function useQueryTransactions() {
  const { data } = useQuery(TRANSACTIONS_QUERY_KEY, {
    queryFn: transactionClient.get
  });

  return {
    transactions: data ?? EMPTY_ARRAY
  };
}
