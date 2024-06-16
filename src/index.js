import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { JoinedProvider } from "./Contexts/JoinedContext"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <JoinedProvider>
      <App />
    </JoinedProvider>
  </React.StrictMode>
);
