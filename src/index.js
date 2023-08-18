import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App, { appRout } from './App';
import { RouterProvider } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={appRout}>
      <App />
    </RouterProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
