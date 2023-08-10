import { useMemo } from 'react';
import { PortfolioOverviewColumn } from './app-models/portfolio.model';
import { Column } from 'react-table';
import { ActionCell } from './containers/PortfolioOverviewTable/ActionCell/ActionCell';

export function usePortfolioOverviewColumns(): Column<PortfolioOverviewColumn>[] {
  return useMemo(() => {
    return [
      {
        Header: 'Name',
        accessor: 'name',
        maxWidth: 100,
        minWidth: 80,
        width: 80
      },
      {
        Header: 'Description',
        accessor: 'description',
        maxWidth: 100,
        minWidth: 80,
        width: 80
      },
      {
        Header: 'Created at',
        accessor: 'createdAt',
        maxWidth: 100,
        minWidth: 80,
        width: 80
      },
      {
        Header: 'Action',
        accessor: 'action',
        Cell: ActionCell
      }
    ];
  }, []);
}
