import { LogOutUseCase } from '../../domain/usecases/auth.usecase';
import { useCallback } from 'react';
import { persistentStorage } from './services/persistent.storage';
import { useRouter } from 'next/router';

export const useLogOut: LogOutUseCase = () => {
  const { push } = useRouter();

  return useCallback(() => {
    persistentStorage.cleanStorage();
    push('/login');
  }, [push]);
};
