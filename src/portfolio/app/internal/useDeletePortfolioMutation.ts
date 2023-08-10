import { useMutation } from 'react-query';
import { portfolioClient } from './services/portfolio-client';

export function useDeletePortfolioMutation() {
  const { mutate } = useMutation('deletePortfolio', {
    mutationFn: (id: number) => portfolioClient.deleteOne(id)
  });

  return {
    deletePortfolioById: mutate
  };
}
