import { useMemo } from 'react';
import { Column } from 'react-table';
import { TransactionColumn } from './app-models/transaction.model';

export function useTransactionOverviewColumns(): Column<TransactionColumn>[] {
  return useMemo(() => {
    return [
      {
        Header: 'Operation',
        accessor: col => col.operation.toUpperCase(),
        maxWidth: 100,
        minWidth: 80,
        width: 80
      },
      {
        Header: 'Asset',
        accessor: 'asset',
        maxWidth: 100,
        minWidth: 80,
        width: 80
      },
      {
        Header: 'Date',
        accessor: 'date',
        maxWidth: 100,
        minWidth: 80,
        width: 80
      },
      {
        Header: 'Amount',
        accessor: 'amount',
        maxWidth: 100,
        minWidth: 80,
        width: 80
      },
      {
        Header: 'Price',
        accessor: 'price',
        maxWidth: 100,
        minWidth: 80,
        width: 80
      },
      {
        Header: 'Fee',
        accessor: 'fee',
        maxWidth: 100,
        minWidth: 80,
        width: 80
      },
      {
        Header: 'Total',
        accessor: 'total',
        maxWidth: 100,
        minWidth: 80,
        width: 80
      }
    ];
  }, []);
}
