import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./pages/home/App.js";
import { CartProvider } from "../src/context/cartContext";

ReactDOM.render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
