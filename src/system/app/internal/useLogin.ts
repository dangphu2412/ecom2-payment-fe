import { useMutation } from 'react-query';
import { authClient } from './services/auth-client';

export const useLogin = () => {
  const { mutate, isLoading } = useMutation({
    mutationFn: authClient.loginByCredentials,
    mutationKey: 'loginByCredentials'
  });

  return {
    login: mutate,
    isMutating: isLoading
  };
};
