import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import counterReducer from "./features/counter.tsx";

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
