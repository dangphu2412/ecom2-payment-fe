import {
  ErrorUseCase,
  ErrorDeps
} from 'src/system/domain/usecases/error.usecase';
import { useCallback } from 'react';
import { useNotify } from './useNotify';
import { HttpError } from '../external/http-client';

export const useHandleError: ErrorUseCase = (deps?: ErrorDeps) => {
  const notify = useNotify();

  return useCallback(
    (error: unknown) => {
      if (!error) {
        return;
      }

      if (HttpError.isHttpError(error)) {
        notify({
          title: 'Error',
          status: 'error',
          description: error.message
        });
        return;
      }

      notify({
        title: 'Error',
        status: 'error',
        description: 'System error'
      });
    },
    [notify]
  );
};
