import { useToast } from '@chakra-ui/react';
import { useCallback } from 'react';

type NotifyAdapterProps = {
  title: string;
  status?: 'info' | 'warning' | 'success' | 'error';
  description?: string;
};
type Notifier = (props: NotifyAdapterProps) => void;

export function useNotify(): Notifier {
  const toast = useToast();

  return useCallback(
    (options: NotifyAdapterProps) =>
      toast({
        ...{
          duration: 5000,
          isClosable: true,
          position: 'top',
          status: 'success'
        },
        ...options
      }),
    [toast]
  );
}
