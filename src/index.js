import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));  // Make sure 'root' exists in HTML
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
