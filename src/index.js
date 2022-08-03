import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import { ContextProvider } from './contexts/ContextProvider';

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
    <p>hola como estas</p>
  </React.StrictMode>,
  document.getElementById('root'),
);
