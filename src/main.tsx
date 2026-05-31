import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/tokens.css';
import './styles/copy-tools.css';
import './styles/compare-mode.css';
import './styles/example-gallery.css';
import './styles/related-examples.css';
import './styles/daily-formula.css';
import './styles/print.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
