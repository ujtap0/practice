import { useState } from "react";
import Header from "./Layout/Header";
import Meals from "./Meals/Meals";
import CartProvider from "./store/CartProvider";
import Cart from "./Cart/Cart";

function App() {
  const[cartIsShown, setCartIsShown]=useState(false)
  const showCartHanlder = () => {
    setCartIsShown(true)
  }
  const hideCartHandler = () => {
    setCartIsShown(false)
  }

  return (<CartProvider>
    {cartIsShown && <Cart onClose={hideCartHandler}/>}
    <Header
      onShowCart={showCartHanlder}
    />
    <main>
      <Meals/>
    </main>
  </CartProvider>
  );
}

export default App;
