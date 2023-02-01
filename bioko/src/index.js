import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
import { msalConfig } from "./authConfig";
import { BrowserRouter as Router } from "react-router-dom";

const msalInstance = new PublicClientApplication(msalConfig);
const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <MsalProvider instance={msalInstance}>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </MsalProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
