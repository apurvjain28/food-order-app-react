import React, { useRef, useState } from "react";
import classes from "./MealForm.module.css";
import Input from "../../UI/Input";

const MealForm = (props) => {
  const amountInputRef = useRef();
  const [isAmountValid, setAmountValid] = useState(true);

  const submitHandler = (event) => {
    event.preventDefault();
    // value is always a string
    //+ converts string to number
    const enteredAmount = +amountInputRef.current.value;

    if (
      enteredAmount < 1 ||
      enteredAmount > 5 ||
      amountInputRef.current.value.trim().length === 0
    ) {
      setAmountValid(false);
      return;
    }

    props.onAddToCart(enteredAmount);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button type="submit">+Add</button>
      {!isAmountValid && <p>Enter valid amount between 1 to 5</p>}
    </form>
  );
};

export default MealForm;
