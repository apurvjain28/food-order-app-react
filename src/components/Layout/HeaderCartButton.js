import React from "react";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = () => {
  return (
    <React.Fragment>
      <button className={classes.button}>Your Cart</button>
      <span className={classes.badge}>{"0"}</span>
    </React.Fragment>
  );
};

export default HeaderCartButton;
