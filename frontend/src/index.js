import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './assets/fonts/gilroy/fonts.css';
import reportWebVitals from './reportWebVitals';
import { GoogleOAuthProvider } from '@react-oauth/google';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="282680605569-38n15fqmllfcgnlsfvs9o9nnibtvamsc.apps.googleusercontent.com">
      <App />
    </GoogleOAuthProvider>
  </React.StrictMode>
);

reportWebVitals();
