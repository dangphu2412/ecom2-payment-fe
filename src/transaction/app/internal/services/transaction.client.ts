import {
  CreateFeePayload,
  CreateTransactionPayload,
  Transaction,
  TransactionUsecase
} from '../../../domain/transaction.usecase';
import { authorizedHttpClient } from '../../../../system/infrastructure/factories/http-client.factories';

export const transactionClient: TransactionUsecase = {
  get(): Promise<Transaction[]> {
    return authorizedHttpClient.request({
      method: 'get',
      url: '/transactions/'
    });
  },
  createTransaction(payload: CreateTransactionPayload): Promise<void> {
    return authorizedHttpClient.request({
      method: 'post',
      data: payload,
      url: '/transactions/'
    });
  },
  createFee(payload: CreateFeePayload): Promise<void> {
    return authorizedHttpClient.request({
      method: 'post',
      data: payload,
      url: '/fees'
    });
  }
};
