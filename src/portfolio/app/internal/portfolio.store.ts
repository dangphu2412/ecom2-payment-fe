import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { PortfolioStore } from 'src/portfolio/domain/portfolio-store.types';
import { AppState } from 'src/system/infrastructure/config/redux.config';

const portfolioSlice = createSlice({
  name: 'portfolio',
  initialState: {
    search: ''
  } as PortfolioStore,
  reducers: {
    set(
      state,
      action: PayloadAction<{ key: keyof PortfolioStore; data: any }>
    ) {
      const {
        payload: { key, data }
      } = action;

      state[key] = data;
    }
  }
});

export const { reducer: portfolioReducer } = portfolioSlice;

export const portfolioActions = portfolioSlice.actions;

export const portfolioSearchSelector = (app: AppState) => app.portfolio.search;
