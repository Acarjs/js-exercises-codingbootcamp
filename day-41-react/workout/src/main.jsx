import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.scss';
// importing the default export of  ./App.jsx as 'Bob', no matter its original name
import Bob from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Bob />
  </React.StrictMode>
);
