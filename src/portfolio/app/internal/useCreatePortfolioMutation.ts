import { useMutation } from 'react-query';
import { portfolioClient } from './services/portfolio-client';

export function useCreatePortfolioMutation() {
  const { mutate, isLoading } = useMutation('useCreatePortfolioMutation', {
    mutationFn: portfolioClient.createOne
  });

  return { mutateCreatePortfolio: mutate, isLoading };
}
