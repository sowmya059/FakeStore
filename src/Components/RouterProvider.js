import React from "react";
import { Routes, Route } from "react-router-dom";
import AddCart from "./Components/AddCart";
import Home from "./Components/Homepage";

function RouterProvider() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<AddCart />} />
      </Routes>
    </>
  );
}
export default RouterProvider;
