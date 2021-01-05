import React, { useState } from "react";
import App from "./App";

function App0() {
  const [cart, setCart] = useState({});
  return <App cart={cart} setCart={setCart} />;
}

export default App0;
