import { BrowserRouter } from "react-router-dom";
import RouterProvider from "./Components/RouterProvider";

import "./App.css";
import CartProvider from "./storecontext/Context";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="App">
          <RouterProvider />
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
