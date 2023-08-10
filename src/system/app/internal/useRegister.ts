import { useMutation } from 'react-query';
import { authClient } from './services/auth-client';

export const useRegister = () => {
  const { mutate, isLoading } = useMutation({
    mutationFn: authClient.registerByCredentials,
    mutationKey: 'registerByCredentials'
  });

  return {
    register: mutate,
    isMutating: isLoading
  };
};
