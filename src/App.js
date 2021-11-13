import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

import React, { useState } from "react";

function App() {
  const [isModalVisible, setModalVisible] = useState(false);

  const closeButtonHandler = () => {
    setModalVisible(false);
  };

  const cartButtonHandler = () => {
    setModalVisible(true);
  };

  return (
    <CartProvider>
      {isModalVisible && <Cart closeCart={closeButtonHandler} />}
      <Header openCart={cartButtonHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
