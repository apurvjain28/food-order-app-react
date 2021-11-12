import { Fragment } from "react";

import MealsSummary from "./MealsSummary";
import MealAvailable from "./MealAvailable";
import MealForm from "./MealItem/MealForm";

const Meals = () => {
  return (
    <Fragment>
      <MealsSummary />
      <MealAvailable />
    </Fragment>
  );
};

export default Meals;
