import React from "react";

import BaseRouter from "./BaseRoutes";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <BaseRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;
