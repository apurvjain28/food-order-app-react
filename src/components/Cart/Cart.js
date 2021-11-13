import React, { useContext } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
  var cartCtx = useContext(CartContext);

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <li>
          <CartItem
            name={item.name}
            price={item.price}
            amount={item.amount}
            onAdd={item.addItem}
            onRemove={item.removeItem}
          />
        </li>
      ))}
    </ul>
  );

  return (
    <Modal closeCart={props.closeCart}>
      {cartCtx.items.length ? cartItems : <h3>Add item in Cart</h3>}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{cartCtx.totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.closeCart}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
