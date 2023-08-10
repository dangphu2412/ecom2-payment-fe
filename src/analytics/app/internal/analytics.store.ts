import { createSlice } from '@reduxjs/toolkit';
import { AnalyticStore } from '../../domain/analytic-store.types';

const analyticStore = createSlice({
  name: 'analytic',
  initialState: {} as AnalyticStore,
  reducers: {}
});

export const { reducer: analyticReducer } = analyticStore;

export const analyticActions = analyticStore.actions;
