import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css'
import Routes from './routes/Routes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <Routes/>
  </React.StrictMode>
)