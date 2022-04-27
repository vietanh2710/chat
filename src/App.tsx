import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "antd/dist/antd.css";

import AppRoutes from "./routes";
import store from "./store";
import "./App.css";

function App() {
  return (
    <div className="app">
      {/* <Provider store={store}> */}
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
      {/* </Provider> */}
    </div>
  );
}

export default App;
