import React, { useContext, useState } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import CheckoutForm from "./Checkout/CheckoutForm";

const Cart = (props) => {
  const [isCheckout, setIsCheckout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);

  var cartCtx = useContext(CartContext);
  const hasItem = cartCtx.items.length > 0;

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <li>
          <CartItem
            key={item.id}
            name={item.name}
            price={item.price}
            amount={item.amount}
            onAdd={cartItemAddHandler.bind(null, item)}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
          />
        </li>
      ))}
    </ul>
  );

  const orderHandler = () => {
    return setIsCheckout(true);
  };

  const modalActions = (
    <div className={classes.actions}>
      <button className={classes["button--alt"]} onClick={props.closeCart}>
        Close
      </button>
      {hasItem && (
        <button className={classes.button} onClick={orderHandler}>
          Order
        </button>
      )}
    </div>
  );

  // ideally there should be server side validation as well
  const submitOrderHandler = (userData) => {
    setIsSubmitting(true);
    fetch(
      "https://food-order-app-52e74-default-rtdb.firebaseio.com/orders.json",
      {
        method: "POST",
        body: JSON.stringify({
          user: userData,
          orderedItems: cartCtx.items,
        }),
      }
    );
    setIsSubmitting(false);
    setDidSubmit(true);
    cartCtx.resetCart();
  };

  const isSubmittingContent = <p>Loading....</p>;

  const didSubmitContent = <p>Your order is successfully placed!</p>;

  const cartContent = (
    <React.Fragment>
      {hasItem ? cartItems : <h3>Add item in Cart</h3>}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{cartCtx.totalAmount.toFixed(2)}</span>
      </div>
      {isCheckout && (
        <CheckoutForm
          onConfirm={submitOrderHandler}
          onCancel={props.closeCart}
        />
      )}
      {!isCheckout && modalActions}
    </React.Fragment>
  );

  return (
    <Modal closeCart={props.closeCart}>
      {isSubmitting && !didSubmit && isSubmittingContent}
      {!isSubmitting && !didSubmit && cartContent}
      {!isSubmitting && didSubmit && didSubmitContent}
    </Modal>
  );
};

export default Cart;
