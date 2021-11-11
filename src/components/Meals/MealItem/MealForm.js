import React from "react";
import classes from "./MealForm.module.css";
import Input from "../../UI/Input";

const MealForm = (props) => {
  return (
    <div className={classes.form}>
      <Input
        input={{ id: "amount", label: "Amount", type: "number", step: "1" }}
      />
      <button>+Add</button>
    </div>
  );
};

export default MealForm;
