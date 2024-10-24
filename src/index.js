import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Importa el componente principal

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // Se monta en el div con id "root" en index.html
);