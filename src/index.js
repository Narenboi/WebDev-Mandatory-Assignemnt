import './styles.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store';
import App from './App';

const el = document.getElementById('root');
const root = createRoot(el);

root.render(
  <BrowserRouter>
  <Provider store={store}>
    <App />
  </Provider>
  </BrowserRouter>
);
