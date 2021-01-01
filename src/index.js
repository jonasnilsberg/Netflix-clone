import React from "react";
import { render } from "react-dom";
import App from "./app.js";
import "normalize.css";
import { GlobalStyles } from "./global-styles";

render(
  <>
    <GlobalStyles></GlobalStyles>
    <App />
  </>,
  document.getElementById("root")
);
