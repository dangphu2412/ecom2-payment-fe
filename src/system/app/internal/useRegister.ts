import { useMutation } from 'react-query';
import { RegisterUseCase } from '../../domain/usecases/auth.usecase';
import { authClient } from './services/auth-client';

export const useRegister: RegisterUseCase = ({ onError, onSuccess }) => {
  const { mutate, isLoading } = useMutation({
    mutationFn: authClient.registerByCredentials,
    mutationKey: 'registerByCredentials',
    onSuccess,
    onError
  });

  return {
    register: mutate,
    isMutating: isLoading
  };
};
