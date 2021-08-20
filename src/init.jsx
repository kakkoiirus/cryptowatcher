import { configureStore } from '@reduxjs/toolkit';
import React from 'react';
import { Provider } from 'react-redux';
import rootReducer from './reducer';
import { updateTicker } from './slices/tickers';
import App from './App.jsx';

const API_KEY = '2d4f83e4dec4abd61adc8138b775853f144146a20dc4b330465d251fa4c6c517';

export default () => {
  const store = configureStore({
    reducer: rootReducer,
  });

  const socket = new WebSocket(
    `wss://streamer.cryptocompare.com/v2?api_key=${API_KEY}`,
  );

  const sendMessage = (message) => {
    const stringifiedMessage = JSON.stringify(message);

    socket.send(stringifiedMessage);
  };

  socket.onopen = () => {
    sendMessage(
      {
        action: 'SubAdd',
        subs: ['5~CCCAGG~BTC~USD'],
      },
    );
  };

  socket.onmessage = ({ data }) => {
    const { FROMSYMBOL: symbol, PRICE: price } = JSON.parse(data);
    if (price === undefined) {
      return;
    }
    store.dispatch(updateTicker({ symbol, price }));
  };

  return (
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  );
};
