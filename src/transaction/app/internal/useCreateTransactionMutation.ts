import { useMutation } from 'react-query';
import { transactionClient } from './services/transaction.client';

export function useCreateTransactionMutation() {
  const { mutate, isLoading } = useMutation('useCreateTransactionMutation', {
    mutationFn: transactionClient.createTransaction
  });

  return { mutateCreateTransaction: mutate, isLoading };
}
