import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Helmet } from 'react-helmet';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
       <Helmet>
        <title>Mukund Hadiya Portfolio</title>
        <meta name="description" content="Mukund Hadiya Portfolio" />
        <meta name="keywords" content="Mukund Hadiya, Portfolio, MERN Stack Developer , NEXT JS , IOT , REACT NATIVE" />
        <meta name="author" content="Mukund Hadiya" />
        <link rel="canonical" href="https://mukundhadiya.netlify.app" />
      </Helmet>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
