import { createSlice } from '@reduxjs/toolkit';
import { TransactionStore } from '../../domain/transaction-store.types';

const transactionStore = createSlice({
  name: 'transaction',
  initialState: {} as TransactionStore,
  reducers: {}
});

export const { reducer: transactionReducer } = transactionStore;

export const transactionActions = transactionStore.actions;
