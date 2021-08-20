import { combineReducers } from '@reduxjs/toolkit';
import tickersReducer from './slices/tickers';

export default combineReducers({
  tickers: tickersReducer,
});
