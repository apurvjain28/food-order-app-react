import React, { useContext, useState, useEffect } from "react";
import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";
// import Modal from "../UI/Modal";

const HeaderCartButton = (props) => {
  const [isButtonHighlighted, setIsButtonHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);

  const numOfCartItems = cartCtx.items.reduce((curNum, item) => {
    return curNum + item.amount;
  }, 0);

  const { items } = cartCtx;

  const btnClasses = `${classes.button} ${
    isButtonHighlighted ? classes.bump : ""
  }`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setIsButtonHighlighted(true);

    const timer = setTimeout(() => {
      setIsButtonHighlighted(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [items]);

  return (
    <React.Fragment>
      <button className={btnClasses} onClick={props.openCart}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        Your Cart
        <span className={classes.badge}>{numOfCartItems}</span>
      </button>
    </React.Fragment>
  );
};

export default HeaderCartButton;
