import React from 'react';
import ReactDOM from 'react-dom/client';
import { persistor, store } from './components/redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from './components/App';
import './index.css';

import { PersistGate } from 'redux-persist/integration/react';
import { ChakraBaseProvider } from '@chakra-ui/react';
import theme from './theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ChakraBaseProvider theme={theme}>
          <BrowserRouter basename="/goit-react-hw-08-phonebook">
            <App />
          </BrowserRouter>
        </ChakraBaseProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);