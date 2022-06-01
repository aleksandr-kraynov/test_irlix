import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

let state = [
  {number: 1, text: 'Тестовая запись'},
  {number: 9, text: 'Тестовая запись 2'},
  {number: 11, text: 'Тестовая запись 3'},
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App state={state}/>
  </React.StrictMode>
);

reportWebVitals();
