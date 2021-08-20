import { createSlice } from '@reduxjs/toolkit';

export const tickersSlice = createSlice({
  name: 'tickers',
  initialState: {
    tickers: [
      {
        symbol: 'BTC',
        price: '50200',
      },
      {
        symbol: 'ETH',
        price: '4200',
      },
      {
        symbol: 'XMR',
        price: '1200',
      },
      {
        symbol: 'DOGE',
        price: '1.4',
      },
      {
        symbol: 'USDT',
        price: '1',
      },
    ],
  },
  reducers: {
    addTicker: (state, action) => {
      state.tickers.push(action.payload);
    },
    updateTicker: (state, action) => {
      const { symbol, price } = action.payload;
      const ticker = state.tickers.find((t) => t.symbol === symbol);
      ticker.price = price;
    },
  },
});

export const {
  addTicker,
  updateTicker,
} = tickersSlice.actions;

export default tickersSlice.reducer;
