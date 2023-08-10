import { ReactElement } from 'react';
import { useIsFetching } from 'react-query';
import { useSelector } from 'react-redux';
import { useDebounce } from 'src/system/app/internal/useDebounce';
import { Table } from '../../../../../system/app/internal/ui/Table';
import { PortfolioOverviewColumn } from '../../app-models/portfolio.model';
import { portfolioSearchSelector } from '../../portfolio.store';
import { usePortfolioOverviewColumns } from '../../usePortfolioOverviewColumns';
import { usePortfolioOverviewItems } from '../../usePortfolioOverviewItems';
import { QUERY_MY_PORTFOLIOS_KEY } from '../../useQueryMyPortfolios';

export function PortfolioOverviewTable(): ReactElement {
  const searchValue = useSelector(portfolioSearchSelector);
  const debounceSearchValue = useDebounce(searchValue);
  const columns = usePortfolioOverviewColumns();
  const items: PortfolioOverviewColumn[] = usePortfolioOverviewItems({
    search: debounceSearchValue
  });
  const isLoading = useIsFetching(QUERY_MY_PORTFOLIOS_KEY) > 0;

  return (
    <div className="mt-6">
      <Table columns={columns} items={items} isLoading={isLoading} />
    </div>
  );
}
