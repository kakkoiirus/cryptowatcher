import { configureStore } from '@reduxjs/toolkit';
import React from 'react';
import { Provider } from 'react-redux';
import rootReducer from './reducer';
import initApi from './api.js';
import App from './App.jsx';

export default () => {
  const store = configureStore({
    reducer: rootReducer,
  });
  initApi();

  return (
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  );
};
