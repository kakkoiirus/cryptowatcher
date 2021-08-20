import { createSlice } from '@reduxjs/toolkit';

export const tickersSlice = createSlice({
  name: 'tickers',
  initialState: {
    tickers: [],
  },
  reducers: {
    updateTicker: (state, action) => {
      const { symbol, price } = action.payload;
      const ticker = state.tickers.find((t) => t.symbol === symbol);
      if (!ticker) {
        state.tickers.push(action.payload);
        return;
      }
      ticker.price = price;
    },
  },
});

export const {
  updateTicker,
} = tickersSlice.actions;

export default tickersSlice.reducer;
