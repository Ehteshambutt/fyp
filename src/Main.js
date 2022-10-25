import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import store, { persistor } from "./Redux/Store/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

function Main() {
  return (
    <Provider store={store}>
       <PersistGate loading={null} persistor={persistor}>
    <App />
  </PersistGate>
    </Provider>
  );
}
export default Main;
