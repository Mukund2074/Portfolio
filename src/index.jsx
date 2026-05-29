import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Helmet } from "react-helmet";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.Fragment>
    <Helmet>
      <title>Mukund Hadiya Portfolio</title>
      <meta name="description" content="Mukund Hadiya Portfolio" />
      <meta
        name="keywords"
        content="Mukund Hadiya, Portfolio, MERN Stack Developer , NEXT JS , IOT , REACT NATIVE"
      />
      <meta name="author" content="Mukund Hadiya" />
      <link rel="canonical" href="https://mukundhadiya.netlify.app" />
    </Helmet>
    <App />
  </React.Fragment>,
);
