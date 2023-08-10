import { useMemo } from 'react';
import { Column } from 'react-table';
import { AnalyticColumn } from './app-models/analytic.model';
import { formatCurrency } from '../../../system/app/internal/number.utils';

export function useAnalyticColumns(): Column<AnalyticColumn>[] {
  return useMemo(() => {
    return [
      {
        Header: 'Holdings',
        accessor: 'name',
        maxWidth: 100,
        minWidth: 80,
        width: 80
      },
      {
        Header: 'Amount',
        accessor: 'quantity',
        maxWidth: 100,
        minWidth: 80,
        width: 80
      },
      {
        Header: 'Current value',
        accessor: 'currentPrice',
        maxWidth: 100,
        minWidth: 80,
        width: 80
      },
      {
        Header: 'Purchase date',
        accessor: 'purchaseDate',
        maxWidth: 100,
        minWidth: 80,
        width: 80
      },
      {
        Header: 'Purchase price',
        accessor: ({ purchasePrice }) =>
          formatCurrency(parseFloat(purchasePrice)),
        maxWidth: 100,
        minWidth: 80,
        width: 80
      }
    ];
  }, []);
}
