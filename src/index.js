import 'modern-normalize/modern-normalize.css';
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { App } from 'Components/App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="/goit-react-hw-05-movies">
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
