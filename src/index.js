import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import ContextProvider from './store/CartProvider';
import { AuthContextProvider } from './store/auth-context';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthContextProvider>
  <ContextProvider>
    <App />
  </ContextProvider>
  </AuthContextProvider>
);
