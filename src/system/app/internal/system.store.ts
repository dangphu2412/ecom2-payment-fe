import { createSlice, PayloadAction, createSelector } from '@reduxjs/toolkit';
import { User } from '../../domain/entities/user.types';
import { SystemStore } from '../../domain/system-store.types';
import { AppState } from '../../infrastructure/config/redux.config';

const systemSlice = createSlice({
  name: 'system',
  initialState: {} as SystemStore,
  reducers: {
    setUser(state, action: PayloadAction<User>) {
      state.userSession = action.payload;
    },
    set(state, action: PayloadAction<{ key: keyof SystemStore; data: any }>) {
      const {
        payload: { key, data }
      } = action;

      state[key] = data;
    }
  }
});

export const { reducer: systemReducer } = systemSlice;

export const systemActions = systemSlice.actions;

export const userSessionSelector = (state: AppState) =>
  state.system.userSession;

export const selectedPortfolioSelector = (state: AppState) =>
  state.system.selectedPortfolio;

export const selectedPortfolioId = createSelector(
  selectedPortfolioSelector,
  portfolio => portfolio?.id
);
