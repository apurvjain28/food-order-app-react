import classes from "./Header.module.css";
import mealImage from "../../assets/meals.jpg";
import React from "react";
import HeaderCartButton from "./HeaderCartButton";

const Header = () => {
  return (
    <React.Fragment>
      <div className={classes.header}>
        <h1>ReactMeals</h1>
      </div>
      <div className={classes["main-image"]}>
        <img scr={mealImage} alt="Panel Food"></img>
      </div>
      <HeaderCartButton />
    </React.Fragment>
  );
};

export default Header;
