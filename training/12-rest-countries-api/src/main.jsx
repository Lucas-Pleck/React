/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import './assets/index.css';
import WebFont from 'webfontloader';
import App from './App';

WebFont.load({
  google: {
    families: ['Nunito:300,400,700', 'sans-serif']
  }
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
