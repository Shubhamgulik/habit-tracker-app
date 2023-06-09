import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store/store";
import "./index.css";
import App from "./components/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* Wrapping App with Provider so that Store will be available */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
