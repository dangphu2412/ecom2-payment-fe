import { ReactElement } from 'react';
import { useTransactionOverviewColumns } from '../../useTransactionOverviewColumns';
import { Table } from '../../../../../system/app/internal/ui/Table';
import { TransactionColumn } from '../../app-models/transaction.model';
import { useTransactionOverviewItems } from '../../useTransactionOverviewItems';
import { useIsFetching } from 'react-query';
import { TRANSACTIONS_QUERY_KEY } from '../../useQueryTransactions';

export function TransactionOverviewTable(): ReactElement {
  const columns = useTransactionOverviewColumns();
  const items: TransactionColumn[] = useTransactionOverviewItems();
  const isLoading = useIsFetching(TRANSACTIONS_QUERY_KEY) > 0;

  return (
    <div className="mt-6">
      <Table columns={columns} items={items} isLoading={isLoading} />
    </div>
  );
}
