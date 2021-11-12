import React, { useState } from "react";
import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";

// import Modal from "../UI/Modal";

const HeaderCartButton = (props) => {
  return (
    <React.Fragment>
      <button className={classes.button} onClick={props.openCart}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        Your Cart
        <span className={classes.badge}>{"0"}</span>
      </button>
    </React.Fragment>
  );
};

export default HeaderCartButton;
