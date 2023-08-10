import { useMutation } from 'react-query';
import { authClient } from './services/auth-client';

export function useLoginGoogleMutation() {
  const { mutate, isLoading } = useMutation({
    mutationFn: authClient.loginByGoogle,
    mutationKey: 'loginByGoogle'
  });

  return {
    loginGoogle: mutate,
    isLoading
  };
}
