import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

import React, { useState, useEffect } from "react";

function App() {
  const [isModalVisible, setModalVisible] = useState(true);

  const closeButtonHandler = () => {
    setModalVisible(false);
  };

  const cartButtonHandler = () => {
    setModalVisible(true);
  };

  return (
    <React.Fragment>
      <Cart isCartVisible={isModalVisible} closeCart={closeButtonHandler} />
      <Header openCart={cartButtonHandler} />
      <main>
        <Meals />
      </main>
    </React.Fragment>
  );
}

export default App;
