import { useMutation } from 'react-query';
import { transactionClient } from './services/transaction.client';

export function useCreateFeeMutation() {
  const { mutate, isLoading } = useMutation('useCreateFeeMutation', {
    mutationFn: transactionClient.createFee
  });

  return { mutateCreateFee: mutate, isLoading };
}
