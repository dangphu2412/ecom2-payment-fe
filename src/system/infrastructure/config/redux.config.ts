import { combineReducers, configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import { systemReducer } from '../../app/internal/system.store';
import { analyticReducer } from '../../../analytics/app/internal/analytics.store';
import { portfolioReducer } from 'src/portfolio/app/internal/portfolio.store';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  system: systemReducer,
  analytic: analyticReducer,
  portfolio: portfolioReducer
});

function* rootSaga() {
  yield all([]);
}

function makeStore() {
  const store = configureStore({
    reducer: rootReducer,
    middleware: [sagaMiddleware]
  });

  sagaMiddleware.run(rootSaga);

  return store;
}

export const store = makeStore();

export type AppState = ReturnType<typeof store.getState>;
