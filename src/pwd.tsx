import React from 'react';
import ReactDOM from 'react-dom/client';
import Generate from './components/Generate';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Generate />
  </React.StrictMode>
);