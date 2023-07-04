import React, { useState } from "react";

import { BrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Homepage";
import "./App.css";
import AddCart from "./Components/AddCart";
function App() {
  return (
    <>
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </>
  );
}

export default App;
