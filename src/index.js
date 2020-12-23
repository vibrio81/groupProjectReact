import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import "bulma/css/bulma.css";
import Routes from './Routes';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

ReactDOM.render(
  <Routes>
    <App />
  </Routes>,
  document.getElementById('root')
);
