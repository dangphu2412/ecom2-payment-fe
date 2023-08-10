import { useSelector } from 'react-redux';
import { selectedPortfolioId } from '../../../system/app/internal/system.store';
import { useQueryPortfolioDetail } from './useQueryPortfolioDetail';

export function useCurrentPortfolioDetail() {
  const portfolioId = useSelector(selectedPortfolioId);

  return useQueryPortfolioDetail(portfolioId ?? NaN);
}
