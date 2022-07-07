import React from "react";
import ReactDOM from "react-dom/client";
import { createGlobalStyle } from "styled-components";
import App from "./App";

const GlobalStyle = createGlobalStyle`
*{margin: 0;
padding:0;
box-sizing:border-box}

html,body{
font-size: 62.5%;
height: 100%;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

body{
  font-size: 1.6rem;
}
}`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyle></GlobalStyle>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
