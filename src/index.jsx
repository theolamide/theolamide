import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';

// The prerendered markup is replaced, not hydrated, so its server-side styles
// are removed once the client styles are in place.
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root'),
  () => document.querySelectorAll('style[data-prerender]').forEach(node => node.remove())
);
