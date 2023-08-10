import { useQueryTransactions } from './useQueryTransactions';
import { TransactionColumn } from './app-models/transaction.model';
import { useMemo } from 'react';
import {
  formatCurrency,
  formatDecimal
} from '../../../system/app/internal/number.utils';

export function useTransactionOverviewItems(): TransactionColumn[] {
  const { transactions } = useQueryTransactions();

  return useMemo(() => {
    return transactions.map(transaction => {
      const amount = +transaction.quantity;
      const price = +transaction.price;
      const fee = +transaction.fee;

      // Calculate the total value for the transaction.
      const total = amount * price + fee;

      return {
        asset:
          transaction.asset_info.name + ' ' + transaction.asset_info.symbol,
        amount: formatDecimal(amount),
        date: transaction.transaction_date,
        fee: formatCurrency(fee),
        operation: transaction.transaction_type,
        price: formatCurrency(price),
        total: formatCurrency(total) // Format the total value as a decimal.
      };
    });
  }, [transactions]);
}
