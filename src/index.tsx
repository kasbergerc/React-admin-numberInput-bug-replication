import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';

const stuff = document.getElementById('root');
if (stuff != undefined) {
  const root = ReactDOM.createRoot(stuff);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
