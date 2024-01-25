import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { GlobalStyle } from './GlobalStyle';
import App from './App';
import store from './store';
import { theme } from './theme';
import { ThemeProvider } from 'styled-components';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>

    </Provider>
  </React.StrictMode>
);
